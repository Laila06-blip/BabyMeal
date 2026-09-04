// importe les types de données de Sequelize.
// Datatype permet de défini le type de chaque donnée :  txt,nbrs, etc 
const { DataTypes } = require("sequelize");

//recup la connexion de base de donnes postgreSQL dans le dossier config
const sequelize = require('../config/database');

// on cree le modéle Recipe avec la table recipes dans postgreSQL
const Recipe = sequelize.define(
    "Recipe", 
    {
        // ident unik de chak rectte
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,  // id cle primaire de la table
            autoIncrement: true // augment auto
        },
        // titre rectte 
        title: {
            type: DataTypes.STRING,
            // titre oblig
            allowNull: false
        },

        // age conseille pour la recette
        age: {
            type: DataTypes.INTEGER,

            // age oblig
            allowNull: false
        },
        // description de la recette
        description: {
            type: DataTypes.TEXT
        },

        //chemin de l'image de la recette
        image: {
            type: DataTypes.STRING
        },

        // temps de preparation de la recette
        preparationTime: {
            type: DataTypes.INTEGER
        },
        // temps de cuisson de la recette
        cookingTime: {
            type: DataTypes.INTEGER
        },
        // nombre de portions de la recette
        portions: {
            type: DataTypes.INTEGER
        },
        // ingredients de la recette
        ingredients: {
            type: DataTypes.TEXT
        },

        // etapes de la recette
        steps: {
            type: DataTypes.TEXT
        }
    },
    {
        // nom de la table dans la base de données(postgre)
        tableName: "recipes",

        //creadAt et updateAt auto par sequelize
        timestamps: true
    }
);

//exporte lemodele recipepour permettre l'utiliser dans d'autres fichiers du projet 
module.exports = Recipe;
    
