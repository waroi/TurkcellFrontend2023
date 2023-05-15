
import filterComponent from "../components/filterComponent.js";
import createCard from "../components/cardComponent.js";
let cardArea = document.querySelector("#card-area"); /*ekleyeceğimiz alan*/
let form = document.querySelector("form");
let categoryFilterArea = document.querySelector("#categoryFilterArea");
let authorFilterArea = document.querySelector("#authorFilterArea");

function UI() { }
UI.prototype.isEmpty = function () {
  return (
    bookNameInput.value == "" ||
    authorInput.value == "" ||
    categoryInput.value == "" ||
    numberInput.value == "" ||
    numberInput.value == ""
  );
}
UI.prototype.addBookCardToUI = function (newBook) {
  // console.log(createCard(newBook));
  cardArea.innerHTML += createCard(newBook);
}
UI.prototype.deleteBookCardUI = function(book) {
  book.remove();
}
UI.prototype.resetAllInput = function () {
  form.reset();
}
UI.prototype.addCategoryFilterToUI = function(filter){
  categoryFilterArea.innerHTML += filterComponent(filter);
}
UI.prototype.addAuthorFilterToUI = function(filter){
  authorFilterArea.innerHTML += filterComponent(filter);
}


export default UI;