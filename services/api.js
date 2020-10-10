
const axios = require('axios');
const API_SERVER_URL = "https://home-recipes-api-server.herokuapp.com";
 
async function getRecipes(){
    let recipes = [];
    try {
        const response = await axios.get(`${API_SERVER_URL}/recipe`);
        if(response.data && response.data.recipes){
            recipes = response.data.recipes;
        }
    } catch(err) {
        console.log(err)
    }

    return recipes;
}
async function createRecipe(recipe){
    try {
        const response = await axios.put(`${API_SERVER_URL}/recipe`, recipe);
        if(response.data){
            return response.data;
        }
    } catch(err) {
        console.log(err)
    }
}
async function updateRecipe(recipe){
    try {
        const response = await axios.post(`${API_SERVER_URL}/recipe`, recipe);
        if(response.data){
            return recipe;
        }
    } catch(err) {
        console.log(err)
    }
    return {};
}
async function deleteRecipe(recipe){
    try {
        const response = await axios.delete(`${API_SERVER_URL}/recipe`, recipe);
        if(response.data){
            return recipe;
        }
    } catch(err) {
        console.log(err)
    }
    return {};
}

export {
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe
}