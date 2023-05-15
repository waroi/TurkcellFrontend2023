function LocalStorage() {}

//Local Storage'da bulunan filmleri alma
LocalStorage.prototype.getBooksFromLocalStorage = function () {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }

  return books;
};

//Local Storage'a film ekleme
LocalStorage.prototype.setBookLocalStorage = function (book) {
  let books = storage.getBooksFromLocalStorage();
  books.forEach((book) => {
    if (!bookAuthorFilter.innerHTML.includes(book.author)) {
      bookAuthorFilter.innerHTML += `<option value="${book.author}">${book.author}</option>`;
    }
  });

  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
};

//Local Storage'da bulunan filmleri gösterme
LocalStorage.prototype.showBooksFromLocalStorage = function () {
  bookList.innerHTML = "";

  let books = storage.getBooksFromLocalStorage();
  books.forEach((book) => {
    if (!bookAuthorFilter.innerHTML.includes(book.author)) {
      bookAuthorFilter.innerHTML += `<option value="${book.author}">${book.author}</option>`;
    }

    ui.addBook(book);
  });
};

//Local Storage'dan film silme
LocalStorage.prototype.deleteBookFromLocalStorage = function (deleteBookId) {
  console.log(deleteBookId);
  let books = storage.getBooksFromLocalStorage();
  books.forEach((book, index) => {
    if (book.id == deleteBookId) {
      console.log(book);
      books.splice(index, 1);
    }
  });

  localStorage.setItem("books", JSON.stringify(books));
};
