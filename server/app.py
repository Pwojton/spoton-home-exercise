from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from fetch_recipes_service import fetch_recipes

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/recipes', methods=['GET'])
@cross_origin()
def get_recipes():
    ingredients = request.args.get('ingredients')
    number_of_recipes = request.args.get('number-of-recipes', type=int)
    
    if not ingredients:
        return jsonify({"error": "No ingredients provided"}), 400
    
    if not number_of_recipes:
        return jsonify({"error": "No number of recipes provided"}), 400
    
    recipes = fetch_recipes(ingredients, number_of_recipes)
    
    return recipes


if __name__ == '__main__':
    app.run(debug=True)