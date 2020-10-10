
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

export {
    getRecipes
}