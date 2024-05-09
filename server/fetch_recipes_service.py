import os
import requests

from dotenv import load_dotenv
from flask import jsonify
load_dotenv()

API_KEY = os.getenv('SPOONACULAR_API_KEY')
API_URL_RECIPES = os.getenv('SPOONACULAR_API_URL_RECIPES')
API_URL_NUTRITION = os.getenv('SPOONACULAR_API_URL_NUTRIENTS')


def fetch_recipes(ingredients, number_of_recipes):
    response = requests.get(API_URL_RECIPES, params={
        'apiKey': API_KEY,
        'ingredients': ingredients,
        'number': number_of_recipes
    })
    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch recipes"}), 500
    
    recipes = response.json()
    return format_recipes(recipes)
        
def format_recipes(recipes):
    formatted_recipes = []

    for recipe in recipes:
        ingredients_present = recipe['usedIngredients']
        ingredients_missing = recipe['missedIngredients']
        
        proteins, carbs, calories = fetch_nutrients(ingredients_missing + ingredients_present)
        
        ingredients_present = [ingredient['name'] for ingredient in recipe['usedIngredients']]
        ingredients_missing = [ingredient['name'] for ingredient in recipe['missedIngredients']]
        
        formatted_recipe = {
            "name": recipe['title'],
            "ingredients_present": ingredients_present,
            "ingredients_missing": ingredients_missing,
            "calories": round(calories),
            "proteins": round(proteins),
            "carbs": round(carbs)
        }

        formatted_recipes.append(formatted_recipe)
        
    return jsonify(formatted_recipes)

def fetch_nutrients(ingredients):
    proteins = 0
    carbs = 0
    calories = 0
    for ingredient in ingredients:
        response = requests.get(API_URL_NUTRITION.format(ingredient["id"]), params={'apiKey': API_KEY,})
        
        if response.status_code != 200:
            print("Failed to fetch nutrients for ingredient: ", ingredient["name"])
        
        if response.status_code == 200:
            nutrients = response.json()
            for nutrient in nutrients['nutrients']:
                if nutrient["name"] == "Protein":
                    proteins += nutrient["amount"]
                if nutrient["name"] == "Carbohydrates":
                    carbs += nutrient["amount"]
                if nutrient["name"] == "Calories":
                    calories += nutrient["amount"]
  
    return proteins, carbs, calories


