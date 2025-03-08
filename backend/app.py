from flask import Flask, request, jsonify
from flask_cors import CORS

import jwt 

import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
CORS(app)

# Simulated data (to be replaced with Azure SQL connection when available)
users = [
    {'username': 'testuser@gmail.com', 'password': 'password123', 'id': 1}
]

# Azure SQL Database connection settings (commented until keys are available)
# DATABASE_CONFIG = {
#     'server': 'your_server.database.windows.net',
#     'database': 'your_database',
#     'username': 'your_username',
#     'password': 'your_password',
#     'driver': '{ODBC Driver 18 for SQL Server}'
# }

# Establish connection to Azure SQL (commented until keys are available)
# def get_db_connection():
#     try:
#         connection_string = (
#             f'DRIVER={DATABASE_CONFIG["driver"]};'
#             f'SERVER={DATABASE_CONFIG["server"]};'
#             f'DATABASE={DATABASE_CONFIG["database"]};'
#             f'UID={DATABASE_CONFIG["username"]};'
#             f'PWD={DATABASE_CONFIG["password"]};'
#             'Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'
#         )
#         connection = pyodbc.connect(connection_string)
#         return connection
#     except Exception as e:
#         print('Failed to connect to the database', e)
#         return None

# Simple login endpoint with token generation
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400
    
    # Use simulated data for now
    user = next((u for u in users if u['username'] == username and u['password'] == password), None)
    if not user:
        return jsonify({'message': "User doesn't exist", 'showSignUp': True}), 404
        
    # Generate a JWT token
    token = jwt.encode(
        {
            'user_id': user['id'],
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        },
        app.config['SECRET_KEY'],
        algorithm='HS256'
    )
    return jsonify({'message': 'Login successful', 'token': token, 'redirect': '/dashboard'}), 200

# Example test endpoint
@app.route('/test', methods=['GET'])
def test():
    return jsonify({'message': 'Test endpoint working'}), 200

if __name__ == '__main__':
    app.run(debug=True)
