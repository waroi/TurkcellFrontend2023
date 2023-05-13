const bookList = document.getElementById("bookList");
const addBookBtn = document.getElementById("addOrEditButton");
const searchInput = document.getElementById("search-input");
const sort = document.getElementById("sort");
const filterForm = document.getElementById("filter-form");

const storage = new LocalStorage();
const books = new Books();
const ui = new UI();
const filter = new Filter();

addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", showBook);
  addBookBtn.addEventListener("click", ui.formListenSubmitFromUI);
  bookList.addEventListener("click", storage.deleteItemFromLocalStorage);
  bookList.addEventListener("click", ui.editBookFromUI);
  sort.addEventListener("change", function () {
    filter.sortBooksFromFilter(this.value);
  });
  searchInput.addEventListener("keyup", function () {
    filter.searchBookFromFilter(this.value);
  });
  filterForm.addEventListener("change", function (e) {
    filter.filterBooksFromFilter();
    e.preventDefault();
  });
}

// Kitap objesini local storage'a kaydet
function saveLocalStorage(book) {
  let books = storage.getBookFromLocalStorage();
  books.push(book);
  storage.saveBookFromLocalStorage(books);
}

// kitap objesini göster
function showBook() {
  const books = storage.getBookFromLocalStorage();
  books.forEach((book) => {
    ui.addBookFromUI(book);
  });
}
