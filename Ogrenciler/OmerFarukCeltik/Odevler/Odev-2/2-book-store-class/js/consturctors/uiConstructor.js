
import filterComponent from "../components/filterComponent.js";
import createCard from "../components/cardComponent.js";
let cardArea = document.querySelector("#card-area"); /*ekleyeceğimiz alan*/
let form = document.querySelector("form");
let categoryFilterArea = document.querySelector("#categoryFilterArea");
let authorFilterArea = document.querySelector("#authorFilterArea");

class UI{ 
  static isEmpty(){
    return (
      bookNameInput.value == "" ||
      authorInput.value == "" ||
      categoryInput.value == "" ||
      numberInput.value == "" ||
      numberInput.value == ""
  )
};
 static addBookCardToUI(newBook){
  cardArea.innerHTML += createCard(newBook);
 };
 static deleteBookCardUI(book){
  book.remove();
 };
 static resetAllInput(){
  form.reset()
 };
 static addCategoryFilterToUI(filter){
   categoryFilterArea.innerHTML += filterComponent(filter);
 };
 static addAuthorFilterToUI(filter){
   authorFilterArea.innerHTML += filterComponent(filter);
 }
}


export default UI;