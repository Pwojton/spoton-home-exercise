import Box from "@mui/material/Box";

interface IngredientsListProps {
  ingredients: string[];
  handleDeleteIngredient: (ingredientToDelete: string) => void;
}

export const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  handleDeleteIngredient,
}) => {
  return (
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
  );
};
