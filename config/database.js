// Configuration de la connexion à la base de données PostgreSQL
// BabyMeal - Projet DWWM

const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME || "babymeal",
    process.env.DB_USER || "postgres",
    process.env.DB_PASSWORD || "",
    {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
        dialect: "postgres",
        logging: false, // passer à true pour voir les requêtes SQL en console
    }
);

module.exports = sequelize;