function Storage() { }

Storage.prototype.generateId = function () {

  let id = localStorage.getItem("id");
  if (id === null) {
    id = 1;
  } else {
    id = parseInt(id) + 1;
  }
  localStorage.setItem("id", id.toString());
  return id;
}

//LS'den kitapları al ve yeni kitabı LS'ye ekle
Storage.prototype.saveBook = function (newBook) {
  let books = storage.getBooksFromStorage();
  books.push(newBook);
  localStorage.setItem("books", JSON.stringify(books));
  filter.generateFilterOptions();

}

//Ls'den kitaları al , yoksa boş dizi oluştur ve bunu dön
Storage.prototype.getBooksFromStorage = function () {
  let books;
  if (localStorage.getItem("books") === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem("books"));
  }
  return books; //books varsa döndür yoksa boş dizi döndür
}

Storage.prototype.deleteBook = function (id) {
  let books = this.getBooksFromStorage();
  books.forEach((book, index) => {
    if (book.id == id) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
  ui.addBookToUI(); //silinen datalar ekranda yenilensin diye fonksiyonu tekrar çağırdık
  filter.generateFilterOptions();
}

Storage.prototype.updateBook = function (book) {
  let books = this.getBooksFromStorage();
  console.log("çağırıldı")
  books.forEach((item) => {
    console.log(item.id, book.id)
    if (item.id == book.id) {
      // item o anki localstorage'daki değer. book ise bizim ls'den alıp düzenleyip tekrar yolladığımız değer.
      item.name = book.name;
      item.author = book.author;
      item.year = book.year;
      item.category = book.category;
      item.summary = book.summary;
      item.url = book.url;
      item.rank = book.rank;
      item.editor = book.editor;
      item.language = book.language;
      item.review = book.review;
    }
  });
  localStorage.setItem("books", JSON.stringify(books));
  ui.addBookToUI(); //silinen datalar ekranda yenilensin diye fonksiyonu tekrar çağırdık
  filter.generateFilterOptions();
}

Storage.prototype.getBookById = function (id) {
  let books = this.getBooksFromStorage();
  return books.find((book) => book.id == id);
};

Storage.prototype.getCategoriesFromStorage = function () {
  let categories = [];
  let books = this.getBooksFromStorage();
  books.forEach((book) => {
    // aşağıdaki şarttın ilkinde category listesinde bu vategory yoksa diyor. İkincide default category'i elagfe ediyoruz.
    if (!categories.includes(book.category) && book.category !== "Select Book Category") {
      categories.push(book.category);
    }
  });
  return categories;
}

Storage.prototype.getWritersFromStorage = function () {
  let writers = [];
  let books = this.getBooksFromStorage();
  books.forEach((book) => {
    if (!writers.includes(book.author) && book.author !== "") {
      writers.push(book.author);
    }
  });
  return writers;
}

//filtreleme için kategori ve yazar bilgilerini al
Storage.prototype.getBooksByCategoryAndWriters = function (category, writer) { //Ui.js deki selectedCategories ve selectedWriters arraylerini alır
  let books = this.getBooksFromStorage();
  let filteredBooks = [];
  books.forEach((book) => {

    //category ve writer şartlartları için ortak elemanları getirir
    //category.includes(book.category) -> category arrayinde book.category var mı diye bakar
    if ((category.length == 0 ? true : category.includes(book.category)) && (writer.length == 0 ? true : writer.includes(book.author))) {
      filteredBooks.push(book);
    }
  });
  return filteredBooks;
}