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
    if (currentIngredient.trim() !== "") {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        currentIngredient,
      ]);
      setCurrentIngredient("");
    }
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
      <div>
        <div className="ingredient">{ingredients.join(", ")}</div>
      </div>
      {ingredients.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <TextField
            id="recipes-number-input"
            label="recipes number"
            type="text"
            autoComplete="off"
            sx={{ width: "110px" }}
            inputProps={{ type: "number" }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 0.8, ml: 4 }}
            onClick={handleAddIngredient}
          >
            Submit
          </Button>
        </Box>
      )}
    </div>
  );
};

export default App;
