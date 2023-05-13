// import createCard from "./cardComponent";
import createCard from "./cardComponent.js";
import baseBooks from "./bookList.js";

let cardArea = document.querySelector("#card-area"); /*ekleyeceğimiz alan*/

let addBookButton = document.querySelector("#bookSearchContent");
// sort

let sortBookByValue = document.querySelector("#sort-area"); /*sortlayacağımız alan*/
// search
let searchBooksInput = document.querySelector("#search-input"); /*searchleyeceğimiz alan*/
let searchBooksButton = document.querySelector("#search-button"); /*searchleyeceğimiz button*/
// modal
let bookNameInput = document.querySelector("#bookNameInput"); /*searchleyeceğimiz button*/
let authorInput = document.querySelector("#authorInput"); /*searchleyeceğimiz button*/
let categoryInput = document.querySelector("#categoryInput"); /*searchleyeceğimiz button*/
let numberInput = document.querySelector("#numberInput"); /*searchleyeceğimiz button*/
let urlInput = document.querySelector("#urlInput"); /*searchleyeceğimiz button*/
let saveBookButton = document.querySelector("#save-book");
let editBookButton = document.querySelector("#edit-book");
let form = document.querySelector("form");

function Book(name, author, category, publicationDate, banner) {
  this.id = Date.now();
  this.bookName = name;
  this.author = author;
  this.category = category;
  this.publicationDate = publicationDate;
  this.banner = banner;
  this.date= this.id.toString();
}
// UI constructor start
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
UI.prototype.deleteBookCardUI = function (book) {
  book.remove();
}
UI.prototype.resetAllInput = function () {
  form.reset();
}
let uiFunc = new UI();
// UI constructor end
// storage start
function Storage() { };

Storage.prototype.getBooksFromStorage = function () {
  return JSON.parse(localStorage.getItem("bookStorage"));
}

Storage.prototype.setBooksToStorage = function () {
  localStorage.setItem("bookStorage", JSON.stringify(bookArray));
}

let storage = new Storage();
let bookArray = storage.getBooksFromStorage() ? storage.getBooksFromStorage() : baseBooks;
if(bookArray.length == 0){
  baseBooks.map((e) => bookArray.push(e));
  storage.setBooksToStorage();
}
// storage end
// eventlisteners
eventListeners();
cardUpdateToUI();
let currentCardUIID;
function eventListeners() {
  addBookButton.addEventListener("click", (e) => toggleButtons(e));
  saveBookButton.addEventListener("click", (e) => addBook(e));
  cardArea.addEventListener("click", (e) => cardsEditnDelete(e));
  editBookButton.addEventListener("click", (e) => completeCardEdit(e,currentCardUIID));
  searchBooksInput.addEventListener("keyup", (e) => searchBooksByNameAuthor(e))
}
// eventlisteners end

function toggleButtons(e){
  editBookButton.classList.remove("d-block");
  editBookButton.classList.add("d-none");
  saveBookButton.classList.remove("d-none")
  saveBookButton.classList.add("d-block");
}

function addBook(e) {
  e.preventDefault();
  if (uiFunc.isEmpty()) {
  //   let alert = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
  //   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  //   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  // </div>`
  //   cardArea.appendChild(alert);
  alert("asdasd");
  } else {
    let newBook = new Book(
      bookNameInput.value,
      authorInput.value,
      categoryInput.value,
      numberInput.value,
      urlInput.value
      );
    bookArray.push(newBook);
    uiFunc.addBookCardToUI(newBook);
    uiFunc.resetAllInput();
    storage.setBooksToStorage();
  }
}
function cardUpdateToUI(){
  cardArea.innerHTML ="";
  bookArray.map((book) => {
    uiFunc.addBookCardToUI(book);
  })
}
// edit n delete area
function cardsEditnDelete(e){
  let currentCardUI = e.target.parentElement.parentElement.parentElement;
  currentCardUIID = currentCardUI.id;
  // delete card
  if(e.target.classList.contains("delete-button")){
    deleteCurrentCard(currentCardUI);
  }
  // edit card
  else if(e.target.classList.contains("edit-button")){
    editCurrentCardInput(currentCardUI);
    console.log(currentCardUI);
  }
}


function deleteCurrentCard(currentCardUI){
  uiFunc.deleteBookCardUI(currentCardUI);
  let bookCard = bookArray.find((book) => book.id == currentCardUI.id);
  bookArray.splice(bookArray.indexOf(bookCard),1);
  storage.setBooksToStorage();
}
function editCurrentCardInput(currentCardUI){
  editBookButton.classList.remove("d-none");
  editBookButton.classList.add("d-block");
  saveBookButton.classList.remove("d-block")
  saveBookButton.classList.add("d-none");
  let bookCard = bookArray.find((book) => book.id == currentCardUI.id);
  bookNameInput.value = bookCard.bookName;
  authorInput.value = bookCard.author;
  categoryInput.value = bookCard.category;
  numberInput.value = bookCard.publicationDate;
  urlInput.value = bookCard.banner;
}

function completeCardEdit(e,id){
  let editedBook = bookArray.find((book) => book.id == id);
  console.log(editedBook);
  editedBook.bookName = bookNameInput.value;
  editedBook.author = authorInput.value;
  editedBook.category = categoryInput.value;
  editedBook.publicationDate = numberInput.value;
  editedBook.banner = urlInput.value;
  cardUpdateToUI();
  uiFunc.resetAllInput();
  storage.setBooksToStorage();
}
// edit n delete area end
function searchBooksByNameAuthor(e){
  if(e.target.value.length >= 3){
    let bookFounded = bookArray.find((book) => book.bookName.includes(e.target.value) || book.author.includes(e.target.value))
  }
}