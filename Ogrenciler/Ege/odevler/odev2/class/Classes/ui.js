import createCard from "../Components/bookCard.js";
import createOption from "../Components/option.js";

const categorySelect = document.querySelector("#categories");
const writerSelect = document.querySelector("#writers");
const bookNameInp = document.querySelector("#book-name");
const bookWriterInp = document.querySelector("#book-writer");
const bookCategoryInp = document.querySelector("#book-category");
const bookDateInp = document.querySelector("#book-date");
const bookCoverInp = document.querySelector("#book-cover");
const addBookBtn = document.querySelector("#add-submit");
const editBookBtn = document.querySelector("#edit-submit");

class UI {
  constructor(display) {
    this.display = display;
  }

  updateDisplay(books) {
    this.display.innerHTML = "";
    books.map((book) => (this.display.innerHTML += createCard(book)));
  }

  uniqueCategories(books) {
    const categoriesSet = new Set(
      books.map((book) => book.category.toUpperCase())
    );
    categorySelect.innerHTML = "";
    categorySelect.innerHTML += `<option value="">All</option>`;
    categorySelect.innerHTML += Array.from(categoriesSet).map((category) => {
      return createOption(category);
    });
  }

  uniqueWriters(books) {
    const writersSet = new Set(books.map((book) => book.writer.toUpperCase()));
    writerSelect.innerHTML = "";
    writerSelect.innerHTML += `<option value="">All</option>`;
    writerSelect.innerHTML += Array.from(writersSet).map((writer) => {
      return createOption(writer);
    });
  }

  makeUniques(books) {
    this.uniqueCategories(books);
    this.uniqueWriters(books);
  }

  cardToModal(books, bookID) {
    const book = books.find((book) => book.id == bookID);
    console.log(bookID);
    bookNameInp.value = book.name;
    bookWriterInp.value = book.writer;
    bookCategoryInp.value = book.category;
    bookDateInp.value = book.releaseDate;
    bookCoverInp.value = book.coverURL;
    addBookBtn.classList.toggle("hidden");
    editBookBtn.classList.toggle("hidden");
  }

  isEmpty() {
    return (
      bookNameInp.value == "" ||
      bookWriterInp.value == "" ||
      bookCategoryInp.value == "" ||
      bookDateInp.value == "" ||
      bookCoverInp.value == ""
    );
  }
}

export default UI;
