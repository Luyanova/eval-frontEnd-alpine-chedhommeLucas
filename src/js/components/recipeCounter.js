import recipes from './../../data/recipes.json';

export default function recipeCounter() {
  return {
    recipes: [],

    init() {

      this.recipes = recipes.recipes;
    },
  };
}
