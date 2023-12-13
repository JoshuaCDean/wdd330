import { getData } from "./util.mjs";

function animalCardTemplate(name, img) {
    return `<li class="animal-card">
        <a href="animal-detail.html?animal=${name}">
        <h2> ${name} </h2>
        <img
            src="${img}"
            alt="Image of ${name}"
        />
       </a>
    </li>`
}

export default class AnimalList {
    constructor( listElement )
    {
        this.listElement = listElement;
    }

    async init() {
        const animalStart = await getData("json/farm_animals.json")
        renderList(this.listElement, animalStart)
    }
}

async function renderList(parentElement, list, position = "afterbegin") {
    let template = [];
    for (const animal in list)
    {
        const finalData = await retrieveAnimalInformation(list[animal]);
        template.push(finalData)
    }
    
    parentElement.insertAdjacentHTML(position, template);
}


async function retrieveAnimalInformation(animal)
{
    const completeTemplate = animalCardTemplate(animal.Name, animal.Image);
    return completeTemplate;
}