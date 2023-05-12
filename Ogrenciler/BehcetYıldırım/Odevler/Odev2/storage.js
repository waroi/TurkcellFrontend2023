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

Storage.prototype.deleteBookFromStorage = function(e){
    let books = this.getBookFromStorage();

    books.forEach(function(a,index){
        if(a.name === e){
            books.splice(index,1);
        }
    })
    localStorage.setItem("books",JSON.stringify(books));

}