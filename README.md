# SpotOn home exercise

## Overview

The Recipe Finder App is a full-stack web application that allows users to find recipes based on the ingredients they have. This project is divided into two main parts: the Front-end and the Backend.

## Running

#### Run server

1. `cd server`
2. `py app.py`

To make server run properly you need to set up `.env` file in server directory, like this:

```
SPOONACULAR_API_KEY=/*Your API key*/
SPOONACULAR_API_URL_RECIPES=https://api.spoonacular.com/recipes/findByIngredients
SPOONACULAR_API_URL_NUTRIENTS=https://api.spoonacular.com/recipes/{}/nutritionWidget.json

```

#### Run client

1. `cd client`
2. `yarn dev`

## Client

On the client side, users can input their available ingredients and specify how many recipes they'd like to retrieve. If a user needs to remove an ingredient, they can simply hover over the ingredient and click to delete it.

## Server

The backend server is designed to handle requests from the front-end and fetch recipes from an external API (spoonacular).

#### Endpoint GET `/recipes`

Parameters:

- ingredients: A comma-separated list of ingredients (e.g., ingredients=tomatoes,eggs,pasta).
- number-of-recipes: The maximum number of recipes to return (e.g., number-of-recipes=5).
