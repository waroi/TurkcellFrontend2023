const bookNameInp = document.querySelector("#book-name");
const bookWriterInp = document.querySelector("#book-writer");
const bookCategoryInp = document.querySelector("#book-category");
const bookDateInp = document.querySelector("#book-date");
const bookCoverInp = document.querySelector("#book-cover");

import Book from "./book.js";

export function Process() {}

Process.prototype.addBook = function (books, ui, form) {
  const newBook = new Book(
    bookNameInp.value,
    bookWriterInp.value,
    bookCategoryInp.value,
    bookDateInp.value,
    bookCoverInp.value
  );
  form.reset();
  books.push(newBook);
  ui.updateDisplay(books);
  localStorage.setItem("bookStorage", JSON.stringify(books));
  ui.makeUniques(books);
};

Process.prototype.deleteBook = function (books, bookCard, bookID, ui) {
  bookCard.remove();
  const book = books.find((book) => book.id == bookID);
  books.splice(books.indexOf(book), 1);
  localStorage.setItem("bookStorage", JSON.stringify(books));
  ui.makeUniques(books);
};

Process.prototype.editBook = function (books, bookID, ui, form) {
  const book = books.find((book) => book.id == bookID);

  book.name = bookNameInp.value;
  book.writer = bookWriterInp.value;
  book.category = bookCategoryInp.value;
  book.releaseDate = bookDateInp.value;
  book.coverURL = bookCoverInp.value;
  localStorage.setItem("bookStorage", JSON.stringify(books));
  ui.updateDisplay(books);
  ui.makeUniques(books);
  form.reset();
};

Process.prototype.filterByCategory = function (books, selectedCategory) {
  if (selectedCategory != "")
    return books.filter(
      (book) => book.category.toLowerCase() == selectedCategory.toLowerCase()
    );
  else if (selectedCategory == "") return books;
};

Process.prototype.filterByWriter = function (books, selectedWriter) {
  if (selectedWriter != "")
    return books.filter(
      (book) => book.writer.toLowerCase() == selectedWriter.toLowerCase()
    );
  else if (selectedWriter == "") return books;
};

const compareBookNames = function (a, b) {
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  return 0;
};

const compareBookDates = function (a, b) {
  if (a.releaseDate > b.releaseDate) return 1;
  if (a.releaseDate < b.releaseDate) return -1;
  return 0;
};

Process.prototype.sortBooks = function (books, value) {
  const originalBooks = [...books];
  if (value == "a-z") return [...books].sort(compareBookNames);
  else if (value == "z-a") return [...books].sort(compareBookNames).reverse();
  else if (value == "old-new") return [...books].sort(compareBookDates);
  else if (value == "new-old")
    return [...books].sort(compareBookDates).reverse();
  else return originalBooks;
};

Process.prototype.searchBooks = function (books, value) {
  const bookSearch = value.toLowerCase();
  return books.filter((book) => book.name.toLowerCase().includes(bookSearch));
};

Process.prototype.searchWriter = function (books, value) {
  const writerSearch = value.toLowerCase();
  return books.filter((book) =>
    book.writer.toLowerCase().includes(writerSearch)
  );
};
