import AnimalDetail from "./AnimalDetail.mjs";
import { getParam } from "./util.mjs";

const element = document.querySelector("#animal-detail-container");
const animalParam = getParam("animal");
const animalDetail = new AnimalDetail(animalParam, element);
animalDetail.init();