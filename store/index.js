const { getRecipes } = require("../services/api.js");

export const state = () => ({
    recipes: []
});

export const mutations = {
    ADD_RECIPE(state, recipeData) {
        state.recipe.push({ id: date.now(), ...recipeData });
    },
    SET_RECIPES(state, recipes) {
        state.recipes = recipes;
    }
};

export const getters = {
    recipes: state => {
        return state.recipes;
    },
    getRecipeById: state => {
        return (id) => state.recipes.find(x => x.id == id);
    }
};

export const actions = {
    loadRecipes: ({ commit }) => {
        const recipes = getRecipes();
        commit("SET_RECIPES", recipes);
    }
};