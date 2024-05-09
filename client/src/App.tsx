import React, { useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import "./styles/App.css";
import { IngredientsList } from "./components/IngredientsList";
import { IngredientsNumberForm } from "./components/IngredientsNumberForm";
import { IngredientsForm } from "./components/IngredientsForm";

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState<string>("");
  const [recipesNumber, setRecipesNumber] = useState<number>(1);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCurrentIngredient(event.target.value);
  };

  const handleAddIngredient = (): void => {
    const trimmedIngredient = currentIngredient.trim();
    if (
      trimmedIngredient !== "" &&
      ingredients.length < 10 &&
      !ingredients.includes(trimmedIngredient)
    ) {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        trimmedIngredient,
      ]);
      setCurrentIngredient("");
    }
  };

  const handleDeleteIngredient = (ingredientToDelete: string): void => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient !== ingredientToDelete)
    );
  };
  const handleSubmit = (): void => {
    console.log("submitting");
  };

  return (
    <div className="App">
      <h1>Recipes generator</h1>
      <IngredientsForm
        currentIngredient={currentIngredient}
        handleInputChange={handleInputChange}
        handleAddIngredient={handleAddIngredient}
      />
      {ingredients.length === 10 && (
        <Box sx={{ mt: 1 }}>
          You have reached the maximum number of ingredients.
        </Box>
      )}
      <IngredientsList
        ingredients={ingredients}
        handleDeleteIngredient={handleDeleteIngredient}
      />
      {ingredients.length > 0 && (
        <IngredientsNumberForm
          recipesNumber={recipesNumber}
          setRecipesNumber={setRecipesNumber}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default App;
