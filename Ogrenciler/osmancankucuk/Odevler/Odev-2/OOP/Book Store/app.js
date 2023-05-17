const submitButton = document.querySelector("#add-book");
const bookName = document.getElementById("bookNameInput");
const bookAuthor = document.getElementById("bookAuthorInput");
const bookRelaseDate = document.getElementById("releaseDateInput");
const bookUrl = document.getElementById("movieBannerInput");
const bookCategory = document.getElementById("bookCategoryInput");
const cardsArea = document.querySelector(".bookCollection");

const filterAuth = document.querySelector("#filterAuthor");
const filterButton = document.getElementById("filterButton");
const filterForm = document.getElementById("filterForm");
const sortForm = document.getElementById("sortForm");
const searchForm = document.getElementById("searchForm");

//UI Object

const ui = new UI();

const storage = new Storage();

eventListener();

function eventListener() {
  submitButton.addEventListener("click", addBook);
  document.addEventListener("DOMContentLoaded", function () {
    let books = storage.getBooksFromStorage();
    ui.loadAllBooks(books);
  });
  cardsArea.addEventListener("click", deleteBooks);
  cardsArea.addEventListener("click", editBooks);

  filterForm.addEventListener("submit", function (e) {
    const selectElement = this.elements["filterCategory"];
    const selectedOption =
      selectElement.options[selectElement.selectedIndex].value;
    const author = this.elements.author.value;

    ui.filterBooks(selectedOption, author);

    e.preventDefault();
  });
  sortForm.addEventListener("submit", function (e) {
    let input = document.getElementById("searchInput");
    const selectFilterElement = filterForm.elements["filterCategory"];
    const selectedOption =
      selectFilterElement.options[selectFilterElement.selectedIndex].value;
    const authorInp = filterForm.elements.author.value;
    console.log(selectedOption);

    const selectElement = this.elements["sortShape"];
    const selectElement2 = this.elements["sortCategory"];
    const sortShape = selectElement.options[selectElement.selectedIndex].value;
    const sortCategory =
      selectElement2.options[selectElement2.selectedIndex].value;

    ui.sortBooks(sortShape, sortCategory);
    ui.filterBooks(selectedOption, authorInp);
    if (input.value !== "") {
      ui.searchOnBooks(input.value);
    }

    e.preventDefault();
  });
  searchForm.addEventListener("submit", function (e) {
    let input = document.getElementById("searchInput");

    ui.searchOnBooks(input.value);

    e.preventDefault();
  });
}
function addBook(e) {
  const selectElement = filterForm.elements["filterCategory"];
  const selectedOption =
    selectElement.options[selectElement.selectedIndex].value;
  const authorInp = filterForm.elements.author.value;

  const name = bookName.value;
  const author = bookAuthor.value;
  const release = bookRelaseDate.value;
  const url = bookUrl.value;
  const category = bookCategory.value;
  if (
    name === "" ||
    author === "" ||
    release === "" ||
    url === "" ||
    category === ""
  ) {
    ui.displayMessage("Please fill all inputs that given !", "danger");
  } else {
    newBook = new Book(name, author, release, category, url);
    ui.addBookToUI(newBook);
    storage.addBookToStorage(newBook);
    ui.displayMessage("Succesfull", "success");
    ui.filterBooks(selectedOption, authorInp);
    bookName.value = "";
    bookAuthor.value = "";
    bookRelaseDate.value = "";
    bookUrl.value = "";
    bookCategory.value = "";
  }
  e.preventDefault();
}

function deleteBooks(e) {
  if (e.target.classList.contains("book-delete")) {
    ui.deleteBookFromUI(
      e.target.parentElement.parentElement.parentElement.parentElement
    );
    storage.deleteBookFromStorage(
      e.target.parentElement.parentElement.parentElement.parentElement
    );
  }
}
function editBooks(e) {
  if (e.target.classList.contains("book-edit")) {
    let books = storage.getBooksFromStorage();
    editBookButton = document.getElementById("edit-book");
    editBookButton.style.display = "block";
    submitButton.style.display = "none";
    addBookButton = document.getElementById("addBookButton");
    addBookButton.click();
    let bookCard =
      e.target.parentElement.parentElement.parentElement.parentElement;
    let curBook = books.find((book) => book.id == bookCard.id);
    ui.addCurrentBookInf(bookCard.id);

    editBookButton.addEventListener("click", function () {
      curBook.name = bookName.value;
      curBook.author = bookAuthor.value;
      curBook.url = bookUrl.value;
      curBook.category = bookCategory.value;
      curBook.year = bookRelaseDate.value;
      localStorage.setItem("books", JSON.stringify(books));
      editBookButton.style.display = "none";
      submitButton.style.display = "block";
    });
  }
}
