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
// on recupere une recette par son id
const getRecipeById = async (req, res) => {
  try {
    // on recupere l'id de la recette depuis les parametres de la requete
    const recipeId = req.params.id;

    // on cherche la recette grace a sa cle primaire
    const recipe = await Recipe.findByPk(recipeId);

    // si la recette n'existe pas, on renvoie une erreur
    if (!recipe) {
      return res.status(404).json({ message: "Recette non trouvée" });
    };

    // on renvoie la recette au format json
    res.status(200).json(recipe);
  } catch (error) {
    // si uneerreur se produit, on l'afficher sur le terminal
    console.error("erreur lors de le recuperation de la recette : ", error);

    // on renvoie un message d'erreur
    res.status(500).json({ 
        message: "Erreur lors de la récupération de la recette" 
    });
  }
};
// creer une nouvelle recette
const createRecipe = async (req, res) => {
  try {
    // on recupere les données de la recette depuis le corps de la requete
    const { 
        title,
        age, 
        description, 
        image, 
        preparationTime,
        cookingTime,
        portions,
        ingredients,
        steps,
      } = req.body;
      
      // on verifie des champs obligatoire
      if(!title || !age) {
        return res.status(400).json
        ({ 
            message: "Le titre et l'âge sont obligatoires",
        });
      }
    // verifi l'age 
    const allowedAges = [4, 6, 9,12,]
    if(!allowedAges.includes(Number(age))) {
      return res.status(400).json
      ({ 
          message: "L'âge n'est pas valide",
      });
    }
    // creation de la recette dans la base de données avec sequelize
    const newRecipe = await Recipe.create({
        title,
        age: Number(age), 
        description,
        image,
        preparationTime,
        cookingTime,
        portions,
        ingredients,
        steps
    });

    // on renvoie la recette créée au format json
    res.status(201).json(newRecipe);
  } catch (error) {
    // si uneerreur se produit, on l'afficher sur le terminal
    console.error("erreur lors de la création de la recette : ", error);

    // on renvoie un message d'erreur
    res.status(500).json({ 
        message: "Erreur lors de la création de la recette" 
    });
  }
};
// modifier une recette 
const updateRecipe = async (req, res) => {
  try {
    // on recupere la recette grace a l'id present dans l'adresse

    const recipe = await Recipe.findByPk(req.params.id);

    // si la recette n'existe pas, on renvoie une erreur
    if (!recipe) {
      return res.status(404).json({ message: "Recette non trouvée" });
    }
    const {
        title,
        age,
        description,
        image,
        preparationTime,
        cookingTime,
        portions,
        ingredients,
        steps,
      } = req.body;
      //verif du titre s'il est envoye
        if (title !== undefined && title.trim() === "") {
            return res.status(400).json({ message: "Le titre ne peut pas être vide" });
    }
   //verif de l'age s'il est envoyé
const allowedAges = [4, 6, 9, 12];
if (age !== undefined && !allowedAges.includes(Number(age))) {
    return res.status(400).json({ 
        message: "L'âge doit être 4, 6, 9 ou 12 mois" 
    });
}
// modif de la recette
await recipe.update({
    title: title ?? recipe.title,
    age: age !== undefined ? Number(age) : recipe.age,
    description: description ?? recipe.description,
    image: image ?? recipe.image,
    preparationTime: preparationTime ?? recipe.preparationTime,
    cookingTime: cookingTime ?? recipe.cookingTime,
    portions: portions ?? recipe.portions,
    ingredients: ingredients ?? recipe.ingredients,
    steps: steps ?? recipe.steps,
  });

  // on renvoie la recette modifiée au format json
  res.status(200).json(recipe);
} catch (error) {
    // si une erreur se produit, on l'afficher sur le terminal
    console.error("erreur lors de la modification de la recette : ", error);

    res.status(500).json({
        message: "Erreur lors de la modification de la recette"
    });
  }
}
// supprimer une recette
const deleteRecipe = async (req, res) => {
  try {
    // on cherche la recette grace l'id 
    const recipe = await Recipe.findByPk(req.params.id);

    // si la recette n'existe pas, on renvoie une erreur
    if (!recipe) {
      return res.status(404).json({ 
        message: "Recette non trouvée" 
    });
    }
    // on supprime la recette
    await recipe.destroy();

    // on renvoie un message de confirmation
    res.status(200).json({ 
        message: "Recette supprimée avec succès" 
    });
  } catch (error) {
    // si une erreur se produit, on l'afficher sur le terminal
    console.error("erreur lors de la suppression de la recette : ", error);
    
    res.status(500).json({
        message: "Erreur lors de la suppression de la recette"
    });
  }
};

    // on exporte la fonction pour pouvoir l'utiliser dans les routes
module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
deleteRecipe,
};