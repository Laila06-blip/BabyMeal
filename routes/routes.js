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

module.exports = router;