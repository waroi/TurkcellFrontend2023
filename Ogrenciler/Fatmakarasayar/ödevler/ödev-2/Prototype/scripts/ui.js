function UI() { }

const id = Date.now();
const bookName = document.getElementById("bookName")
const bookCategorySelect = document.getElementById("bookCategorySelect")
const yearInput = document.getElementById("yearInput")
const bookAuthor = document.getElementById("bookAuthor")
const ImageUrl = document.getElementById("imageUrl")
const button = document.getElementById("addOrEditButton");
const title = document.getElementById("booksModalLabel");
const sort = document.getElementById("sort");

console.log(imageUrl)

UI.prototype.addBook = function () {
  const id = Date.now();

  const book = new Books(
    id,
    ImageUrl.value.trim(),
    bookName.value.trim(),
    bookCategorySelect.value.trim(),
    yearInput.value.trim(),
    bookAuthor.value.trim()
  );
  console.log(book)
  saveLocalStorage(book);


};

UI.prototype.editBook = function () {
  const bookEditId = button.dataset.editBookId;
  const book = new Books(
    bookEditId,
    ImageUrl.value.trim(),
    bookName.value.trim(),
    bookCategorySelect.value.trim(),
    yearInput.value.trim(),
    bookAuthor.value.trim()
  );
  storage.updateBookFromLocalStorage(book);

  // butonu düzenle
  button.innerHTML = "Ekle";
  button.className = "btn btn-success w-25";
  delete button.dataset.editBookId;

  // title düzenle
  title.innerHTML = "Kitap Ekle";

  this.showBookFromUI()
}

// Kitapları UI'a ekle
UI.prototype.formListenSubmitFromUI = function (e) {

  const bookName = document.getElementById("bookName").value.trim();
  const bookCategorySelect = document.getElementById("bookCategorySelect").value.trim();
  const yearInput = document.getElementById("yearInput").value.trim();
  const bookAuthor = document.getElementById("bookAuthor").value.trim();
  const ImageUrl = document.getElementById("imageUrl").value.trim();
  if (
    bookName === "" ||
    bookCategorySelect === "" ||
    yearInput === "" ||
    bookAuthor === "" ||
    ImageUrl === ""
  ) {
    alert("Lütfen tüm alanları doldurunuz.");
    return;
  }

  if (button.innerHTML === "Düzenle") {
    this.editBook();
  } else {
    this.addBook();
  }
  e.preventDefault();
};

UI.prototype.editBookFromUI = function (e) {
  if (e.target.classList.contains("btn-warning")) {
    const book = e.target.closest(".col-lg-4");
    const bookChangeId = book.id;
    console.log(bookChangeId)
    let books = storage.getBookFromLocalStorage();
    books.forEach((book) => {
      console.log(book.id)
      if (book.id == bookChangeId) {
        const button = document.getElementById("addOrEditButton");
        const title = document.getElementById("booksModalLabel");
        const bookName = document.getElementById("bookName");
        const bookCategorySelect = document.getElementById("bookCategorySelect");
        const yearInput = document.getElementById("yearInput");
        const bookAuthor = document.getElementById("bookAuthor");
        const ImageUrl = document.getElementById("imageUrl");
        const form = document.getElementById("book-form");

        form.id = book.id;
        ImageUrl.value = book.imageUrl;
        bookName.value = book.name;
        bookCategorySelect.value = book.category;
        yearInput.value = book.year;
        bookAuthor.value = book.author;

        // butonu düzenle
        button.innerHTML = "Düzenle";
        button.className = "btn btn-warning w-25";
        button.dataset.editBookId = bookChangeId;

        // title düzenle
        title.innerHTML = "Kitap Düzenle";
      }
    });
  }

  e.preventDefault();
};

UI.prototype.deleteBookFromUI = function (e) {
  if (e.target.classList.contains("btn-danger")) {
    const book = e.target.closest(".col-lg-4");
    const bookDeleteId = book.id;
    if (confirm("Bu kitabı silmek istediğinize emin misiniz?")) {
      storage.deleteFromLocalStorage(bookDeleteId);
      book.remove();
    }
  }
  e.preventDefault();
};

UI.prototype.showBookFromUI = function () {
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

  }
}
UI.prototype.searchFromUI = function (value) {
  const books = storage.getBookFromLocalStorage();
  const filtered = books.filter(book => book.name.toLowerCase().includes(value.toLowerCase()) || book.author.toLowerCase().includes(value.toLowerCase()))
  bookList.innerHTML = ""
  filtered.forEach(book => {
    bookCard.addBookFromBookCard(book)

  });
}

UI.prototype.sortValues = function (condition) {

  let data = storage.getBookFromLocalStorage();
  if (condition == "default") {
    return data;
  }
  else if (condition == "a-z") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if (condition == "z-a") {
    data.sort((a, b) => b.name.localeCompare(a.name));
  }
  else if (condition == "dateNew") {
    data.sort((a, b) => b.year.localeCompare(a.year));
  }
  else if (condition == "dateOld") {
    data.sort((a, b) => a.year.localeCompare(b.year));
  }

  listBook.innerHTML = "";

  // UI'ya sıralanmış kitaplar ekleyin
  data.forEach((book) => {
    bookCard.addBookFromBookCard(book);
  });
}

UI.prototype.filterBooksFromFilter = function () {
  const selectedBookCategory = document.getElementById("bookCategorySelect").value;
  const selectedBookWriter = document.getElementById("bookAuthor").value;

  const selectedCategoriesAndAuthors = Array.from(document.querySelectorAll(
    'input[name="categoriesandauthors"]:checked'
  )).map((input) => input.value);

  let books = storage.getBookFromLocalStorage();

  const filtered = books.filter((book) => {
    if (selectedBookCategory !== "" && book.category !== selectedBookCategory) {
      return false;
    }
    if (selectedBookWriter !== "" && book.author !== selectedBookWriter) {
      return false;
    }
    if (selectedCategoriesAndAuthors.length > 0) {
      const bookCategoriesAndAuthors = [
        book.category.toLowerCase(),
        book.author.replace(/ /g, "").toUpperCase(),
      ];
      const matchingCategoriesAndAuthors = selectedCategoriesAndAuthors.filter(
        (selectedCategoryAndAuthor) =>
          bookCategoriesAndAuthors.includes(selectedCategoryAndAuthor)
      );
      if (matchingCategoriesAndAuthors.length === 0) {
        return false;
      }
    }
    return true;
  });

  bookList.innerHTML = ""
  filtered.forEach(book => {
    bookCard.addBookFromBookCard(book)

  });
};


