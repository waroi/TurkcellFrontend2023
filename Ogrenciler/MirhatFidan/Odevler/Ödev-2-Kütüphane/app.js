import Book from "./prototypeItem/library.js";
import { UI } from "./prototypeItem/ui.js";
import { Storage } from "./prototypeItem/storage.js";

const library = document.querySelector("#book-collection");
const bookAdd = document.querySelector("#add-submit");
const editBook = document.querySelector("#edit-submit");
const searchName = document.querySelector("#search-book");
const sortBook = document.querySelector("#sort-books");
const form = document.querySelector("form");
const searchWriter = document.querySelector("#search-writer");
const categoryAdd = document.querySelector("#categories");
const writer = document.querySelector("#writers");
const modalClose = document.querySelector("#modal-close");

handleEventListeners();

const userInterface = new UI(library);
const storage = new Storage();

const books = localStorage.getItem("bookStorage")
  ? JSON.parse(localStorage.getItem("bookStorage"))
  : [];

if (books.length === 0) {
  books.push(
    new Book(
      "Simyacı",
      "Paulo Coelho",
      "Macera",
      "1988-12-30",
      "./assets/simyaci.jpg")
  );
  books.push(
    new Book(
      "Simyacı",
      "Paulo Coelho",
      "Macera",
      "1988-12-30",
      "./assets/simyaci.jpg")
  );
  books.push(
    new Book(
      "Simyacı",
      "Paulo Coelho",
      "Macera",
      "1988-12-30",
      "./assets/simyaci.jpg")
  );
  books.push(
    new Book(
      "Simyacı",
      "Paulo Coelho",
      "Macera",
      "1988-12-30",
      "./assets/simyaci.jpg")
  );
  books[0].id = "simyaciID";
  books[1].id = "simyaciID1";
  books[2].id = "simyaciID2"
  books[3].id = "simyaciID3";
  localStorage.setItem("bookStorage", JSON.stringify(books));
}

userInterface.updateDisplay(books);
userInterface.makeUniques(books);
let currentBookID;
let currentBooks = [...books];
function handleEventListeners() {
  bookAdd.addEventListener("click", (e) => {
    e.preventDefault();
    storage.addBook(books, userInterface, form);
  });

  library.addEventListener("click", (e) => {
    if (e.target.classList.contains("book-delete")) {
      let bookWrap = e.target.parentElement.parentElement.parentElement;
      storage.deleteBook(books, bookWrap, bookWrap.id);
    } else if (e.target.classList.contains("book-edit")) {
      let bookWrap = e.target.parentElement.parentElement.parentElement;
      currentBookID = bookWrap.id;
      userInterface.modalWrap(books, currentBookID);
    }
  });

  writer.addEventListener("change", (e) => {
    const bookItem = storage.writerFilter(books, e.target.value);
    userInterface.updateDisplay(bookItem);
  });

  modalClose.addEventListener("click", () => {
    if (bookAdd.classList.contains("d-none")) {
      bookAdd.classList.toggle("d-none");
      editBook.classList.toggle("d-none");
      form.reset();
    }
  });

  sortBook.addEventListener("change", (e) => {
    const bookItem = storage.sortBooks(books, e.target.value);
    userInterface.updateDisplay(bookItem);
  });

  categoryAdd.addEventListener("change", (e) => {
    const bookItem = storage.categoryFilter(books, e.target.value);
    userInterface.updateDisplay(bookItem);
  });

  searchName.addEventListener("keyup", () => {
    const bookItem = storage.searchBooks(books, searchName.value);
    userInterface.updateDisplay(bookItem);
  });

  searchWriter.addEventListener("keyup", () => {
    const bookItem = storage.searchWriter(books, searchWriter.value);
    userInterface.updateDisplay(bookItem);
  });

  editBook.addEventListener("click", () => {
    bookAdd.classList.toggle("d-none");
    editBook.classList.toggle("d-none");
    storage.editBook(books, currentBookID, userInterface, form);
  });
}
