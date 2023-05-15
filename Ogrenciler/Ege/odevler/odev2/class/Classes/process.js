const bookNameInp = document.querySelector("#book-name");
const bookWriterInp = document.querySelector("#book-writer");
const bookCategoryInp = document.querySelector("#book-category");
const bookDateInp = document.querySelector("#book-date");
const bookCoverInp = document.querySelector("#book-cover");

import Book from "./book.js";

class Process {
  static addBook(books, ui, form) {
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
  }

  static deleteBook(books, bookCard, bookID, ui) {
    bookCard.remove();
    const book = books.find((book) => book.id == bookID);
    books.splice(books.indexOf(book), 1);
    localStorage.setItem("bookStorage", JSON.stringify(books));
    ui.makeUniques(books);
  }

  static editBook(books, bookID, ui, form) {
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
  }

  static filterByCategory(books, selectedCategory) {
    if (selectedCategory != "")
      return books.filter(
        (book) => book.category.toLowerCase() == selectedCategory.toLowerCase()
      );
    else if (selectedCategory == "") return books;
  }

  static filterByWriter(books, selectedWriter) {
    if (selectedWriter != "")
      return books.filter(
        (book) => book.writer.toLowerCase() == selectedWriter.toLowerCase()
      );
    else if (selectedWriter == "") return books;
  }

  static sortBooks(books, value) {
    const originalBooks = [...books];
    if (value == "a-z") return [...books].sort(compareBookNames);
    else if (value == "z-a") return [...books].sort(compareBookNames).reverse();
    else if (value == "old-new") return [...books].sort(compareBookDates);
    else if (value == "new-old")
      return [...books].sort(compareBookDates).reverse();
    else return originalBooks;
  }

  static searchBooks(books, value) {
    const bookSearch = value.toLowerCase();
    return books.filter((book) => book.name.toLowerCase().includes(bookSearch));
  }

  static searchWriter(books, value) {
    const writerSearch = value.toLowerCase();
    return books.filter((book) =>
      book.writer.toLowerCase().includes(writerSearch)
    );
  }
}

function compareBookNames(a, b) {
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  return 0;
}

function compareBookDates(a, b) {
  if (a.releaseDate > b.releaseDate) return 1;
  if (a.releaseDate < b.releaseDate) return -1;
  return 0;
}

export default Process;
