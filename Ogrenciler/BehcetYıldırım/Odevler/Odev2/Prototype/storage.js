function Storage(){};

Storage.prototype.addBooksToStorage = function(newBook){
    let books = this.getBookFromStorage();

    books.push(newBook);

    localStorage.setItem("books",JSON.stringify(books));
}

Storage.prototype.getBookFromStorage = function(){
    let books;

    if(localStorage.getItem("books") === null){
        books = [new Book("Kafes","Jack Melerson","Roman","2014-03-24","https://i.dr.com.tr/cache/500x400-0/originals/0000000654742-1.jpg"), new Book("Yüzüklerin Efendisi Yüzük Kardeşliği","J.R.R. Tolkien","Roman","29-07-1954","https://i.dr.com.tr/cache/500x400-0/originals/0000000057163-1.jpg")];

        localStorage.setItem("books",JSON.stringify(books));
    }
    else{
        books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
}

Storage.prototype.deleteBookFromStorage = function(e){
    let books = this.getBookFromStorage();

    books.forEach(function(a,index){
        if(a.name === e){
            books.splice(index,1);
        }
    })
    localStorage.setItem("books",JSON.stringify(books));

}

Storage.prototype.searchBookOnStorage = function (e) {
    e = e.toLowerCase();
    bookList.innerHTML = "";
    let books = storage.getBookFromStorage();
    if (e != null) {
        books.forEach(searchbooksFromStorage => {
            if (searchbooksFromStorage.name.toLowerCase().indexOf(e) > -1 ||
                searchbooksFromStorage.writer.toLowerCase().indexOf(e) > -1) {

                ui.createNewBook(searchbooksFromStorage)
            }
        })
    }
    else {
        books.forEach(x => {
            ui.createNewBook(x)
        })
    }
}

