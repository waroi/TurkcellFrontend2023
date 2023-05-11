// Book Contructor
function Book(name,writer,category,date,url){
    this.name = name;
    this.writer=writer;
    this.category=category;
    this.date=date;
    this.url=url;
}

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
        ui.clearModal();
              
    }
}