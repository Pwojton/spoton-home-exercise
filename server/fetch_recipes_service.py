import os
import requests

from dotenv import load_dotenv
from flask import jsonify


load_dotenv()

API_KEY = os.getenv('SPOONACULAR_API_KEY')
API_URL_RECIPES = os.getenv('SPOONACULAR_API_URL_RECIPES')


def fetch_recipes(ingredients, number_of_recipes):
    response = requests.get(API_URL_RECIPES, params={
        'apiKey': API_KEY,
        'ingredients': ingredients,
        'number': number_of_recipes
    })
    
    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch recipes"}), 500
    
    recipes = response.json()
    formatted_recipes = []

    for recipe in recipes:
        formatted_recipe = {
            "name": recipe['title'],
            "ingredients_present": list(filter(lambda x: x['amount'] > 0, recipe['usedIngredients'])),
            "ingredients_missing": recipe['missedIngredients'],
        }
        formatted_recipes.append(formatted_recipe)
        

    return jsonify(formatted_recipes)

def fetch_calories(recipes):
    pass
