class Storage{

    static addBookStorage (newBook) {
        let books = storage.getBookFromStorage();
        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));
    };

    static getBookFromStorage () {
        let books;
        if(localStorage.getItem("books") == null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    };

    static deleteBookStorage (text) {
        let books = storage.getBookFromStorage();
        books.forEach(function(newBook, index) {
            if(newBook.URL === text) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem("books", JSON.stringify(books));
    };
}