import Book from "./Constructors/book.js";
import { UI } from "./Constructors/ui.js";
import { Process } from "./Constructors/process.js";

const categorySelect = document.querySelector("#categories");
const writerSelect = document.querySelector("#writers");
const modalCloseBtn = document.querySelector("#modal-close");
const addBookBtn = document.querySelector("#add-submit");
const editBookBtn = document.querySelector("#edit-submit");
const bookCollectionRow = document.querySelector("#book-collection");
const sortSelect = document.querySelector("#sort-books");
const form = document.querySelector("form");
const searchByName = document.querySelector("#search-book");
const searchByWriter = document.querySelector("#search-writer");

handleEventListeners();

const userInterface = new UI(bookCollectionRow);
const process = new Process();

const books = localStorage.getItem("bookStorage")
  ? JSON.parse(localStorage.getItem("bookStorage"))
  : [];

if (books.length === 0) {
  books.push(
    new Book(
      "Ege'lerin Sessizliği",
      "Ege KARA",
      "Korku",
      "1998-04-08",
      "https://avatars.githubusercontent.com/u/83390653?v=4"
    )
  );
  books.push(
    new Book(
      "Maksutoğulları",
      "Varol MAKSUTOĞLU",
      "Fantastik",
      "1998-12-30",
      "https://avatars.githubusercontent.com/u/3173292?v=4"
    )
  );
  books[0].id = "egeID";
  books[1].id = "varolID";
  localStorage.setItem("bookStorage", JSON.stringify(books));
}

userInterface.updateDisplay(books);
userInterface.makeUniques(books);
let currentBookID;
let currentBooks = [...books];
function handleEventListeners() {
  addBookBtn.addEventListener("click", (e) => {
    e.preventDefault();
    process.addBook(books, userInterface, form);
  });

  bookCollectionRow.addEventListener("click", (e) => {
    if (e.target.classList.contains("book-delete")) {
      let bookCard = e.target.parentElement.parentElement.parentElement;
      process.deleteBook(books, bookCard, bookCard.id);
    } else if (e.target.classList.contains("book-edit")) {
      let bookCard = e.target.parentElement.parentElement.parentElement;
      currentBookID = bookCard.id;
      userInterface.cardToModal(books, currentBookID);
    }
  });

  modalCloseBtn.addEventListener("click", () => {
    if (addBookBtn.classList.contains("hidden")) {
      addBookBtn.classList.toggle("hidden");
      editBookBtn.classList.toggle("hidden");
      form.reset();
    }
  });

  editBookBtn.addEventListener("click", () => {
    addBookBtn.classList.toggle("hidden");
    editBookBtn.classList.toggle("hidden");
    process.editBook(books, currentBookID, userInterface, form);
  });

  categorySelect.addEventListener("change", (e) => {
    const bookList = process.filterByCategory(books, e.target.value);
    userInterface.updateDisplay(bookList);
  });

  writerSelect.addEventListener("change", (e) => {
    const bookList = process.filterByWriter(books, e.target.value);
    userInterface.updateDisplay(bookList);
  });

  sortSelect.addEventListener("change", (e) => {
    const bookList = process.sortBooks(books, e.target.value);
    userInterface.updateDisplay(bookList);
  });

  searchByName.addEventListener("keyup", () => {
    const bookList = process.searchBooks(books, searchByName.value);
    userInterface.updateDisplay(bookList);
  });

  searchByWriter.addEventListener("keyup", () => {
    const bookList = process.searchWriter(books, searchByWriter.value);
    userInterface.updateDisplay(bookList);
  });
}
