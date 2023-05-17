import Book from "./book.js"
import UI from "./ui.js"
import Storage from "./storage.js"
const ui = new UI();
const KEY = "Allbooks";
const storage = new Storage();
const book= new Book();
const constantBooksControl= "constantBooksControl";
const clearAllBooks= document.querySelector("#clear-books");
const addBook=document.querySelector("#add-book");
const bookName=document.querySelector("#bookName");
const writer=document.querySelector("#writer");
const url=document.querySelector("#url");
const date=document.querySelector("#date");
const category=document.querySelector("#category");
const updateBook=document.querySelector("#add-update");
const inputId= document.querySelector("#id");


  eventListeners();
  function eventListeners() {
  document.addEventListener("DOMContentLoaded", constantBooks);
  clearAllBooks.addEventListener("click",clearBooks);
  addBook.addEventListener ("click",bookAdd);
  updateBook.addEventListener("click",updateBooks)

}

function constantBooks(){
    ui.deleteBookList();
    let books =storage.getBooksFromStorage(KEY);
    localStorage.setItem(KEY, JSON.stringify(books));
    const cmc =storage.getBooksFromStorage(constantBooksControl);

if(cmc==""){
    const constantBooks= books.constantBooks();
    constantBooks.forEach(element => {
        // book.push(element);
    });
}
    localStorage.setItem(KEY, JSON.stringify(books));
    localStorage.setItem(constantBooksControl, JSON.stringify(true));
    books =storage.getBooksFromStorage(KEY);
    books.forEach((books) => {
        ui.getUIBooks(books);
      });
}

function clearBooks(){

ui.deleteBookList();
localStorage.removeItem(KEY);
}

function bookAdd(){
    ui.deleteBookList();
    const bookNew= new Book(
        bookName.value,writer.value,url.value,date.value,category.value
      );
      let books =storage.getBooksFromStorage(KEY);
      // books.push(bookNew);
      localStorage.setItem(KEY, JSON.stringify(books));
      books =storage.getBooksFromStorage(KEY);
      books.forEach(books => {
        ui.getUIBooks(books);
      });
      bookName.value="";
      writer.value="";
      url.value="";
      date.value="";
      category.value="";
}

function deleteBooks(e){
    ui.deleteBook(e);
    storage.deleteStorage(e);
}

function editBooks(e){
  console.log(e.target.parentElement.id);
  let books=storage.getBooksFromStorage(KEY);

  books.forEach(book => {
    if(book.id==e.target.parentElement.id){
    inputId.value=book.id;
    bookName.value=book.title;
    writer.value=book.writer;
    url.value=book.url;
    date.value=book.date;
    category.value=book.category;
    }
    
  });

}

  function updateBooks(){
  let books =storage.getBooksFromStorage(KEY);
  books.forEach(book => {

  if(book.id==inputId.value){
   book.title= bookName.value;
   book.writer=writer.value;
   book.url=url.value;
   book.date=date.value;
   book.category=category.value;
  }
});
localStorage.setItem(KEY, JSON.stringify(books));
ui.deleteBookList();
books =storage.getBooksFromStorage(KEY);
books.forEach(books => {
  ui.getUIBooks(books);
});

}

