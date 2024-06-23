# app.py

from flask import Flask,jsonify,request
from pathFinder import get_path,get_traffic_path  # Adjust the import path based on your project structure
from flask_cors import CORS

app = Flask(__name__)
CORS(app,origins="*")

@app.route('/')
def home():
    return jsonify({'message': 'Hello World'})

@app.route('/getRoute', methods=['POST'])
def index():
    data = request.get_json()
    data_model = get_path(data['start'],data['end'])  # Call the function
    # Use data_model as needed
    return jsonify({"Path":data_model})

@app.route('/getTrafficRoute', methods=['POST'])
def traffic():
    data = request.get_json()
    data_model = get_traffic_path(data['start'],data['end'],5)  # Call the function
    # Use data_model as needed
    return jsonify({"Path":data_model})

if __name__ == '__main__':
    app.run(debug=True)