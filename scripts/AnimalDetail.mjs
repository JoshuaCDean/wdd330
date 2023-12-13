import { getAnimalApi, getLocalStorage, setLocalStorage } from "./util.mjs"

function animalDetailTemplate(details,name, img) {
    return `<div class="animal-detail">
        <h2>${name}</h2>
        <img 
            src="${img}"
            alt = "Image of ${name}"
        />
        <h3>Animal Information</h3>
        <hr>
        <p class="animal-characteristics">
            Hey I'm a ${name} a great addition for your farm! The foods I eat classify me as a ${details.characteristics.diet}.
            I am a ${details.characteristics.type} so my favorite places to live are ${details.characteristics.habitat}. In good conditions where I'm not being hunted by my common predators ${details.characteristics.predators}, I can live ${details.characteristics.lifespan}. One more fun fact about me is ${details.characteristics.slogan}!
            Favorite me so that I can be a new addition to your farm!
        </p>
        <button id="addToFavorites" data-id="${name}">&#9733; Favorite</button>
    </div>`
}

export default class AnimalDetail {
    constructor(animal, listElement)
    {
        this.listElement = listElement
        this.animal = animal
    }

    async init() {
        this.animalApi = await getAnimalApi(this.animal);
        renderDetails(this.listElement, this.animalApi, this.animal);
        
        document
            .getElementById("addToFavorites")
            .addEventListener("click", this.addToFavorites.bind(this));
    }

    addToFavorites()
    {
        const favorites = getLocalStorage("favorites") || [];
        const searchAnimal = this.animalApi.name;
        const foundAnimal = favorites.find((chosenAnimal) => chosenAnimal.name == searchAnimal);
        if (!foundAnimal) {
            favorites.push(this.animal)
            setLocalStorage("favorites", favorites)
        }
    }
}

async function renderDetails(parentElement, animalData, name, position = "afterbegin")
{
    const imgData = `../images/animals/${name}.png` 
    let template = animalDetailTemplate(animalData, name, imgData)
    
    parentElement.insertAdjacentHTML(position, template);
}