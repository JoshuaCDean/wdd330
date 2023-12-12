import AnimalList from "./AnimalList.mjs";

const element = document.querySelector(".animal-list")
const animalListing = new AnimalList(element);

animalListing.init();