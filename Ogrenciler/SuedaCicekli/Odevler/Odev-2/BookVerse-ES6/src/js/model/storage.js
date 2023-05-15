class Storage {

  static generateId() {

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
  static saveBook(newBook) {
    let books = Storage.getBooksFromStorage();
    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));
    Filter.generateFilterOptions();

  }

  //Ls'den kitaları al , yoksa boş dizi oluştur ve bunu dön
  static getBooksFromStorage() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books; //books varsa döndür yoksa boş dizi döndür
  }

  static deleteBook(id) {
    let books = this.getBooksFromStorage();
    books.forEach((book, index) => {
      if (book.id == id) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
    UI.addBookToUI(); //silinen datalar ekranda yenilensin diye fonksiyonu tekrar çağırdık
    Filter.generateFilterOptions();
  }

  static updateBook(book) {
    let books = this.getBooksFromStorage();
    console.log("çağırıldı")
    books.forEach((item) => {
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
        return;
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
    UI.addBookToUI(); //silinen datalar ekranda yenilensin diye fonksiyonu tekrar çağırdık
    Filter.generateFilterOptions();
  }

  static getBookById(id) {
    let books = this.getBooksFromStorage();
    return books.find((book) => book.id == id);
  };

  static getCategoriesFromStorage() {
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

  static getWritersFromStorage() {
    let writers = [];
    let books = this.getBooksFromStorage();
    books.forEach((book) => {
      if (!writers.includes(book.author) && book.author !== "") {
        writers.push(book.author);
      }
    });
    return writers;
  }

  static getBooksByCategoryAndWriters(category, writer) {
    let books = this.getBooksFromStorage();
    let filteredBooks = [];
    books.forEach((book) => {
      if ((category.length == 0 ? true : category.includes(book.category)) && (writer.length == 0 ? true : writer.includes(book.author))) {
        filteredBooks.push(book);
      }
    });
    return filteredBooks;
  }
}

