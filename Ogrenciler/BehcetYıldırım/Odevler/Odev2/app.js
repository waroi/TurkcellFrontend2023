const ui = new UI();
const book = new Book();
const storage = new Storage();

const bookList = document.getElementById("bookList");
const modal = document.getElementById("booksModal");
const bookName= document.getElementById("bookName");
const writerName = document.getElementById("writerName");
const bookCategory = document.getElementById("category");
const releaseDate = document.getElementById("releaseDate");
const bookImgUrl = document.getElementById("bookImgUrl");

const saveButton = document.getElementById("saveBooks");

const library = document.getElementById("sectionLibrary");

eventListeners();

function eventListeners(e){
    saveButton.addEventListener("click",book.addBooks);
    document.addEventListener("DOMContentLoaded",book.loadAllBooks);
    library.addEventListener("click", book.deleteBook);

}
