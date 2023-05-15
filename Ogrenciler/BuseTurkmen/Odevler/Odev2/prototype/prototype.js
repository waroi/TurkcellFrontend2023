function Book(title, author, year, category, poster) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.category = category;
  this.poster = poster;
}

function BookList() {
  this.books = [];
  this.bookListElement = document.getElementById("bookList");
  this.addBookButtonElement = document.getElementById("addBookButton");
  this.searchInputElement = document.getElementById("searchInput");

  this.init = function () {
    // Kitap ekleme işlemi
    this.addBookButtonElement.addEventListener("click", () => {
      const bookTitle = document.getElementById("bookTitle").value;
      const bookAuthor = document.getElementById("bookAuthor").value;
      const bookYear = document.getElementById("bookYear").value;
      const bookCategory = document.getElementById("bookCategory").value;
      const bookPoster = document.getElementById("bookPoster").value;

      if (bookTitle === "" || bookAuthor === "" || bookYear === "" || bookCategory === "" || bookPoster === "") {
        alert("Lütfen kitap ile ilgili bilgileri doldurunuz");
        return;
      }

      const newBook = new Book(bookTitle, bookAuthor, bookYear, bookCategory, bookPoster);
      this.addBook(newBook);

      this.displayBooks(this.books);

      this.clearForm();
    });

    // Filtreleme işlemi
    this.searchInputElement.addEventListener("keyup", () => {
      const searchTerm = this.searchInputElement.value.toLowerCase();

      const filteredBooks = this.books.filter((book) => {
        return (
          book.author.toLowerCase().includes(searchTerm) ||
          book.category.toLowerCase().includes(searchTerm) ||
          book.title.toLowerCase().includes(searchTerm)
        );
      });

      this.displayBooks(filteredBooks);
    });

    // Başlangıçta örnek kitap ekleme
    const sampleBook = new Book(
      "Kürk Mantolu Madonna",
      "Sabahattin Ali",
      "1998",
      "Roman",
      "../resim/kurk-mantolu-madonna.png"
    );

    const sampleBookCard = this.createBookCard(sampleBook);
    this.bookListElement.appendChild(sampleBookCard);

    const sampleBook2 = new Book(
      "Kadınlar Ülkesi",
      "Charlotte Perkin Gılman",
      "2018",
      "Bilim Kurgu",
      "../resim/Kadinlar-Ulkesi-2.png"
    );

    this.addBook(sampleBook);
    this.addBook(sampleBook2);
    this.displayBooks(this.books);
  };

  // Kitap ekleme işlemi
  this.addBook = function (book) {
    this.books.push(book);
    localStorage.setItem("books", JSON.stringify(this.books));
  };

  // Formu temizleme işlemi
  this.clearForm = function () {
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookYear").value = "";
    document.getElementById("bookCategory").value = "";
    document.getElementById("bookPoster").value = "";
    $('#addBookModal').modal('hide');
  };

  // Kitaplar listeleme işlemi
  this.displayBooks = function (books) {
    this.bookListElement.innerHTML = "";
    books.forEach((book, index) => {
      const card = this.createBookCard(book, index);
      this.bookListElement.appendChild(card);
    });
  };

  // Kitap kartı oluşturma işlemi
this.createBookCard = function (book, index) {
  const card = document.createElement("div");
  card.className = "card col-lg-3 col-sm-12";
  card.innerHTML = `
    <img src="${book.poster}" class="card-img-top" alt="${book.title}">
    <div class="card-body">
      <h5 class="card-title">${book.title}</h5>
      <p class="card-text">Yazar: ${book.author}<br>Yayın Yılı: ${book.year}<br>Kategori: ${book.category}</p>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-danger" onclick="bookList.deleteBook(${index})">Sil</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addBookModal" data-index="${index}">Düzenle</button>
        </div>
    </div>
  `;
  return card;
};

  // Kitap silme işlemi
  this.deleteBook = function (index) {
    this.books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(this.books));
    this.displayBooks(this.books);
  };

  //Düzenleme işlemi
  this.editBook = function (index) {
    const book = this.books[index];
    this.clearForm();
    document.getElementById("bookTitle").value = book.title;
    document.getElementById("bookAuthor").value = book.author;
    document.getElementById("bookYear").value = book.year;
    document.getElementById("bookCategory").value = book.category;
    document.getElementById("bookPoster").value = book.poster;
  
    this.clearForm();
    this.deleteBook(index);
    $('#addBookModal').modal('show');

    localStorage.setItem("books", JSON.stringify(books));
    // Kitap düzenleme butonunu kitap ekleme butonuna çevir
    addBookButton.innerHTML = "Kitap Ekle";
    addBookButton.removeEventListener("click", editBook);
    addBookButton.addEventListener("click", books);
  };

  // Local storage'dan kitapları yükleme işlemi
  this.loadBooksFromLocalStorage = function () {
    if (localStorage.getItem("books")) {
      this.books = JSON.parse(localStorage.getItem("books"));
      this.displayBooks(this.books);
    }
  };

  // Kitapları local storage'a kaydetme işlemi
  this.saveBooksToLocalStorage = function () {
    localStorage.setItem("books", JSON.stringify(this.books));
  };

  this.init();
}

const bookList = new BookList();

bookList.loadBooksFromLocalStorage();



