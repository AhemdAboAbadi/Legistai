import pyodbc
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_CONFIG = {
    'server': os.getenv('DB_SERVER'),
    'database': os.getenv('DB_NAME'),
    'username': os.getenv('DB_USERNAME'),
    'password': os.getenv('DB_PASSWORD'),
    'driver': os.getenv('DB_DRIVER')
}

def get_db_connection():
    try:
        connection_string = (
            f"DRIVER={DATABASE_CONFIG['driver']};"
            f"SERVER={DATABASE_CONFIG['server']};"
            f"DATABASE={DATABASE_CONFIG['database']};"
            f"UID={DATABASE_CONFIG['username']};"
            f"PWD={DATABASE_CONFIG['password']};"
            "Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;"
        )
        connection = pyodbc.connect(connection_string)
        return connection
    except Exception as e:
        print('faild to connection', e)
        return None


def create_users_table():
    conn = get_db_connection()
    if not conn:
        print('Database connection failed')
        return
    
    cursor = conn.cursor()
    cursor.execute("""
    IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='users' AND xtype='U')
    CREATE TABLE users (
        id INT PRIMARY KEY IDENTITY(1,1),
        email NVARCHAR(255) UNIQUE NOT NULL,
        password NVARCHAR(255) NOT NULL
    );
    """)
    conn.commit()
    print('✅ Users table created successfully')

if __name__ == '__main__':
    create_users_table()
