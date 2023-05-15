//Create Book Object
const storage = new Storage();
const books = new Books();
const ui = new UI();
const filter = new Filter();

const bookList = document.getElementById("bookList");
const addNewBookButton = document.getElementById("addNewBookButton");

//Get Modal Elements
const bookName = document.getElementById("modalBookName");
const bookAuthor = document.getElementById("modalBookAuthor");
const bookCategory = document.getElementById("modalBookCategory");
const bookDate = document.getElementById("modalBookDate");
const bookImageUrl = document.getElementById("modalBookImageUrl");

const bookCreateButton = document.getElementById("createBookButton");

const updateBookButton = document.getElementById("updateButton");

const toast = document.getElementById("toastMessage");

const searchBook = document.getElementById('searchBook');

const dropDownItems = document.querySelectorAll('.dropdown-item');
const categories = document.querySelector('.categories');
const directors = document.querySelector('.directors');

const categoryDropDown = document.querySelector('.categoryDropDown');
const directorDropDown = document.querySelector('.directorDropDown');

const allBookDelete = document.querySelectorAll('.allBookDelete');
const showAllBooksButton = document.querySelectorAll('.showAllBooksButton');
addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", storage.showBooksFromLocalStorage);
  addNewBookButton.addEventListener("click", ui.clearModalForm);
  bookCreateButton.addEventListener("click", books.addBook);
  bookList.addEventListener("click", books.deleteBook);
  bookList.addEventListener("click", books.updateBook);
  searchBook.addEventListener('keyup', books.searchBook);
  dropDownItems.forEach(item => item.addEventListener('click', books.sortBook));
  categories.addEventListener('click', filter.listOfSameCategoriesBooks);
  categoryDropDown.addEventListener('click', filter.listOfSameCategoriesBooks);
  directors.addEventListener('click', filter.listOfDirectorBooks);
  directorDropDown.addEventListener('click', filter.listOfDirectorBooks);
  allBookDelete.forEach((deleteAllButton) => deleteAllButton.addEventListener('click', books.deleteAllBooks));
  showAllBooksButton.forEach((showAllButton) => showAllButton.addEventListener('click', books.showAllBooks));
}

loadMovieAdd();
function loadMovieAdd(){     
      if (localStorage.getItem("ahmethomeworktwolocal") === null) {
        storage.setBook2LocalStorage(new Books(
            "ahmetId",
            "Gece Yarısı Kütüphanesi",
            "Matt Haig",
            "Roman",
            "2021-08-06",
            "https://i.dr.com.tr/cache/500x400-0/originals/0001922926001-1.jpg"
            ));
        storage.setBook2LocalStorage(new Books(
            "ahmetId2",
            "Kararı Ben Veririm",
            "Esra Ezmeci",
            "Psikoloji",
            "2020-06-02",
            "https://i.dr.com.tr/cache/500x400-0/originals/0001872933001-1.jpg"
            ));
        storage.setBook2LocalStorage(new Books(
            "ahmetId3",
            "Ben Annemin Sırlarıyım",
            "Bülent Demircioğlu",
            "Kişisel Gelişim",
            "2023-07-03",
            "https://i.dr.com.tr/cache/500x400-0/originals/0002031221001-1.jpg"
            ));
        storage.setBook2LocalStorage(new Books(
            "ahmetId4",
            "Yere Yakın Yıldızlara Uzak",
            "Emine Tavuz",
            "Roman",
            "2019-03-10",
            "https://i.dr.com.tr/cache/500x400-0/originals/0001848625001-1.jpg"
            ));
        storage.setBook2LocalStorage(new Books(
            "ahmetId5",
            "Düştüğünde Kalkarsan Hayat Güzeldir",
            "Esra Ezmeci",
            "Psikoloji",
            "2019-08-05",
            "https://i.dr.com.tr/cache/500x400-0/originals/0001816754001-1.jpg"
            ));
     } 
     localStorage.setItem("ahmethomeworktwolocal", "ahmethomeworktwolocal");
}