import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface IngredientsNumberFormProps {
  recipesNumber: number;
  setRecipesNumber: (value: number) => void;
  handleSubmit: () => void;
}

export const IngredientsNumberForm: React.FC<IngredientsNumberFormProps> = ({
  recipesNumber,
  setRecipesNumber,
  handleSubmit,
}) => {
  return (
    <Box sx={{ mt: 6 }}>
      <TextField
        id="recipes-number-input"
        label="Recipes number"
        type="text"
        autoComplete="off"
        sx={{ width: "145px" }}
        inputProps={{ type: "number", min: 1, max: 10 }}
        value={recipesNumber}
        onChange={(e) => setRecipesNumber(parseInt(e.target.value, 10))}
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
  );
};
