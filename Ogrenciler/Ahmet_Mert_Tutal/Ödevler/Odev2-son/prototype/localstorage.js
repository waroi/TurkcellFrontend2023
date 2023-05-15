function LocalStorage() {}

//Local Storage'da bulunan kitapları alma
LocalStorage.prototype.getBooksFromLocalStorage = function() {
  let books;
  if(localStorage.getItem('books') === null) {
    books = [];
  }
  else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
}

//Local Storage'a kitap ekleme
LocalStorage.prototype.setBook2LocalStorage = function(book) {
  let books = storage.getBooksFromLocalStorage();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

//Local Storage'da bulunan kitapları gösterme
LocalStorage.prototype.showBooksFromLocalStorage = function() {
  let books = storage.getBooksFromLocalStorage();
  books.forEach((book) => {
    ui.addBook(book);
  })
}

//Local Storage'dan kitap silme
LocalStorage.prototype.deleteBookFromLocalStorage = function(deleteBookId) {
  let books = storage.getBooksFromLocalStorage();
  for(let i = 0; i < books.length; i++) {
    if(books[i].id == deleteBookId) {
      books.splice(i, 1);
    }
  }
  localStorage.setItem('books', JSON.stringify(books));
}

LocalStorage.prototype.firstStorage =
  function(){
    if(localStorage.getItem("books") === null){
      const first = 
        [
          {
            "bookTitle": "Fellowship of the Ring",
            "bookAuthor": "Jrr Tolkien",
            "bookYear": "2001",
            "bookCategory": "Fantastic",
            "bookPoster": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9J7XACn3tlD6v4UXRMvT2wJN8FGCCPeh8U3RkZ6__tR4wGhSo",
            "id": 1
          },
          {
            "bookTitle": "The Two Towers",
            "bookAuthor": "Jrr Tolkien",
            "bookYear": "2001",
            "bookCategory": "Fantastic",
            "bookPoster": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQ8FDyks__YDKFPRm3Oj4Dd-yMl7pcGtgIM5IX-nd_6oJQrPiN",
            "id": 2
          },
          {
            "bookTitle": "The Return of the King",
            "bookAuthor": "Jrr Tolkien",
            "bookYear": "2003",
            "bookCategory": "Fantastic",
            "bookPoster": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSyhNpJyWkY1BIsQvBwKIdzq6mzWOqQtiyshuNC0Lh5FeLbcZAw",
            "id": 3
          }  
        ];
     
      localStorage.setItem("books", JSON.stringify(first));
    }
  };//prototype