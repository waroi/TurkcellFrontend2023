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
    books.forEach(function (book, index) {
        if (book.name === bookName) {
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));


}

// //düzenlenecek
// LStorage.prototype.editBookFromStorage = function (newBook) {
//     // let books = this.getBooksFromStorage();
//     // books.forEach(function (book, index) {
//     //     if (book.name === newBook.name) {
//     //         books.splice(index, 1, newBook);
//     //     }
//     // });
//     // localStorage.setItem('books', JSON.stringify(books));
// }


