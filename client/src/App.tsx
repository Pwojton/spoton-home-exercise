import React, { useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles/App.css";

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState<string>("");

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
    console.log("Submitted Ingredients:", ingredients);
  };

  return (
    <div className="App">
      <h1>Recipes generator</h1>
      <Box
        component="form"
        sx={{ mt: 5 }}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <TextField
          id="ingredient-input"
          label="Ingredient"
          type="text"
          autoComplete="off"
          value={currentIngredient}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 0.8, ml: 4 }}
          onClick={handleAddIngredient}
        >
          Add
        </Button>
      </Box>
      {ingredients.length === 10 && (
        <Box sx={{ mt: 1 }}>
          You have reached the maximum number of ingredients.
        </Box>
      )}
      <Box sx={{ display: "inline-flex" }}>
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="ingredient"
            onClick={() => handleDeleteIngredient(ingredient)}
            style={{ cursor: "pointer", padding: "5px" }}
          >
            {ingredient}
          </div>
        ))}
      </Box>
      {ingredients.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <TextField
            id="recipes-number-input"
            label="Recipes number"
            type="text"
            autoComplete="off"
            sx={{ width: "145px" }}
            inputProps={{ type: "number", min: 1, max: 10 }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 0.8, ml: 4 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      )}
    </div>
  );
};

export default App;
