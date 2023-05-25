import { Entity } from "./entity.js";
import { elements } from "./selectors.js";
const entity = new Entity();

// Dom content loaded
document.addEventListener("DOMContentLoaded", domContentLoaded);

// Event Listeners

// Functions

async function domContentLoaded() {
  elements.entityList.innerHTML = (await entity.getAllEntities()) || "";

//  await fetchCategoryOptions();
}
