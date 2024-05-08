import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify


app = Flask(__name__)
load_dotenv()

API_KEY = os.getenv('API_KEY')

@app.route('/recipes', methods=['GET'])
def get_recipes():
    ingredients = request.args.get('ingredients')
    number_of_recipes = request.args.get('number-of-recipes', type=int)
    
    if not ingredients:
        return jsonify({"error": "No ingredients provided"}), 400
    
    if not number_of_recipes:
        return jsonify({"error": "No number of recipes provided"}), 400
    
    
    return "OK", 200

if __name__ == '__main__':
    app.run(debug=True)