from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash, generate_password_hash
from app.services.db_service import get_db_connection
from app.utils.token_utils import generate_token

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400
    
    conn = get_db_connection()
    if not conn:
        return jsonify({'message': 'Database connection failed'}), 500
    
    cursor = conn.cursor()
    cursor.execute("SELECT id, password FROM users WHERE email = ?", (username,))
    user = cursor.fetchone()
    
    if not user or not check_password_hash(user[1], password):
        return jsonify({'message': "User doesn't exist", 'showSignUp': True}), 404
    
    token = generate_token(user[0])
    return jsonify({'message': 'Login successful', 'token': token, 'redirect': '/dashboard'}), 200

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400
    
    conn = get_db_connection()
    if not conn:
        return jsonify({'message': 'Database connection failed'}), 500
    
    cursor = conn.cursor()
    try:
        hashed_password = generate_password_hash(password)
        cursor.execute("INSERT INTO users (email, password) VALUES (?, ?)", (username, hashed_password))
        conn.commit()
        return jsonify({'message': 'User registered successfully'}), 201
    except Exception as e:
        print('Signup error:', e)
        return jsonify({'message': 'Signup failed', 'error': str(e)}), 500
