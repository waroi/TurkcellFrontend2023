const nameBook = document.querySelector("#book-name");
const writerBook = document.querySelector("#book-writer");
const categoryBook = document.querySelector("#book-category");
const dateBook = document.querySelector("#book-date");
const imageBook = document.querySelector("#book-cover");

import Book from "./library.js";


class Storage {
 static addBook (books, ui, form) {
    if (
      nameBook.value.trim() === "" ||
      writerBook.value.trim() === "" ||
      categoryBook.value.trim() === "" ||
      dateBook.value.trim() === "" ||
      imageBook.value.trim() === ""
    ) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    const newBook = new Book(
      nameBook.value,
      writerBook.value,
      categoryBook.value,
      dateBook.value,
      imageBook.value
    );
    form.reset();
    books.push(newBook);
    ui.updateDisplay(books);
    localStorage.setItem("bookStorage", JSON.stringify(books));
    ui.makeUniques(books);
  };

  static deleteBook (books, bookWrap, bookID) {
    bookWrap.remove();
    const book = books.find((book) => book.id == bookID);
    books.splice(books.indexOf(book), 1);
    localStorage.setItem("bookStorage", JSON.stringify(books));
  };

  static editBook (books, bookID, ui, form) {

    const book = books.find((book) => book.id == bookID);
    if (book) {

      book.name = nameBook.value;
      book.writer = writerBook.value;
      book.category = categoryBook.value;
      book.releaseDate = dateBook.value;
      book.coverURL = imageBook.value;
      localStorage.setItem("bookStorage", JSON.stringify(books));
      ui.updateDisplay(books);
      ui.makeUniques(books);
      form.reset();
    }
  };

  static categoryFilter (books, selectedCategory) {
    if (selectedCategory != "")
      return books.filter((book) => book.category == selectedCategory);
    else if (selectedCategory == "") return books;
  };

  static writerFilter (books, selectedWriter) {
    if (selectedWriter != "")
      return books.filter((book) => book.writer == selectedWriter);
    else if (selectedWriter == "") return books;
  };

  static searchBooks (books, value) {
    const bookSearch = value.toLowerCase();
    return books.filter((book) => book.name.toLowerCase().includes(bookSearch));
  };

  static searchWriter (books, value) {
    const writerSearch = value.toLowerCase();
    return books.filter((book) =>
      book.writer.toLowerCase().includes(writerSearch)
    );
  };

  static sortBooks = function (books, value) {
    if (value === "a-z") {
      return books.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if (value === "writer") {
      return books.sort((a, b) => a.writer.localeCompare(b.writer));
    }
    else if (value === "new-old") {
      return books.sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
    }
    else if (value === "z-a") {
      return books.sort((a, b) => b.name.localeCompare(a.name));
    }
    else if (value === "old-new") {
      return books.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
    }
    else return books;
  };
}
export default Storage;
