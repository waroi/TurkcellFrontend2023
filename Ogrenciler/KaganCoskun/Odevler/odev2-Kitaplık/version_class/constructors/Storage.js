class Storage{
    setStorage(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    }
    getStorage(key){
        let value;
        localStorage.getItem(key)===null ? value=[]:value=JSON.parse(localStorage.getItem(key));
        return value;
    }
    deleteStorage(id){
        let books = storage.getLocalStorage("book");
        books.filter((item) => item.id !== id);
        storage.setLocalStorage(books);
    }
    editStorage(id){
        isEdit=false;
        const modal = bootstrap.Modal.getInstance(document.getElementById("addBook"));
        modal.hide();

        let books = storage.getStorage("book");
        let newBook = UI.getFormInputs();
        let index = books.findIndex(item => item.id === id);
        index !== -1 ? books[index] = newBook : alert("something went wrong");
        storage.setStorage("book",books);
        UI.loadLocalBooks();
        UI.changeSubmitBtn("add");
        UI.resetForm();
        UI.showToasty("Edit Successfully","success")


    }
    sortStorage(value){
      let az=false;
      let za=false;
      let date=false;

      switch (Number(value)) {
        case 1:
          az=true;
          break;
        case 2:
          za=true;
          break;
        case 3:
          date=true;
          break;
        default:
          az=true;
      }

      let books = storage.getStorage("book");
      let sortedBooks;
      az ? sortedBooks = books.sort((a,b)=>a.title.localeCompare(b.title)):"";
      za ? sortedBooks = books.sort((a,b)=>b.title.localeCompare(a.title)):"";
      date ? sortedBooks = books.sort((a,b)=>a.date.localeCompare(b.date)):"";
      storage.setStorage("book",sortedBooks);
      UI.loadLocalBooks();
    }
}