import axios from "axios";

interface Recipe {
  name: string;
  ingredients_present: string[];
  ingredients_missing: string[];
  calories: number;
  carbs: number;
  proteins: number;
}

export const getRecipes = async (
  ingredients: string[],
  recipesNumber: number
) => {
  try {
    const response = await axios.get("http://localhost:5000/recipes", {
      params: {
        ingredients: ingredients.join(","),
        "number-of-recipes": recipesNumber,
      },
    });

    if (response.data === undefined) {
      return new Error("Recipes are undefined");
    }

    return response.data;
  } catch (error) {
    return new Error("Error making the request");
  }
};
