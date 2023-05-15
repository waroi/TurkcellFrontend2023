import Book from "./classItem/library.js";
import  UI  from "./classItem/ui.js";
import Storage  from "./classItem/storage.js";

const library = document.querySelector("#books");
const bookAdd = document.querySelector("#add-button");
const editBook = document.querySelector("#edit-button");
const searchName = document.querySelector("#search-book");
const sortBook = document.querySelector("#sort-books");
const form = document.querySelector("form");
const searchWriter = document.querySelector("#search-writer");
const categoryAdd = document.querySelector("#categories");
const writer = document.querySelector("#writers");
const modalClose = document.querySelector("#modal-close");

handleEventListeners();

const userInterface = new UI(library);

const books = localStorage.getItem("bookStorage")
  ? JSON.parse(localStorage.getItem("bookStorage"))
  : [];

if (books.length === 0) {
  books.push(
    new Book(
      "Simyacı",
      "Paulo Coelho",
      "Macera",
      "1966-12-30",
      "./assets/simyaci.jpg")
  );
  books.push(
    new Book(
      "Ermiş",
      "Halil Cibran",
      "Felsefe",
      "1953-12-05",
      "./assets/ermis.jpg")
  );
  books.push(
    new Book(
      "Mutlu Prens",
      "Oscar Wilde",
      "Bilim Kurgu",
      "1936-11-11",
      "./assets/prens.jpg")
  );
  books.push(
    new Book(
      "1984",
      "George Orwell",
      "Fantastik",
      "1942-10-30",
      "./assets/1984.jpg")
  );
  books[0].id = "simyaciID";
  books[1].id = "ermisID";
  books[2].id = "prensID"
  books[3].id = "georgeID";
  localStorage.setItem("bookStorage", JSON.stringify(books));
}

userInterface.updateDisplay(books);
userInterface.makeUniques(books);
let currentBookID;
function handleEventListeners() {
  bookAdd.addEventListener("click", (e) => {
    e.preventDefault();
    Storage.addBook(books, userInterface, form);
  });

  library.addEventListener("click", (e) => {
    if (e.target.classList.contains("book-delete")) {
      let bookWrap = e.target.parentElement.parentElement.parentElement;
      Storage.deleteBook(books, bookWrap, bookWrap.id);
    } else if (e.target.classList.contains("book-edit")) {
      let bookWrap = e.target.parentElement.parentElement.parentElement;
      currentBookID = bookWrap.id;
     UI.modalWrap(books, currentBookID);
    }
  });

  writer.addEventListener("change", (e) => {
    const bookItem = Storage.writerFilter(books, e.target.value);
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
    const bookItem = Storage.sortBooks(books, e.target.value);
    userInterface.updateDisplay(bookItem);
  });

  categoryAdd.addEventListener("change", (e) => { 
    const bookItem = Storage.categoryFilter(books, e.target.value);
    userInterface.updateDisplay(bookItem);
  });

  searchName.addEventListener("keyup", () => {
    const bookItem = Storage.searchBooks(books, searchName.value);
    userInterface.updateDisplay(bookItem);
  });

  searchWriter.addEventListener("keyup", () => {
    const bookItem = Storage.searchWriter(books, searchWriter.value);
    userInterface.updateDisplay(bookItem);
  });

  editBook.addEventListener("click", () => {
    bookAdd.classList.toggle("d-none");
    editBook.classList.toggle("d-none");
    Storage.editBook(books, currentBookID, userInterface, form);
  });
}