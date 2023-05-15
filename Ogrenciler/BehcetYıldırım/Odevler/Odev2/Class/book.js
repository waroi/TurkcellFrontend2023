// Book Contructorui

class Book{
    constructor(name,writer,category,date,url) {
        this.id=  Math.floor(Math.random() * 1000000);
        this.name = name;
        this.writer=writer;
        this.category=category;
        this.date=date;
        this.url=url;
    }

    static addBooks(e){
        const name = bookName.value.trim();
        const writer = writerName.value.trim();
        const category = bookCategory.value.trim();
        const date = releaseDate.value.trim();
        const url = bookImgUrl.value.trim();
    
        if(name ==="" || writer ==="" || category === "" || date ==="" || url ===""){
            UI.alertMessage("Lütfen tüm kitap bilgilerini eksiksiz doldurunuz!");
            UI.clearModal();
        }
        else{
            const newBook = new Book(name,writer,category,date,url);
    
            UI.createNewBook(newBook);  
            Storage.addBooksToStorage(newBook);
            UI.clearModal();
                  
        }
    }
    
    static loadAllBooks(){
        let books = Storage.getBookFromStorage();
    
        UI.loadAllBooksFromStorage(books);
    }
    
    static deleteBook(e){
        if(e.target.id === "delete-book"){
            const deleteBook = e.target.parentElement.parentElement;
            const deleteBookName = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent; 
            if(confirm("Bu filmi silmek istediğinize emin misiniz?")){
                UI.deleteBookFromUI(deleteBook);
                Storage.deleteBookFromStorage(deleteBookName)
            }
    
        }
    }
    
}



