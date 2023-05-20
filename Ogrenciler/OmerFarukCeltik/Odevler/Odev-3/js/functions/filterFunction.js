import { bookArray,cardUpdateToUI } from "../app.js";
let cardArea = document.querySelector("#card-area");
let arrayForSort = [];
let checkboxParam = false;

function filterByCheckboxValue(e) {
  if (e.target.checked) {
    checkboxParam = true;
    let categoryBook = bookArray.find((book) => e.target.value == book.category || e.target.value == book.author);
    arrayForSort.push(categoryBook)
    cardArea.innerHTML = "";
    arrayForSort.forEach((categoryBook) => cardUpdateToUI(categoryBook, checkboxParam))
  }
  else if (!e.target.checked) {
    let categoryBook = bookArray.find((book) => e.target.value == book.category || e.target.value == book.author);
    arrayForSort.splice(categoryBook, 1);
    cardArea.innerHTML = "";
    arrayForSort.forEach((categoryBook) => cardUpdateToUI(categoryBook, checkboxParam))
    cardUpdateToUI();

    let parent = e.target.parentElement.parentElement.children;
    for (let i = 0; i < parent.length; i++) {
      parent[i].children[0].checked = false;
      arrayForSort = [];
    }
  }
}
export default filterByCheckboxValue;