class LStorage {
    static addBookToStorage(newBook) {
        let books = this.getBooksFromStorage();
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static getBooksFromStorage() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static deleteBookFromStorage(bookName) {
        let books = this.getBooksFromStorage();
        books.map(function (book, index) {
            if (book.name === bookName) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
    static updateBookFromStorage(oldBook, updatedBook) {
        let books = this.getBooksFromStorage();
        books.map(function (book, index) {
            if (book.name === oldBook.name) {
                books.splice(index, 1, updatedBook);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

