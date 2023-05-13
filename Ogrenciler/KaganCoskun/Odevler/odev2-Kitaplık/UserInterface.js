
class UserInterface{
    getFormInputs(){
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const category = document.getElementById("category").value;
        const date = document.getElementById("date").value;
        const coverUrl = document.getElementById("coverUrl").value;

        return new Book(title,author,category,date,coverUrl);
    }

    addNewBook(bookData){
        let localData = storage.getLocalStorage();
        this.writeUi(bookData);

    }


    writeUi(bookData){
         bookData = new Book(bookData.title,bookData.author,bookData.category,bookData.date,bookData.coverUrl);
         console.log(bookData)
        let book = bookData.createBox();
        bookUI.appendChild(book);
        book.querySelector(".btn-danger").addEventListener("click", (e) => {
            book.remove();
        });
        book.querySelector(".btn-success").addEventListener("click", (e) => {
            this.editBook(bookData)});
        this.resetForm();


        const modal = bootstrap.Modal.getInstance(document.getElementById("addBook"));
        modal.hide();

    }
    deleteBook(){}
    editBook(book){
        const modal = bootstrap.Modal.getInstance(document.getElementById("addBook"));
        modal.show();
        isEdit = true;
    }

    resetForm(){
        document.forms["bookForm"]["title"].value = "";
        document.forms["bookForm"]["author"].value = "";
        document.forms["bookForm"]["date"].value = "";
        document.forms["bookForm"]["category"].value = "";
        document.forms["bookForm"]["coverUrl"].value = "";
    }
        

}