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

//#region Bu alan development aşamasında test edilme kolaylığı sağlamak için eklenmiştir.
if (books.length === 0) {
  books.push(
    new Book(
      "Tutunamayanlar",
      "Oğuz Atay",
      "Fiction",
      "1971-03-12",
      "https://i.dr.com.tr/cache/500x400-0/originals/0000000061424-1.jpg"
    )
  );
  books.push(
    new Book(
      "Tehlikeli Oyunlar",
      "Oğuz Atay",
      "Fiction",
      "1973-06-14",
      "https://i.dr.com.tr/cache/600x600-0/originals/0000000061603-1.jpg"
    )
  );
  books.push(
    new Book(
      "Silmarillion",
      "Christopher Tolkien",
      "Fantasy",
      "1977-09-15",
      "https://i.dr.com.tr/cache/600x600-0/originals/0001999887001-1.jpg"
    )
  );
  books[0].id = "exampleZeroID";
  books[1].id = "exampleOneID";
  books[2].id = "exampleTwoID";
  localStorage.setItem("bookStorage", JSON.stringify(books));
}
//#endregion

userInterface.updateDisplay(books);
userInterface.makeUniques(books);
let currentBookID;
function handleEventListeners() {
  addBookBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userInterface.isEmpty()) alert("Please fill out the entire form");
    else process.addBook(books, userInterface, form);
    // Reset inputs
    categorySelect.value = "";
    writerSelect.value = "";
    sortSelect.value = "";
    searchByName.value = "";
    searchByWriter.value = "";
  });

  bookCollectionRow.addEventListener("click", (e) => {
    if (e.target.classList.contains("book-delete")) {
      let bookCard = e.target.closest(".col-lg-4");
      process.deleteBook(books, bookCard, bookCard.id, userInterface);
      // Reset inputs
      categorySelect.value = "";
      writerSelect.value = "";
      sortSelect.value = "";
      searchByName.value = "";
      searchByWriter.value = "";
    } else if (e.target.classList.contains("book-edit")) {
      let bookCard = e.target.closest(".col-lg-4");
      currentBookID = bookCard.id;
      userInterface.cardToModal(books, currentBookID);
      // Reset inputs
      categorySelect.value = "";
      writerSelect.value = "";
      sortSelect.value = "";
      searchByName.value = "";
      searchByWriter.value = "";
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
    if (userInterface.isEmpty()) alert("Please fill out the entire form");
    else process.editBook(books, currentBookID, userInterface, form);
  });

  categorySelect.addEventListener("change", (e) => {
    const bookList = process.filterByCategory(books, e.target.value);
    userInterface.updateDisplay(bookList);
    // Reset other inputs
    writerSelect.value = "";
    sortSelect.value = "";
    searchByName.value = "";
    searchByWriter.value = "";
  });

  writerSelect.addEventListener("change", (e) => {
    const bookList = process.filterByWriter(books, e.target.value);
    userInterface.updateDisplay(bookList);
    // Reset other inputs
    categorySelect.value = "";
    sortSelect.value = "";
    searchByName.value = "";
    searchByWriter.value = "";
  });

  sortSelect.addEventListener("change", (e) => {
    const bookList = process.sortBooks(books, e.target.value);
    userInterface.updateDisplay(bookList);
    // Reset other inputs
    categorySelect.value = "";
    writerSelect.value = "";
    searchByName.value = "";
    searchByWriter.value = "";
  });

  searchByName.addEventListener("keyup", () => {
    const bookList = process.searchBooks(books, searchByName.value);
    userInterface.updateDisplay(bookList);
    // Reset other inputs
    categorySelect.value = "";
    writerSelect.value = "";
    sortSelect.value = "";
    searchByWriter.value = "";
  });

  searchByWriter.addEventListener("keyup", () => {
    const bookList = process.searchWriter(books, searchByWriter.value);
    userInterface.updateDisplay(bookList);
    // Reset other inputs
    categorySelect.value = "";
    writerSelect.value = "";
    sortSelect.value = "";
    searchByName.value = "";
  });
}
