// Form verilerini al
const addBookForm = document.querySelector('#addBookForm');
const addBookButton = document.querySelector('#add-book');
const bookNameInput = document.querySelector('#bookNameInput');
const authorNameInput = document.getElementById('authorNameInput');
const yearInput = document.getElementById('yearInput');
const categorySelect = document.getElementById('categorySelect');
const summaryInput = document.getElementById('summaryInput');
const urlInput = document.getElementById('urlInput');
const rankSelect = document.getElementById('rankSelect');
const bookListArea = document.getElementById('bookListArea');
const formError = document.getElementById('form-error');

// Edit form verilerini al
const editBookForm = document.querySelector('#editBookForm');
const bookNameInputEdit = document.querySelector('#bookNameInputEdit');
const authorNameInputEdit = document.getElementById('authorNameInputEdit');
const yearInputEdit = document.getElementById('yearInputEdit');
const categorySelectEdit = document.getElementById('categorySelectEdit');
const summaryInputEdit = document.getElementById('summaryInputEdit');
const rankSelectEdit = document.getElementById('rankSelectEdit');
const urlInputEdit = document.getElementById('urlInputEdit');
const editorInputEdit = document.getElementById('editorInputEdit');
const reviewInputEdit = document.getElementById('reviewInputEdit');
const languageInputEdit = document.getElementById('languageSelectEdit');
const editButtonArea = document.getElementById('edit-button-area');

// UI Constructor
class UI {

  // Ana fonksiyon (main) - App.js ilk çalıştığında çalışacak fonksiyon
  static main() {
    Sorting.main();
    addBookForm.addEventListener('submit', function (e) {
      UI.addBook(e);
    });
  }

  static addBook(e) {
    const bookId = Storage.generateId();
    //Book nesnesi oluşturuyoruz

    if (bookNameInput.value === "" || authorNameInput.value === "" || yearInput.value === "" || categorySelect.value === "" || summaryInput.value === "" || urlInput.value === "" || rankSelect.value === "") {
      e.preventDefault();
      formError.innerHTML = "All fields are required. Please fill in all fields";
    } else {
      const book = new Book(bookId, bookNameInput.value, authorNameInput.value, yearInput.value, categorySelect.value, summaryInput.value, urlInput.value, rankSelect.value);
      console.log(book, rankSelect.value);
      Storage.saveBook(book); //LS'ye kaydetme
      this.addBookToUI();
    }
  }

  // Kitap ekleme , LS'dan dataları alıp ekrana basan 
  static addBookToUI() {
    let books;
    if (selectedCategories.length > 0 || selectedWriters.length > 0) {
      console.log("Bir seçim ypaıldı. Burda tüm kitaplar yerine filtrelenmiş kitaplar getirilmeli.", selectedCategories, selectedWriters)
      books = Storage.getBooksByCategoryAndWriters(selectedCategories, selectedWriters);
    } else {
      books = Storage.getBooksFromStorage();
    }

    if (searchKeyword !== "") {

      books = books.filter((book) => {
        // Arama kelimesi kitap adında veya yazar adında geçiyorsa true döndürür
        return book.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          book.author.toLowerCase().includes(searchKeyword.toLowerCase());
      }
      )
    }

    Sorting.sortBooks(books);

    bookListArea.innerHTML = "";
    books.forEach((book) => {

      let stars = "";
      for (let i = 0; i < book.rank; i++) {
        stars += `<img
      src="./src/Assets/Icon/star.png" alt="">`
      }
      bookListArea.innerHTML += `
    <div class="col-xl-3 col-lg-4 col-sm-12 col-md-6 card mb-3 p-2 border-0 bg-none">
    <div class="row g-0 book-card">
      <div class="col-4 d-flex align-items-center card-image-area">
        <a href="./src/Pages/bookDetails.html">
        <img class="banner-img" src=${book.url || "./src/Assets/Images/defaultBookImage.png"} class="img-fluid rounded-start" alt="book-image">
        </a>
        <div class="buttons column">
          <button type="button"  
          class="btn btn-info p-1" data-bs-toggle="modal" data-bs-target="#editBookModal"
             data-bs-action="update">
            <img onclick="UI.createModalButtons(${book.id})" src="./src/Assets/Icon/edit.png" alt="">
          </button>
          <a href="" class="btn mt-2 p-1 bg-danger">
            <img src="./src/Assets/Icon/delete.png" onclick="Storage.deleteBook(${book.id});return false;">
          </a>
        </div>
      </div>
      <div class="col-8 ps-3">
        <div class="card-body mt-3">
          <div class="d-flex gap-1 ">
            ${stars}
          </div>
         <a class="text-decoration-none book-card-title" onclick="UI.routeToBookDetails(${book.id})"><h5 class="card-title text-primary mt-2 ">${book.name}</h5></a>
          <h6 class="author  text-secondary">${book.author}</h6>
          <p class="category text-success mb-1"><small class="text-body-secondary">${book.category}</small></p>
          <p class="year">${book.year}</p>
        </div>
      </div>
    </div>
  </div>
    `;

    }

    );
  }

  //Json dosyasından kitapları çekme
  static addMockData() {
    if (Storage.getBooksFromStorage().length === 0) {
      fetch('./src/data/books.json')
        .then(response => response.json())
        .then(data => {
          data.forEach((book) => {
            const bookId = Storage.generateId();
            const mockBook = new Book(bookId, book.name, book.author, book.year, book.category, book.summary, book.url, book.rank, book.editor, book.language, book.review,);
            Storage.saveBook(mockBook);
          });
          this.addBookToUI();
        })
    }
  }

  // Kitap bilgilerini doldurma (id edit butonundan gönderiliyor)
  static createModalButtons(id) {
    editButtonArea.innerHTML = ``;
    editButtonArea.innerHTML += `
  <button type="button" id="cancelBtn" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
  <button type="submit" id="editBtn" data-bs-dismiss="modal" class="btn btn-success btn-block"  onclick="UI.updateBook(${id})">Save</button>`

    let book = Storage.getBookById(id);
    bookNameInputEdit.value = book.name;
    authorNameInputEdit.value = book.author;
    yearInputEdit.value = book.year;
    categorySelectEdit.value = book.category;
    summaryInputEdit.value = book.summary;
    urlInputEdit.value = book.url;
    rankSelectEdit.value = book.rank;
    editorInputEdit.value = book.editor;
    reviewInputEdit.value = book.review;
    languageInputEdit.value = book.language;
  }

  static updateBook(id) {
    let book = new Book(id, bookNameInputEdit.value, authorNameInputEdit.value, yearInputEdit.value, categorySelectEdit.value, summaryInputEdit.value, urlInputEdit.value, rankSelectEdit.value, editorInputEdit.value, languageInputEdit.value, reviewInputEdit.value);
    Storage.updateBook(book);
  }

  static routeToBookDetails(id) {
    // bookDetail.html sayfasını açmak için window.location.href kullanılır

    window.location.href = "./src/pages/bookDetails.html?id=" + id;
    BookDetails.main();

  }





}

