# app.py

from flask import Flask,jsonify,request
from pathFinder import get_path,get_graph  # Adjust the import path based on your project structure

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({'message': 'Hello World'})

@app.route('/getRoute', methods=['GET'])
def index():
    data = request.get_json()
    data_model = get_path(data['start'],data['end'])  # Call the function
    # Use data_model as needed
    return jsonify({"Path":data_model})

@app.route('/getGraph', methods=['GET'])
def graph():
    data_model = get_graph()  # Call the function
    # Use data_model as needed
    return jsonify({"Graph":data_model})

if __name__ == '__main__':
    app.run(debug=True)