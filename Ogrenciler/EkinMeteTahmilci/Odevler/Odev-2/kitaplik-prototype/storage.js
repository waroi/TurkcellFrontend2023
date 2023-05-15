function Storage() {}
Storage.prototype.addBookStorage = function (newBook) {
  let books = this.getBooksFromStorage();
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));
};

Storage.prototype.getBooksFromStorage = function () {
  let books = JSON.parse(localStorage.getItem("books"));
  if (books == null || books.length == 0) {
    books = exampleBooks;
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books;
};

Storage.prototype.deleteBookFromStorage = function (bookName) {
  let books = this.getBooksFromStorage();
  books.forEach(function (book, index) {
    if (book.bookName == bookName) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
};

Storage.prototype.clearAllBooksFromStorage = function () {
  localStorage.removeItem("books");
};

Storage.prototype.editStoredBook = function (){
  let books = Storage.prototype.getBooksFromStorage.call(this);
  books.forEach(function(book, index){
    if(book.bookName == bookNameForEdit){
      book.bookName = bookName.value;
      book.bookDate = bookDate.value;
      book.bookCategory = bookCategory.value;
      book.bookURL = bookCoverUrl.value;
      book.bookAuthor = bookAuthor.value;
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
  ui.displayMessages('Düzenleme işlemi başarılı.', 'Success');
}


