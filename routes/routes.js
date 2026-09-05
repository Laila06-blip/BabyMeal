const express = require("express");

const router = express.Router();

// on recupere le controlleur des recettes
const recipeController = require("../controllers/recipecontroller");


//routes de test l'API
router.get("/", (req, res) => {
    res.json({
        message: "API BabyMeal fonctionne"
    });
});

//route pour récupérer toutes les recettes
router.get("/recipes", recipeController.getAllRecipes);

//recupere une recette grace a son id 
router.get("/recipes/:id", recipeController.getRecipeById);

//cree une nouvelle recette
router.post("/recipes", recipeController.createRecipe);

// modifie une recette 
router.put("/recipes/:id", recipeController.updateRecipe);

// supprime une recette
router.delete("/recipes/:id", recipeController.deleteRecipe);

module.exports = router;