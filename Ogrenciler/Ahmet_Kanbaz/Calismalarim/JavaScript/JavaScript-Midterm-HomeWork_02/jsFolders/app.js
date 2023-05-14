//Create Book Object
const storage = new Storage();
const books = new Books();
const ui = new UI();

const bookList = document.getElementById("bookList");
const addNewBookButton = document.getElementById("addNewBookButton");

//Get Modal Elements
const bookName = document.getElementById("modalBookName");
const bookAuthor = document.getElementById("modalBookAuthor");
const bookCategory = document.getElementById("modalBookCategory");
const bookDate = document.getElementById("modalBookDate");
const bookImageUrl = document.getElementById("modalBookImageUrl");

const bookCreateButton = document.getElementById("createBookButton");

const updateBookButton = document.getElementById("updateButton");

const toast = document.getElementById("toastMessage");

const searchBook = document.getElementById('searchBook');

const dropDownItems = document.querySelectorAll('.dropdown-item');
const categories = document.querySelector('.categories');
const directors = document.querySelector('.directors');

const categoryDropDown = document.querySelector('.categoryDropDown');
const directorDropDown = document.querySelector('.directorDropDown');
addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", storage.showBooksFromLocalStorage);
  addNewBookButton.addEventListener("click", ui.clearModalForm);
  bookCreateButton.addEventListener("click", books.addBook);
  bookList.addEventListener("click", books.deleteBook);
  bookList.addEventListener("click", books.updateBook);
  searchBook.addEventListener('keyup', books.searchBook);
  dropDownItems.forEach(item => {item.addEventListener('click', books.sortBook)});
  categories.addEventListener('click', ui.listOfSameCategoriesBooks);
  categoryDropDown.addEventListener('click', ui.listOfSameCategoriesBooks);
  directors.addEventListener('click', ui.listOfDirectorBooks);
  directorDropDown.addEventListener('click', ui.listOfDirectorBooks);
}