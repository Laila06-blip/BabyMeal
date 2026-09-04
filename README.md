# BabyMeal

## Description

BabyMeal est une application web destinée aux parents et aux personnes qui accompagnent un bébé pendant la diversification alimentaire.

L’objectif du projet est de proposer une solution simple, gratuite et accessible permettant de consulter des recettes adaptées à l’âge du bébé.

Ce projet est réalisé dans le cadre de ma formation au titre professionnel Développeur Web et Web Mobile (DWWM).

## Objectifs du projet

- Proposer des recettes adaptées à l’âge du bébé
- Permettre de rechercher et filtrer facilement les recettes
- Proposer une interface simple et responsive
- Donner des conseils liés à la diversification alimentaire
- Encourager les parents avec des messages positifs
- Utiliser une base de données pour stocker les informations de l’application

## Fonctionnalités actuellement développées

- Affichage de recettes
- Filtre des recettes par âge
- Recherche de recettes
- Catégories 4 mois+, 6 mois+, 9 mois+ et 12 mois+
- Section de conseils
- Message d’encouragement aléatoire
- Interface responsive
- Base de données PostgreSQL
- Tables pour les utilisateurs, les recettes et les favoris
- API permettant de récupérer les recettes enregistrées dans la base de données

## Maquettage

Une maquette a été réalisée avec Figma avant le développement afin de définir :

- l’organisation de la page
- la navigation
- les cartes recettes
- les couleurs
- les composants de l’interface

## Technologies utilisées

### Front-End

- HTML5
- CSS3
- JavaScript
- Flexbox
- CSS Grid
- Media Queries

### Back-End

- Node.js
- Express
- Sequelize
- PostgreSQL

### Outils

- Visual Studio Code
- Figma
- Git
- GitHub
- Safari
- Live Server

## Structure du projet

```text
babymeal/
├── config/
│   └── database.js
├── controllers/
│   ├── favoriteController.js
│   ├── recipeController.js
│   └── userController.js
├── models/
│   ├── Favorite.js
│   ├── Recipe.js
│   ├── User.js
│   └── index.js
├── public/
│   ├── assets/
│   │   ├── css/
│   │   ├── images/
│   │   └── js/
│   ├── favorites.html
│   ├── index.html
│   ├── login.html
│   ├── recipe.html
│   └── register.html
├── routes/
│   └── routes.js
├── .gitignore
├── app.js
├── MCD BabyMeal.png
├── package-lock.json
├── package.json
├── presentation.md
└── README.md
```

Le fichier `.env` est présent uniquement en local et n’est pas envoyé sur GitHub.

Le dossier `node_modules` n’est également pas envoyé sur GitHub.

## Base de données

La base de données du projet est réalisée avec PostgreSQL.

Elle contient actuellement trois tables :

- `users` : utilisateurs
- `recipes` : recettes
- `favorites` : favoris

Chaque table possède une clé primaire `id`.

La table `favorites` contient également deux clés étrangères :

- `userId` permet de relier un favori à un utilisateur
- `recipeId` permet de relier un favori à une recette

Sequelize est utilisé comme ORM, c’est-à-dire comme outil permettant au code JavaScript de communiquer avec PostgreSQL.

Les modèles Sequelize utilisés sont :

- `User`
- `Recipe`
- `Favorite`

## API

Le Back-End de BabyMeal utilise Node.js et Express.

Une première route permet actuellement de récupérer toutes les recettes enregistrées dans PostgreSQL :

```text
GET /api/recipes
```

Cette route utilise la méthode Sequelize :

```js
Recipe.findAll()
```

Elle permet de récupérer les recettes dans la base de données et de les renvoyer au format JSON.

Les autres opérations CRUD seront ajoutées afin de permettre de consulter, créer, modifier et supprimer des recettes.

## Installation du projet

Après avoir récupéré le projet, installer les dépendances avec :

```bash
npm install
```

Les principales dépendances utilisées dans le projet sont :

- Express
- Sequelize
- PostgreSQL avec `pg`
- dotenv
- cors

## Configuration

Le projet utilise un fichier `.env` pour stocker la configuration locale de la base de données.

Exemple :

```env
PORT=3000
DB_NAME=babymeal
DB_USER=utilisateur
DB_PASSWORD=mot_de_passe
DB_HOST=localhost
DB_PORT=5432
```

Le fichier `.env` n’est pas envoyé sur GitHub car il peut contenir des informations sensibles.

## Lancement du projet

PostgreSQL doit être démarré avant de lancer le serveur.

Le serveur BabyMeal peut ensuite être lancé avec :

```bash
node app.js
```

Le serveur est accessible à l’adresse :

```text
http://localhost:3000
```

L’API permettant de récupérer les recettes est accessible à l’adresse :

```text
http://localhost:3000/api/recipes
```

## Évolutions envisagées

Les évolutions envisagées pour BabyMeal sont :

- Gestion complète des comptes utilisateurs
- Gestion des favoris depuis l’interface
- Planificateur de repas
- Liste de courses
- Notifications
- Génération de menus
- Développement éventuel d’une application mobile dédiée

## Auteur

Projet BabyMeal réalisé dans le cadre du titre professionnel Développeur Web et Web Mobile (DWWM).