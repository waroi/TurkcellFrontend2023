class Storage{
    setStorage(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    }
    getStorage(key){
        let value;
        localStorage.getItem(key)===null ? value=[]:value=JSON.parse(localStorage.getItem(key));
        return books;
    }
    deleteStorage(id){
        let books = Storage.getLocalStorage("book");
        books.filter((item) => item.id !== id);
        Storage.setLocalStorage(books);
    }
    editStorage(id){
        isEdit=false;

    }
}