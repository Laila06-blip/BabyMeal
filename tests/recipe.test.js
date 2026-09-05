const test = require("node:test");
const assert = require("node:assert/strict");

const Recipe = require("../models/Recipe");

// Vérifier qu'une recette sans titre est refusée
test("Une recette sans titre est refusée", async () => {
  const recipe = Recipe.build({
    age: 6,
  });

  await assert.rejects(recipe.validate());
});

// Vérifier qu'une recette avec les champs obligatoires est acceptée
test("Une recette valide est acceptée", async () => {
  const recipe = Recipe.build({
    title: "Compote de pomme",
    age: 6,
  });

  await assert.doesNotReject(recipe.validate());
});