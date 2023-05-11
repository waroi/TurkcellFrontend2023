function Storage(){};

Storage.prototype.addBooksToStorage = function(newBook){
    let books = this.getBookFromStorage();

    books.push(newBook);

    localStorage.setItem("books",JSON.stringify(books));
}

Storage.prototype.getBookFromStorage = function(){
    let books;

    if(localStorage.getItem("books") === null){
        books=[];
    }
    else{
        books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
}