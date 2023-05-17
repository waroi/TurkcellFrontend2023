function Storage() {}
const storage = new Storage();

Storage.prototype.getBookFromStorage = function() {
    let books;
    if(localStorage.getItem("books") == null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
};

Storage.prototype.addBookStorage = function(newBook) {
    let books = storage.getBookFromStorage();
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
};

Storage.prototype.deleteBookStorage = function(text) {
    let books = storage.getBookFromStorage();
    books.forEach(function(newBook, index) {
        if(newBook.URL === text) {
            books.splice(index, 1);
        }
    });
    localStorage.setItem("books", JSON.stringify(books));
};

