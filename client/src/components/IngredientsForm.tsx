import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface IngredientsFormProps {
  currentIngredient: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddIngredient: () => void;
}

export const IngredientsForm: React.FC<IngredientsFormProps> = ({
  currentIngredient,
  handleInputChange,
  handleAddIngredient,
}) => {
  return (
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
  );
};
