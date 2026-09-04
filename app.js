//import express creer serveur 
const express = require("express");

// import cors pour permettre les echange avec l'api
const cors = require("cors");

//charge les variables du fichier .env
require("dotenv").config();


//recupere la connexion a postgresql
//const sequelize = require("./config/database");

//Importe du modèle Recipe
//const Recipe = require("./models/Recipe");

// Importe du modèle User
//const User = require("./models/User");
// on remplace tt ça,on recupere sequelize et les models depuis models/index.js
// le fichier models / index. js rassemble les models et les relations entre tables.
const { sequelize } = require("./models");

//importe les routes de l'application
const routes = require("./routes/routes");

//cree l'application express
const app = express();

// permet les echanges avec l'API
app.use(cors());

// permet a Express se lire les données au format JSON
app.use(express.json());

// permet a express d'afficher les fichiers du dossier public
app.use(express.static("public"));

//les routes de l'API commencent par /api
app.use("/api", routes);

//on recupere le port du fichier .env ou 3000 
//si aucun n'est indique on tulise 3000 par defaut
const PORT = process.env.PORT || 3000;

// test de connexion a postgreSQL
sequelize
    .authenticate()

    //si la connexion fonctionne
    .then(()=>{
        console.log("connexion à postgreSQL réussie");
        // demander a sequelize de créer la table"recipes"
        //si elle n'existe pas
        return sequelize.sync();
    })
    //une fois recipes verifée et créée
    .then(() => {
        console.log("tables babymeal créées ou deja existances ");
        
    })
    // une fois users verifiees ou créée
    //.then(() => {
        //console.log("table users créée ou deja existance ");
   // })

    //si une erreur se produit lors de la connexion a postgreSQL
    .catch((error) =>{
        console.error(
            "erreur de connexion à postgreSQL :",
            error
        );
    });
// on demarre le serveur BabyMeal
app.listen(PORT, () => {
    console.log(`BabyMeal fonctionne sur le port ${PORT}`);
});