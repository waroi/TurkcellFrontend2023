const submitButton = document.querySelector("#add-book");
const bookName = document.getElementById("bookNameInput");
const bookAuthor = document.getElementById("bookAuthorInput");
const bookRelaseDate = document.getElementById("releaseDateInput");
const bookUrl = document.getElementById("movieBannerInput");
const bookCategory = document.getElementById("bookCategoryInput");
const cardsArea = document.querySelector(".bookCollection");
// const filterCategor = document.querySelector("#filterCategory");
const filterAuth = document.querySelector("#filterAuthor");
const filterButton = document.getElementById("filterButton");
const filterForm = document.getElementById("filterForm");
const sortForm = document.getElementById("sortForm");
const searchForm = document.getElementById("searchForm");

let editBookButton = document.getElementById("edit-book");
let addBookButton = document.getElementById("addBookButton");

//UI Object

eventListener();

function eventListener() {
  submitButton.addEventListener("click", addBook);
  document.addEventListener("DOMContentLoaded", function () {
    let books = Storage.getBooksFromStorage();
    console.log(books);
    UI.loadAllBooks(books);
  });
  cardsArea.addEventListener("click", deleteBooks);
  cardsArea.addEventListener("click", editBooks);

  filterForm.addEventListener("submit", function (e) {
    const selectElement = this.elements["filterCategory"];
    const selectedOption =
      selectElement.options[selectElement.selectedIndex].value;
    const author = this.elements.author.value;

    UI.filterBooks(selectedOption, author);

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

    UI.sortBooks(sortShape, sortCategory);
    UI.filterBooks(selectedOption, authorInp);
    if (input.value !== "") {
      UI.searchOnBooks(input.value);
    }

    e.preventDefault();
  });
  searchForm.addEventListener("submit", function (e) {
    let input = document.getElementById("searchInput");

    UI.searchOnBooks(input.value);

    e.preventDefault();
  });
}
function addBook(e) {
  // editBookButton = document.getElementById("edit-book");
  // submitButton.style.display = "block";
  // console.log(submitButton);
  // editBookButton.style.display = "none";
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
    UI.displayMessage("Please fill all inputs that given !", "danger");
  } else {
    newBook = new Book(name, author, release, category, url);
    UI.addBookToUI(newBook);
    Storage.addBookToStorage(newBook);
    UI.displayMessage("Succesfull", "success");
    UI.filterBooks(selectedOption, authorInp);
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
    UI.deleteBookFromUI(
      e.target.parentElement.parentElement.parentElement.parentElement
    );
    Storage.deleteBookFromStorage(
      e.target.parentElement.parentElement.parentElement.parentElement
    );
  }
}
function editBooks(e) {
  if (e.target.classList.contains("book-edit")) {
    let books = Storage.getBooksFromStorage();

    addBookButton.click();
    submitButton.style.display = "none";
    editBookButton.style.display = "block";
    let bookCard =
      e.target.parentElement.parentElement.parentElement.parentElement;
    let curBook = books.find((book) => book.id == bookCard.id);
    UI.addCurrentBookInf(bookCard.id);

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
