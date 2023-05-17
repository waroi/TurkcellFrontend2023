const form = document.getElementById("kitap-form");
const bookNameInput = document.getElementById("kitap-name");
const yazarNameInput = document.getElementById("yazar-name");
const katagoriInput = document.getElementById("katagori");
const bookDateInput = document.getElementById("yayım-date");
const bookURLInput = document.getElementById("kapak-URL");
const bookList = document.getElementById("book-list");
const clearButton = document.getElementById("clear-book");
const cardBody = document.getElementById("card-2");
const filter = document.getElementById("filter");

eventListeners();
function eventListeners() {
    document.addEventListener("DOMContentLoaded", defaultBook);
    form.addEventListener("submit", addBook);
    clearButton.addEventListener("click", clearAllBook);
    cardBody.addEventListener("click", deleteBook);
    cardBody.addEventListener("click", editBook);
    document.addEventListener("DOMContentLoaded", loadAllBook);
    filter.addEventListener("keyup", filterBook);
}

class Book{
    constructor(name, yazar, katagori, date, URL){
        this.name = name;
        this.yazar = yazar;
        this.katagori = katagori;
        this.date = date;
        this.URL = URL;
    }
}


function defaultBook() {
    if(localStorage.getItem("books") == null) {
        storage.addBookStorage(
            new Kitap(
                "Kumarbaz",
                "Fyodor Mihayloviç Dostoyevski",
                "Roman",
                "1867-01-01",
                "https://cdn.akakce.com/-/kumarbaz-fyodor-mihailovic-dostoyevski-z.jpg"
            )
        );
        storage.addBookStorage(
            new Kitap(
                "Sefiller",
                "Victor Hugo",
                "Roman",
                "1862-01-01",
                "https://productimages.hepsiburada.net/s/56/375/11261254402098.jpg"
            )
        );
    }
}

function addBook(e) {
    if ((bookDateInput.value === "") || (yazarNameInput.value === "") || (katagoriInput.value === "") || (bookDateInput.value === "") || (bookURLInput.value === "")) {
        ui.showAlert("Eksik bilgi girdiniz...", "danger");
    } else {
        const newBook = new Kitap(bookNameInput.value, yazarNameInput.value, katagoriInput.value, bookDateInput.value, bookURLInput.value);
        ui.addBookUI(newBook);
        storage.addBookStorage(newBook);
        ui.showAlert("Eklendi.", "success")
    }
    e.preventDefault();
}

function clearAllBook() {
    while(bookList.firstChild != null) {
        bookList.removeChild(bookList.firstChild);
        localStorage.removeItem("books");
    }
    ui.showAlert("Kitaplar temizlendi.", "success");
}

function deleteBook(e) {
    if(e.target.className === "del btn btn-primary w-100 p-2 mb-3") {
        e.target.parentElement.parentElement.remove();
        storage.deleteBookStorage(e.target.parentElement.parentElement.children[0].src);
        ui.showAlert("Kitap silindi", "success");
    }
}

function loadAllBook() {
    let books = storage.getBookFromStorage();
    books.forEach(function (books) {
        ui.addBookUI(books);
    })
}

function editBook(e) {
    if(e.target.className === "btn btn-secondary mb-4 w-100 p-2 mt-3") {
        e.target.parentElement.parentElement.parentElement.remove();

        let books = storage.getBookFromStorage();
        books.forEach (function (Kitap) {
            if (Kitap.URL == e.target.parentElement.parentElement.parentElement.children[0].src) {
                bookNameInput.value = Kitap.name;
                yazarNameInput.value = Kitap.yazar;
                katagoriInput.value = Kitap.katagori;
                bookDateInput.value = Kitap.date;
                bookURLInput.value = Kitap.URL;
            }
            ui.editButton();
        });
        storage.deleteBookStorage(e.target.parentElement.parentElement.parentElement.children[0].src);
    };
}

function filterBook(e) {
    const filterValue = e.target.value.toUpperCase();
    const listItems = document.querySelectorAll("li");
    listItems.forEach(function(listItems) {
        const text = listItems.textContent.toUpperCase();
        if (text.indexOf(filterValue) === -1) {
            listItems.setAttribute("style", "display: none");
        } else {
            listItems.setAttribute("style", "display: flex");
        }
    })
}