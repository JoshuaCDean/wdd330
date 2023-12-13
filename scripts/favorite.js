import { getAnimalApi, getLocalStorage, setLocalStorage } from "./util.mjs";

async function renderFavoriteList() {
    const favoriteAnimals = getLocalStorage("favorites") || [];
    let apiArray = [];
    for (const animals in favoriteAnimals) {
        const animalApi = await getAnimalApi(favoriteAnimals[animals])
        apiArray.push(animalApi)
    }
    const htmlItems = apiArray.map((animal) => favoriteTemplate(animal));
    document.querySelector(".favorite-list").innerHTML = htmlItems.join("");

    const removeButtons = document.querySelectorAll(".removeFromFavorites");
    removeButtons.forEach((button) => 
        removeFromFavorites(button.dataset.name)
    );
}


function favoriteTemplate(animal) {
    const newItem = `
    <li class="animal-favorite">
        <h2>${animal.name}</h2>
        <button class="removeFromFavorites" data-id="${animal.name}">&#x2715</button>
    </li>`
    return newItem;
}

function removeFromFavorites(name) {
    const favoriteAnimals = getLocalStorage("favorites");
    
    const updatedFavoriteAnimals = favoriteAnimals.filter(
        (animal) => animal.name != name
    );
    setLocalStorage("favorites", updatedFavoriteAnimals);
}

renderFavoriteList();