// Book Contructor
function Book(name,writer,category,date,url){
    this.id=  Math.floor(Math.random() * 1000000);
    this.name = name;
    this.writer=writer;
    this.category=category;
    this.date=date;
    this.url=url;
};


Book.prototype.addBooks = function(e){
    const name = bookName.value.trim();
    const writer = writerName.value.trim();
    const category = bookCategory.value.trim();
    const date = releaseDate.value.trim();
    const url = bookImgUrl.value.trim();

    if(name ==="" || writer ==="" || category === "" || date ==="" || url ===""){
        ui.alertMessage("Lütfen tüm kitap bilgilerini eksiksiz doldurunuz!");
        ui.clearModal();
    }
    else{
        const newBook = new Book(name,writer,category,date,url);

        ui.createNewBook(newBook);  
        storage.addBooksToStorage(newBook);
        ui.clearModal();
              
    }
}

Book.prototype.loadAllBooks = function(){
    let books = storage.getBookFromStorage();

    ui.loadAllBooksFromStorage(books);
}

Book.prototype.deleteBook = function(e){
    if(e.target.id === "delete-book"){
        const deleteBook = e.target.parentElement.parentElement;
        const deleteBookName = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent; 
        if(confirm("Bu filmi silmek istediğinize emin misiniz?")){
            ui.deleteBookFromUI(deleteBook);
            storage.deleteBookFromStorage(deleteBookName)
        }

    }
}

