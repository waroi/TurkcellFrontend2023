const bookList = document.getElementById ("bookList");
const addBookButton = document.getElementById("addBookButton");
const searchInput = document.getElementById("searchInput");

let books = [];

// Kitap ekleme işlemi
addBookButton.addEventListener("click", () => {
  const bookTitle = document.getElementById("bookTitle").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookYear = document.getElementById("bookYear").value;
  const bookCategory = document.getElementById("bookCategory").value;
  const bookPoster = document.getElementById("bookPoster").value;

  const newBook = {
    title: bookTitle,
    author: bookAuthor,
    year: bookYear,
    category: bookCategory,
    poster: bookPoster
  };

  books.push(newBook);

  displayBooks(books);

  clearForm();
});

// Formu temizleme işlemi
function clearForm() {
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookYear").value = "";
  document.getElementById("bookCategory").value = "";
  document.getElementById("bookPoster").value = "";

  $('#addBookModal').modal('hide');
}

// Filtreleme işlemi
searchInput.addEventListener("keyup", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredBooks = books.filter(book => {
    return (
      book.author.toLowerCase().includes(searchTerm) ||
      book.category.toLowerCase().includes(searchTerm) ||
      book.title.toLowerCase().includes(searchTerm)
    );
  });

  displayBooks(filteredBooks);
});

// Başlangıçta örnek kitap ekleme
const sampleBook = {
  title: "Kürk Mantolu Madonna",
  author: "Sabahattin Ali",
  year: "1998",
  category: "Roman",
  poster: "./resim/kurk-mantolu-madonna.png"
};

const sampleBook2 = {
  title: "Kadınlar Ülkesi",
  author: "Charlotte Perkin Stetson",
  year: "2018",
  category: "Bilim Kurgu",
  poster: "https://www.iskultur.com.tr/dosyalar/2022/01/Kadinlar-Ulkesi-2.png"
};

books.push(sampleBook);
books.push(sampleBook2);

displayBooks(books);

// Kitaplar listeleme işlemi
function displayBooks(books) {
    bookList.innerHTML = "";
  
    books.forEach((book, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${book.poster}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Yazar: ${book.author}<br>Yayın Yılı: ${book.year}<br>Kategori: ${book.category}</p>
          <div class="btn-group" role="group" aria-label="Kitap işlemleri">
            <button type="button" class="btn btn-danger" onclick="deleteBook(${index})">Sil</button>
            <button type="button" class="btn btn-primary" onclick="editBook(${index})">Düzenle</button>
          </div>
        `;
      bookList.appendChild(card);
    });
  }
  
  // Kitap silme işlemi
  function deleteBook(index) {
    books.splice(index, 1);
    displayBooks(books);
  }
  
  // Kitap düzenleme işlemi
  function editBook(index) {
    const book = books[index];
    const bookTitle = document.getElementById("bookTitle");
    const bookAuthor = document.getElementById("bookAuthor");
    const bookYear = document.getElementById("bookYear");
    const bookCategory = document.getElementById("bookCategory");
    const bookPoster = document.getElementById("bookPoster");
  
    bookTitle.value = book.title;
    bookAuthor.value = book.author;
    bookYear.value = book.year;
    bookCategory.value = book.category;
    bookPoster.value = book.poster;
  
    // Kitap ekleme butonunu kitap düzenleme butonuna çevir
    addBookButton.innerHTML = "Kitap Düzenle";
    addBookButton.removeEventListener("click", addBook);
    addBookButton.addEventListener("click", () => {
      // Kitap düzenleme işlemini gerçekleştir
      book.title = bookTitle.value;
      book.author = bookAuthor.value;
      book.year = bookYear.value;
      book.category = bookCategory.value;
      book.poster = bookPoster.value;
  
      displayBooks(books);
      clearForm();
  
      // Kitap düzenleme butonunu kitap ekleme butonuna çevir
      addBookButton.innerHTML = "Kitap Ekle";
      addBookButton.removeEventListener("click", editBook);
      addBookButton.addEventListener("click", addBook);
    });
  }
  
  