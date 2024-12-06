import recipesData from './../../data/recipes.json';

export default function Gallery() {
  return {
    recipes: [],
    selectedRecipe: null,
    selectedDifficulty: '', 
    selectedCategory: '', 
    selectedPreparationTime: '',
    search: '', 
    currentIndex: 0,

    init: function () {
      this.recipes = recipesData.recipes.map((recipe, index) => ({
        ...recipe,
        id: index,
      }));
    },

    get filteredPreparationTimeRecipes() {
      if (!this.selectedPreparationTime) return this.recipes;

      return this.recipes.filter(recipe => {
        switch (this.selectedPreparationTime) {
          case 'under30':
            return recipe.preparationTime < 30;
          case 'under60':
            return recipe.preparationTime >= 30 && recipe.preparationTime < 60;
          case 'under90':
            return recipe.preparationTime >= 60 && recipe.preparationTime < 90;
          case 'above90':
            return recipe.preparationTime >= 90;
          default:
            return true;
        }
      });
    },

    get filteredRecipes() {
      return this.filteredPreparationTimeRecipes.filter((recipe) => {
        const matchesDifficulty = this.selectedDifficulty ? recipe.difficulty === this.selectedDifficulty : true;
        const matchesCategory = this.selectedCategory ? recipe.category === this.selectedCategory : true;
        const matchesSearch = this.search ? recipe.title.toLowerCase().includes(this.search.toLowerCase()) : true;
        return matchesDifficulty && matchesCategory && matchesSearch;
      });
    },

    openLightbox: function (recipeId) {
      this.currentIndex = this.recipes.findIndex((recipe) => recipe.id === recipeId);
      this.selectedRecipe = this.recipes[this.currentIndex];
    },

    closeLightbox: function () {
      this.selectedRecipe = null;
    },

    isLightboxActive: function () {
      return this.selectedRecipe !== null;
    },

    nextRecipe: function () {
      if (this.currentIndex < this.recipes.length - 1) {
        this.currentIndex++;
        this.selectedRecipe = this.recipes[this.currentIndex];
      }
    },

    previousRecipe: function () {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.selectedRecipe = this.recipes[this.currentIndex];
      }
    },

    hasPrevRecipe() {
      return this.currentIndex > 0;
    },

    hasNextRecipe() {
      return this.currentIndex < this.recipes.length - 1;
    },
  };
}
