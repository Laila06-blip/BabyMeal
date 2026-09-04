// Récupération des éléments HTML

const ageFilter = document.querySelector("#age");
const searchInput = document.querySelector("#search");
const recipeCards = document.querySelectorAll(".recipe-card");


function filterRecipes() {

    const selectedAge = ageFilter.value;
    const searchValue = searchInput.value.toLowerCase().trim();

    recipeCards.forEach((card) => {

        const age = card
            .querySelector(".recipe-age")
            .textContent;

        const title = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const matchesAge =
            selectedAge === "" ||
            age.includes(selectedAge);

        const matchesSearch =
            searchValue === "" ||
            title.includes(searchValue);

        if (matchesAge && matchesSearch) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}


ageFilter.addEventListener(
    "change",
    filterRecipes
);

searchInput.addEventListener(
    "input",
    filterRecipes
);

// =========================
// MESSAGE BABYMEAL
// =========================
const messages = [
    "Chaque petit pas compte. Vous faites déjà un beau travail. 💚",
    "Un petit repas préparé avec amour, c'est déjà beaucoup. 🍼",
    "Pas besoin d'être parfait, chaque jour est une nouvelle étape. 🌱",
    "Grandir, découvrir, goûter... bébé avance à son rythme. 👶",
    "Une recette à la fois, vous accompagnez bébé dans ses découvertes. 🍎"
];

const messageElement = document.querySelector(
    ".parent-message-highlight"
);

if (messageElement) {
    const randomIndex = Math.floor(
        Math.random() * messages.length
    );

    messageElement.textContent = messages[randomIndex];
}