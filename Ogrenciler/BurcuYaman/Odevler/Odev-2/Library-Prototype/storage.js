function LStorage() { }

LStorage.prototype.addBookToStorage = function (newBook) {
    let books = this.getBooksFromStorage();
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
};

LStorage.prototype.getBooksFromStorage = function () {
    let books;
    if (localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}


LStorage.prototype.deleteBookFromStorage = function (bookName) {
    let books = this.getBooksFromStorage();
    books.map(function (book, index) {
        if (book.name === bookName) {
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));

}

LStorage.prototype.updateBookFromStorage = function (oldBook, updatedBook) {
    let books = this.getBooksFromStorage();
    books.map(function (book, index) {
        if (book.name === oldBook.name) {
            books.splice(index, 1, updatedBook);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
}

