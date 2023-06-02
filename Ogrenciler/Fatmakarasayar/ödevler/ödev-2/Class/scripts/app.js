const bookList = document.getElementById("bookList");
const addBookBtn = document.getElementById("addOrEditButton");
const searchInput = document.getElementById("search");
const sortBook = document.getElementById("sort");
const categoryList = document.getElementById("category-list");
const authorList = document.getElementById("author-list");
const categoryForm = document.getElementById("category-form");
const authorForm = document.getElementById("author-form");
const form = document.getElementById("book-form");

addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", UI.showBookFromUI);
  document.addEventListener("DOMContentLoaded", showAuthor);
  document.addEventListener("DOMContentLoaded", showCategory);
  addBookBtn.addEventListener("click", formListenSubmitEvent);
  bookList.addEventListener("click", UI.deleteBookFromUI);
  bookList.addEventListener("click", UI.editBookFromUI);
  sortBook.addEventListener("change", function () {
    UI.sortValues(this.value);
  });
  search.addEventListener("keyup", (e) => { UI.searchFromUI(e.target.value) })
  categoryForm.addEventListener("change", function () {
    UI.filterBooksFromFilter();
  });
  authorForm.addEventListener("change", function () {
    UI.filterBooksFromFilter();
  });
}

function formListenSubmitEvent(e) {
  e.preventDefault();
  bookList.innerHTML = "";
  UI.formListenSubmitFromUI(e);
  showAuthor();
  showCategory();
  form.reset();
  categoryForm.reset();
  authorForm.reset();
  searchInput.value = "";
}
// Kitap objesini local storage'a kaydet
function saveLocalStorage(book) {
  let books = LocalStorage.getBookFromLocalStorage();
  books.push(book);
  LocalStorage.saveBookFromLocalStorage(books);
  UI.showBookFromUI();
}


function showAuthor() {
  const books = LocalStorage.getBookFromLocalStorage();
  const authorsSet = new Set(books.map((book) => book.author.toUpperCase()));
  authorList.innerHTML = "";
  authorList.innerHTML += Array.from(authorsSet).map((author) =>
    Checkbox.addCheckboxFromCheckbox(author)
  );
}

function showCategory() {
  const books = LocalStorage.getBookFromLocalStorage();
  const categoriesSet = new Set(
    books.map((book) => book.category.toLowerCase())
  );
  categoryList.innerHTML = "";
  categoryList.innerHTML += Array.from(categoriesSet).map((category) =>
    Checkbox.addCheckboxFromCheckbox(category)
  );
}
