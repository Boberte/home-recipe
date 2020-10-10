const { getRecipes, createRecipe, updateRecipe, deleteRecipe } = require("../services/api.js");

export const state = () => ({
    recipes: []
});

export const mutations = {
    ADD_RECIPE(state, recipe) {
        state.recipes.push(recipe);
    },
    SET_RECIPES(state, recipes) {
        state.recipes = recipes;
    },
    UPDATE_RECIPE(state, recipe) {
        const index = state.recipes.findIndex(x => x.id == recipe.id);
        if (index >= 0)
            state.recipes[index] = recipe;
    },
    REMOVE_RECIPE(state, recipe) {
        const index = state.recipes.findIndex(x => x.id == recipe.id);
        if (index >= 0)
            state.recipes.splice(index, 1);
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
    loadRecipes: async ({ commit }) => {
        const recipes = await getRecipes();
        commit("SET_RECIPES", recipes);
    },
    createRecipe: async ({ commit }, recipeData) => {
        const recipe = await createRecipe(recipeData);
        commit("ADD_RECIPE", recipe);
        return recipe.id;
    },
    updateRecipe: async ({ commit }, recipe) => {
        const res = await updateRecipe(recipe);
        commit("UPDATE_RECIPE", recipe);
        return recipe;
    },
    deleteRecipe: async ({ commit }, recipe) => {
        const res = await deleteRecipe(recipe);
        commit("REMOVE_RECIPE", recipe);
        return recipe;
    }
};