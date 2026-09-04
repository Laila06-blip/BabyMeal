// recupere la connexion a postgresql //../ permet de sorti du doss models puis aller dans doss config
const sequelize = require("../config/database");

// Importe du modèle Recipe
const Recipe = require("./Recipe");

// Importe du modèle User
const User = require("./User");

// importe favorite model
const Favorite = require("./Favorite");

//------------------------------------------
// relation entre user et favorite
//-------------------------------------------

// un user peut avoir plusieurs favoris
User.hasMany(Favorite, { 
    foreignKey: "userId" ,
    onDelete: "CASCADE" // si un user est supprimé, ses favoris le sont aussi
});

// un favorite appartient à un user
Favorite.belongsTo(User, { 
    foreignKey: "userId" 
});

//------------------------------------------
// relation entre recipe et favorite
//-------------------------------------------

// une recette peut avoir plusieurs favoris
Recipe.hasMany(Favorite, { 
    foreignKey: "recipeId",
    onDelete: "CASCADE" // si une recette est supprimée, ses favoris le sont aussi
});

// un favorite appartient à une recette
Favorite.belongsTo(Recipe, { 
    foreignKey: "recipeId" 
});

// exporte les modèles pour pouvoir les utiliser dans d'autres fichiers
module.exports = {
    sequelize,
    Recipe,
    User,
    Favorite
};