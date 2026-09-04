//on recupere le modele Recipe depuis le dossier models
const { Recipe } = require("../models");

// on recupere tt les recettes
const getAllRecipes = async (req, res) => {
  try {
    //on demande à sequelize de récuperer tt les recettes
    const recipes = await Recipe.findAll(); 
    // on renvoie les recettes au format json
    res.status(200).json(recipes);
  } catch (error) {
    // si uneerreur se produit, on l'afficher sur le terminal
    console.error("erreur lors de le recuperation des recettes : ", error);

    // on renvoie un message d'erreur
    res.status(500).json({ 
        message: "Erreur lors de la récupération des recettes" 
    });
  }
};
// on exporte la fonction pour pouvoir l'utiliser dans les routes
module.exports = {
  getAllRecipes,
};