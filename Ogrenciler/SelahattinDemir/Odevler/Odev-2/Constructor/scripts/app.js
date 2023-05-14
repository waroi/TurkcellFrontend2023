const bookList = document.getElementById("bookList");
const addBookBtn = document.getElementById("addOrEditButton");
const searchInput = document.getElementById("search-input");
const sort = document.getElementById("sort");
const categoryList = document.getElementById("category-list");
const authorList = document.getElementById("author-list");
const filterForm = document.getElementById("filter-form");
const form = document.getElementById("book-form");

const storage = new LocalStorage();
const books = new Books();
const ui = new UI();
const filter = new Filter();
const bookCard = new BookCard();
const checkbox = new Checkbox();

addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", showBook);
  document.addEventListener("DOMContentLoaded", showAuthor);
  document.addEventListener("DOMContentLoaded", showCategory);
  addBookBtn.addEventListener("click", formListenSubmitEvent);
  bookList.addEventListener("click", ui.deleteBookFromUI);
  bookList.addEventListener("click", ui.editBookFromUI);
  sort.addEventListener("change", function () {
    filter.sortBooksFromFilter(this.value);
  });
  searchInput.addEventListener("keyup", function () {
    filter.searchBookFromFilter(this.value);
  });
  filterForm.addEventListener("change", function () {
    filter.filterBooksFromFilter();
  });
}

function formListenSubmitEvent(e) {
  e.preventDefault();
  bookList.innerHTML = "";
  ui.formListenSubmitFromUI(e);
  showBook();
  form.reset();
  filterForm.reset();
  searchInput.value = "";
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
    bookCard.addBookFromBookCard(book);
  });
}

function showAuthor() {
  let books = storage.getBookFromLocalStorage();
  let authorsSet = new Set(books.map((book) => book.writer));
  authorList.innerHTML += Array.from(authorsSet).map((author) =>
    checkbox.addCheckboxFromCheckbox(author)
  );
}

function showCategory() {
  let books = storage.getBookFromLocalStorage();
  let categoriesSet = new Set(books.map((book) => book.type));
  categoryList.innerHTML += Array.from(categoriesSet).map((category) =>
    checkbox.addCheckboxFromCheckbox(category)
  );
}
