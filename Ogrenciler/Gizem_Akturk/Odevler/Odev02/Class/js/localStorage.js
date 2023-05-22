class LocalStorage {
    static getBooksFromLocalStorage() {
        const books = JSON.parse(localStorage.getItem('books')) || [];
        return books;
    }

    static addBookToLocalStorage(newBook) {
        const books = LocalStorage.getBooksFromLocalStorage();
        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static deleteBookFromLocalStorage(bookId) {
        bookId = parseInt(bookId.split('-')[1]); // Book-1
        const books = LocalStorage.getBooksFromLocalStorage();
        books.map(function (book, index) {
            if (book.id === bookId) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }

    static clearAllBooksFromLocalStorage() {
        localStorage.removeItem('books');
    }

    static showAllBooksFromLocalStorage() {
        const books = LocalStorage.getBooksFromLocalStorage();
        books.map(function (book) {
            UI.addBookToUI(book);
        });
    }

    static editBookFromLocalStorage(updatedBook) {
        const books = LocalStorage.getBooksFromLocalStorage();
        books.map(function (book, index) {
            if (book.id == updatedBook.id) {
                books.splice(index, 1);
            }
        });
        books.push(updatedBook);
        localStorage.setItem('books', JSON.stringify(books));
    }
}