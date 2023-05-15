function LocalStorage() {}

LocalStorage.prototype.getBooksFromLocalStorage = function () {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    return books;
}

LocalStorage.prototype.addBookToLocalStorage = function (newBook) {
    const books = this.getBooksFromLocalStorage();
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
}

LocalStorage.prototype.deleteBookFromLocalStorage = function (bookId) {
    bookId = parseInt(bookId.split('-')[1]); // Book-1
    const books = this.getBooksFromLocalStorage();
    books.map(function (book, index) {
        if (book.id === bookId) {
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
}

LocalStorage.prototype.clearAllBooksFromLocalStorage = function () {
    localStorage.removeItem('books');
}

LocalStorage.prototype.showAllBooksFromLocalStorage = function () {
    const books = this.getBooksFromLocalStorage();
    books.map(function (book) {
        ui.addBookToUI(book);
    });
}

LocalStorage.prototype.editBookFromLocalStorage = function (updatedBook) {
    const books = this.getBooksFromLocalStorage();
    books.map(function (book, index) {
        if (book.id == updatedBook.id) {
            books.splice(index, 1);
        }
    });
    books.push(updatedBook);
    localStorage.setItem('books', JSON.stringify(books));
}