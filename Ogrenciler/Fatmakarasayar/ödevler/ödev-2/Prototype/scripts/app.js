
const listBook = document.getElementById("bookList");
const addBookBtn = document.getElementById("addOrEditButton");
const sortBook = document.getElementById("sort");
const search = document.getElementById("search");
const form = document.getElementById("book-form");
const categoryList = document.getElementById("category-list");
const authorList = document.getElementById("author-list");
const categoryForm = document.getElementById("category-form");
const authorForm = document.getElementById("author-form");

const storage = new LocalStorage();
const books = new Books();
const ui = new UI();
const bookCard = new BookCard();
const checkbox = new Checkbox();


addEventListeners();
function addEventListeners() {
  document.addEventListener("DOMContentLoaded", showAuthor);
  document.addEventListener("DOMContentLoaded", showCategory);
  document.addEventListener("DOMContentLoaded", ui.showBookFromUI);
  addBookBtn.addEventListener("click", formListenSubmitEvent);
  listBook.addEventListener("click", ui.deleteBookFromUI);
  listBook.addEventListener("click", ui.editBookFromUI);
  sortBook.addEventListener("change", function () {
    ui.sortValues(this.value);

  });
  categoryForm.addEventListener("change", function () {
    ui.filterBooksFromFilter();
  });
  authorForm.addEventListener("change", function () {
    ui.filterBooksFromFilter();
  });
  search.addEventListener("keyup", (e) => { ui.searchFromUI(e.target.value) })
}

function formListenSubmitEvent(e) {
  e.preventDefault();
  listBook.innerHTML = "";
  ui.formListenSubmitFromUI(e);
  showAuthor();
  showCategory();
  form.reset();
  categoryForm.reset();
  authorForm.reset();
  searchInput.value = "";
}


function saveLocalStorage(book) {
  let books = storage.getBookFromLocalStorage();
  books.push(book);
  storage.saveBookFromLocalStorage(books);
  ui.showBookFromUI();
}




function showAuthor() {
  const books = storage.getBookFromLocalStorage();
  const authorsSet = new Set(books.map((book) => book.author.toUpperCase()));
  authorList.innerHTML = "";
  authorList.innerHTML += Array.from(authorsSet).map((author) =>
    checkbox.addCheckboxFromCheckbox(author)
  );
}

function showCategory() {
  const books = storage.getBookFromLocalStorage();
  const categoriesSet = new Set(
    books.map((book) => book.category.toLowerCase())
  );
  categoryList.innerHTML = "";
  categoryList.innerHTML += Array.from(categoriesSet).map((category) =>
    checkbox.addCheckboxFromCheckbox(category)
  );
}
