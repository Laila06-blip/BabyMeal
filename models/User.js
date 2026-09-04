//import Datatypes depuis sequelize
//cela permet de definir les types de données  de la table
const { DataTypes } = require("sequelize");

//recupere la connexion a postgreSQL
const sequelize = require("../config/database");

// on cree le modéle User avec la table users dans postgreSQL
const User = sequelize.define(
    "User", 
    {
        // ident unik de chak user
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,  // id cle primaire de la table
            autoIncrement: true // augment auto
        },
        // prénom de l'utilisateur
        // correspont au penom de l'utilisateur
        firstName: {
            type: DataTypes.STRING,
            // prenom oblig
            allowNull: false
        },
        //@ utilise pour cree le compte et se connecter 
        email: {
            type: DataTypes.STRING,

            // email oblig
            allowNull: false,

            // email doit etre unique
            unique: true
        },
        // mot de passe de l'utilisateur
        // il sera enregistrevsous forme chiffrée
        // et non directement en clair dans la base de données
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },

    {
        // nom de la table dans la base de données(postgre)
        tableName: "users",
    
    // sequlize ajoute auto : createdAt (date de creation du compte ) et updatedAt( date de derniere modification ) pour chaque user
      timestamps: true
    }
);

// exporte le modéle pour pouvoir l'utiliser dans d'autres fichiers
module.exports = User;