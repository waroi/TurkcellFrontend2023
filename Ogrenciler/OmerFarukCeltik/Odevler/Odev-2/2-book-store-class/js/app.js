// import createCard from "./cardComponent.js";
import baseBooks from "./bookList.js";
import Book from "./consturctors/bookConstructor.js";
import UI from "./consturctors/uiConstructor.js";
import Storage from "./consturctors/storageConstructor.js";
import sortCardsDateAndAlphabetic from "./functions/sortCardsFunction.js";
import filterByCheckboxValue from "./functions/filterFunction.js";
// areas
let cardArea = document.querySelector("#card-area");
let addBookButton = document.querySelector("#bookSearchContent");
let categoryFilterArea = document.querySelector("#categoryFilterArea");
let authorFilterArea = document.querySelector("#authorFilterArea");
// sort
let sortBookByValue = document.querySelector("#sort-area");
// search
let searchBooksInput = document.querySelector("#search-input");
let searchBooksButton = document.querySelector("#search-button");
// modal inputs buttons
let bookNameInput = document.querySelector("#bookNameInput");
let authorInput = document.querySelector("#authorInput");
let categoryInput = document.querySelector("#categoryInput");
let numberInput = document.querySelector("#numberInput");
let urlInput = document.querySelector("#urlInput");
let saveBookButton = document.querySelector("#save-book");
let editBookButton = document.querySelector("#edit-book");


// storage and array start
export let bookArray = Storage.getBooksFromStorage() ? Storage.getBooksFromStorage() : [];
if (bookArray.length == 0) {
  baseBooks.map((e) => bookArray.push(e));
  Storage.setBooksToStorage();
}
let bookCategorySet = bookArray ? new Set(bookArray.map((book) => book.category)) : false;
let bookAuthorSet = bookArray ? new Set(bookArray.map((book) => book.author)) : false;
// storage end

eventListeners();
cardUpdateToUI();
createBookFilters();
let currentCardUIID;

export function cardUpdateToUI(bookFounded,checkboxParam) {
  if (!checkboxParam) {
    cardArea.innerHTML = "";
  }
  if (!bookFounded) {
    bookArray.map((book) => {
      UI.addBookCardToUI(book);
    })
  } else {
    UI.addBookCardToUI(bookFounded);
  }
}
// eventlisteners
function eventListeners() {
  addBookButton.addEventListener("click", (e) => toggleButtons(e));
  saveBookButton.addEventListener("click", (e) => addBook(e));
  cardArea.addEventListener("click", (e) => cardsEditnDeleteCatch(e));
  editBookButton.addEventListener("click", (e) => completeCardEdit(e, currentCardUIID));
  searchBooksInput.addEventListener("keyup", (e) => searchBooksByNameAndAuthor(e))
  categoryFilterArea.addEventListener("click", (e) => filterByCheckboxValue(e));
  authorFilterArea.addEventListener("click", (e) => filterByCheckboxValue(e));
  sortBookByValue.addEventListener("click", (e) => sortCardsDateAndAlphabetic(e));
}
// eventlisteners end

function toggleButtons() {
  editBookButton.classList.remove("d-block");
  editBookButton.classList.add("d-none");
  saveBookButton.classList.remove("d-none")
  saveBookButton.classList.add("d-block");
}
function addBook(e) {
  e.preventDefault();
  if (UI.isEmpty()) {
    alert("Please");
  } else {
    let newBook = new Book(
      bookNameInput.value,
      authorInput.value,
      categoryInput.value,
      numberInput.value,
      urlInput.value
    );
    bookArray.push(newBook);
    UI.addBookCardToUI(newBook);
    UI.resetAllInput();
    Storage.setBooksToStorage();
    bookCategorySet = new Set(bookArray.map((book) => book.category));
    bookAuthorSet = new Set(bookArray.map((book) => book.author));
    // console.log(bookCategorySet);
    createBookFilters();
  }
}
// edit and delete area
function cardsEditnDeleteCatch(e) {
  let currentCardUI = e.target.parentElement.parentElement.parentElement;
  currentCardUIID = currentCardUI.id;
  // delete card
  if (e.target.classList.contains("delete-button")) {
    deleteCurrentCard(currentCardUI);
  }
  // edit card
  else if (e.target.classList.contains("edit-button")) {
    editCurrentCardInput(currentCardUI);
    // console.log(currentCardUI);
  }
  bookCategorySet = new Set(bookArray.map((book) => book.category));
  bookAuthorSet = new Set(bookArray.map((book) => book.author));
  createBookFilters();
  Storage.setBooksToStorage();
}

function deleteCurrentCard(currentCardUI) {
  UI.deleteBookCardUI(currentCardUI);
  let bookCard = bookArray.find((book) => book.id == currentCardUI.id);
  bookArray.splice(bookArray.indexOf(bookCard), 1);
}
function editCurrentCardInput(currentCardUI) {
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

function completeCardEdit(e, id) {
  let editedBook = bookArray.find((book) => book.id == id);
  // console.log(editedBook);
  editedBook.bookName = bookNameInput.value;
  editedBook.author = authorInput.value;
  editedBook.category = categoryInput.value;
  editedBook.publicationDate = numberInput.value;
  editedBook.banner = urlInput.value;
  bookCategorySet = new Set(bookArray.map((book) => book.category));
  bookAuthorSet = new Set(bookArray.map((book) => book.author));
  createBookFilters();
  cardUpdateToUI();
  UI.resetAllInput();
  Storage.setBooksToStorage();
}
// edit n delete area end
// search and filter area start
function searchBooksByNameAndAuthor(e) {
  let searchValue = e.target.value.toLowerCase();
  if (searchValue.length >= 3) {
    let bookFounded = bookArray.find((book) => book.bookName.toLowerCase().includes(searchValue));
    // console.log(bookFounded);
    cardUpdateToUI(bookFounded);
  } else {
    cardUpdateToUI();
  }
}
function createBookFilters() {
  categoryFilterArea.innerHTML = "";
  authorFilterArea.innerHTML = "";
  if (bookCategorySet) {
    Array.from(bookCategorySet).map((categoryFilter) => UI.addCategoryFilterToUI(categoryFilter));
  }
  if (bookAuthorSet) {
    Array.from(bookAuthorSet).map((authorFilter) => UI.addAuthorFilterToUI(authorFilter));
  }
}


