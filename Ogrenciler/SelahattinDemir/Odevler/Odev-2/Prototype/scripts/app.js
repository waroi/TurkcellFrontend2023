const bookList = document.getElementById("bookList");
const addBookBtn = document.getElementById("addOrEditButton");
const searchInput = document.getElementById("search-input");
const sort = document.getElementById("sort");
const categoryList = document.getElementById("category-list");
const authorList = document.getElementById("author-list");
const categoryForm = document.getElementById("category-form");
const authorForm = document.getElementById("author-form");
const form = document.getElementById("book-form");

const storage = new LocalStorage();
const books = new Books();
const ui = new UI();
const filter = new Filter();
const bookCard = new BookCard();
const checkbox = new Checkbox();

addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", showBook);
  document.addEventListener("DOMContentLoaded", showAuthor);
  document.addEventListener("DOMContentLoaded", showCategory);
  addBookBtn.addEventListener("click", formListenSubmitEvent);
  bookList.addEventListener("click", ui.deleteBookFromUI);
  bookList.addEventListener("click", ui.editBookFromUI);
  sort.addEventListener("change", function () {
    filter.sortBooksFromFilter(this.value);
  });
  searchInput.addEventListener("keyup", function () {
    filter.searchBookFromFilter(this.value);
  });
  categoryForm.addEventListener("change", function () {
    filter.filterBooksFromFilter();
  });
  authorForm.addEventListener("change", function () {
    filter.filterBooksFromFilter();
  });
}

function formListenSubmitEvent(e) {
  e.preventDefault();
  bookList.innerHTML = "";
  ui.formListenSubmitFromUI(e);
  showAuthor();
  showCategory();
  form.reset();
  categoryForm.reset();
  authorForm.reset();
  searchInput.value = "";
}

// Kitap objesini local storage'a kaydet
function saveLocalStorage(book) {
  let books = storage.getBookFromLocalStorage();
  books.push(book);
  storage.saveBookFromLocalStorage(books);
}

function showBook() {
  const books = storage.getBookFromLocalStorage();
  books.forEach((book) => {
    bookCard.addBookFromBookCard(book);
  });
  if (books.length === 0) {
    books.push(
      new Books(
        "158968738",
        "https://productimages.hepsiburada.net/s/352/500/110000361085774.jpg",
        "Da Vinci Şifresi",
        "Aksiyon",
        "2003-03-18",
        "Dan Brown"
      )
    );
    books.push(
      new Books(
        "158968739",
        "https://img.kitapyurdu.com/v1/getImage/fn:92323/wh:true/wi:800",
        "Karanlığın Çağrısı",
        "Korku",
        "2003-01-08",
        "Okay Tiryakioğlu"
      )
    );
    books.push(
      new Books(
        "158968740",
        "https://img.kitapyurdu.com/v1/getImage/fn:11432147/wh:true/miw:200/mih:200",
        "Kırmızı Pazartesi",
        "Polisiye",
        "1981-04-08",
        "Gabriel Garcia Marquez"
      )
    );
    books.push(
      new Books(
        "158968741",
        "https://i.dr.com.tr/cache/600x600-0/originals/0000000058245-1.jpg",
        "Kürk Mantolu Madonna",
        "Roman",
        "1943-04-08",
        "Sabahattin Ali"
      )
    );
    books.push(
      new Books(
        "158968742",
        "https://www.yapikrediyayinlari.com.tr/dosyalar/2017/03/kucuk-prens-7095.jpg",
        "Küçük Prens",
        "Fabl",
        "1943-04-06",
        "Antoine de Saint-Exupery"
      )
    );
    storage.saveBookFromLocalStorage(books);
    showBook();
  }
}

function showAuthor() {
  const books = storage.getBookFromLocalStorage();
  const authorsSet = new Set(books.map((book) => book.writer.toUpperCase()));
  authorList.innerHTML = "";
  authorList.innerHTML += Array.from(authorsSet).map((author) =>
    checkbox.addCheckboxFromCheckbox(author)
  );
}

function showCategory() {
  const books = storage.getBookFromLocalStorage();
  const categoriesSet = new Set(
    books.map((book) => book.category.toLowerCase())
  );
  categoryList.innerHTML = "";
  categoryList.innerHTML += Array.from(categoriesSet).map((category) =>
    checkbox.addCheckboxFromCheckbox(category)
  );
}
