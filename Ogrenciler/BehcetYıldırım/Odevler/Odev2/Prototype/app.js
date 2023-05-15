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
const modalBody = document.getElementById("modalBody");

const saveButton = document.getElementById("saveBooks");

const library = document.getElementById("sectionLibrary");

const search = document.getElementById("search")

const filter = document.querySelector(".selectSort")



function eventListeners(e){
    saveButton.addEventListener("click",book.addBooks);
    document.addEventListener("DOMContentLoaded",book.loadAllBooks);
    library.addEventListener("click", book.deleteBook);


}
eventListeners();

search.addEventListener("keyup",searchBook);
function searchBook() {

    const searcBookOnLS = new Storage();
    searcBookOnLS.searchBookOnStorage(search.value);
}
search.addEventListener("focus", () => { search.value = "" });



