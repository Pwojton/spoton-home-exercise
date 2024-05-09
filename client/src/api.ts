import axios from "axios";

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

    return response.data;
  } catch (error) {
    return [];
  }
};
