//importe Datatype depuis sequelize
//cela permet de definir les types de données  de la table
const { DataTypes } = require("sequelize");

//recupere la connexion a postgreSQL
const sequelize = require("../config/database");

// on cree le modéle Favorite avec la table favorites dans postgreSQL
const Favorite = sequelize.define(
    "Favorite", 
    {
        // ident unik de chak favorite
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,  // id cle primaire de la table
            autoIncrement: true // augment auto
        },
        // id de l'utilisateur qui a ajouté la recette aux favoris
        userId: {
            type: DataTypes.INTEGER,

            // un favorite doit etre associe a un user
            allowNull: false
        },
        // id de la recette ajoutée aux favoris
        recipeId: {
            type: DataTypes.INTEGER,

            // un favorite doit etre associe a une recette
            allowNull: false
        }
    },
    
    {
        // nom de la table dans la base de données(postgre)
        tableName: "favorites",
        // sequlize ajoute auto : createdAt (date de creation du compte ) et updatedAt( date de derniere modification ) pour chaque user
        timestamps: false,
    }
);

// exporte le modéle pour pouvoir l'utiliser dans d'autres fichiers
module.exports = Favorite;
