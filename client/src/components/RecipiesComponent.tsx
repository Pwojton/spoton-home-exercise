import {
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import React from "react";
import type { Recipe } from "../types";

interface RecipesComponentProps {
  recipes: Recipe[];
}

const Recipe: React.FC<Recipe> = ({
  name,
  ingredients_missing,
  ingredients_present,
  calories,
  carbs,
  proteins,
}) => {
  return (
    <Paper variant="outlined" sx={{ maxWidth: 320, p: 2, m: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        {name}
      </Typography>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
        Ingredients present
      </Typography>
      <Box sx={{ mb: 2 }}>
        {ingredients_present.map((ingredient, index) => (
          <Typography key={index}>{ingredient}</Typography>
        ))}
      </Box>
      <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
        Ingredients missing
      </Typography>
      <Box sx={{ mb: 2 }}>
        {ingredients_missing.map((ingredient, index) => (
          <Typography key={index}>{ingredient}</Typography>
        ))}
      </Box>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell>Calories</TableCell>
            <TableCell align="right">{calories}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Carbs</TableCell>
            <TableCell align="right">{carbs} g</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Proteins</TableCell>
            <TableCell align="right">{proteins} g</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

const RecipesComponent: React.FC<RecipesComponentProps> = ({ recipes }) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {recipes &&
        recipes.map((recipe) => (
          <Recipe
            key={recipe.name}
            name={recipe.name}
            ingredients_present={recipe.ingredients_present}
            ingredients_missing={recipe.ingredients_missing}
            calories={recipe.calories}
            carbs={recipe.carbs}
            proteins={recipe.proteins}
          />
        ))}
    </Box>
  );
};

export default RecipesComponent;
