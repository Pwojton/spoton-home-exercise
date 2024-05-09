export interface Recipe {
  name: string;
  ingredients_present: string[];
  ingredients_missing: string[];
  calories: number;
  carbs: number;
  proteins: number;
}
