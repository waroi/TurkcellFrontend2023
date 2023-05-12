//Create Book Object
const storage = new Storage();
const books = new Books();
const ui = new UI();

const bookList = document.getElementById("bookList");
const addNewBookButton = document.getElementById("addNewBookButton");

//Get Modal Elements
const modalTitle = document.getElementById("modalLabel");
const bookName = document.getElementById("modalBookName");
const bookAuthor = document.getElementById("modalBookAuthor");
const bookCategory = document.getElementById("modalBookCategory");
const bookDate = document.getElementById("modalBookDate");
const bookImageUrl = document.getElementById("modalBookImageUrl");

const bookCreateButton = document.getElementById("createBookButton");

addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", storage.showBooksFromLocalStorage);
  addNewBookButton.addEventListener("click", ui.clearModalForm);
  bookCreateButton.addEventListener("click", books.addBook);
  bookList.addEventListener("click", books.deleteBook);
  bookList.addEventListener("click", books.updateBook);
}