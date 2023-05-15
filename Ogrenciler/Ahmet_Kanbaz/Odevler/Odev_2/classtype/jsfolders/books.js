class Books {
  constructor(id, name, author, category, date, imageUrl) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.category = category;
    this.date = date;
    this.imageUrl = imageUrl;
  }

  static addBook = function(e) {
    const id = Date.now();
    const name = bookName.value.trim();
    const author = bookAuthor.value.trim();
    const category = bookCategory.value.trim();
    const date = bookDate.value.trim();
    const imageUrl = bookImageUrl.value.trim();
    if(name === '' || author === '' || category === '' || date === '' || imageUrl === '') {
      UI.alertMessage('Lütfen tüm alanları doldurunuz ve Tekrar Deneyiniz');
      UI.clearModalForm();
    }
    else {
      UI.clearModalForm();
      const book = new Books(id, name, author, category, date, imageUrl);
      UI.addBookToUI(book);
      Storage.setBook2LocalStorage(book);
      UI.toastMessage('Kitap Başarılı Bir Şekilde Eklendi.');
    }
    e.preventDefault();
  }

  static deleteBook = function(e) {
    if(e.target.className === 'fa-solid fa-trash') {
      const deleteBook = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      if(confirm('Kitabı silmek istediğinize emin misiniz?')) {
        UI.deleteBookFromUI(deleteBook);
        Storage.deleteBookFromLocalStorage(deleteBook.id);
        UI.toastMessage('Kitap Başarılı Bir Şekilde Silindi.');
      }
    }
    e.preventDefault();
  }

  static updateBook = function(e) {
    if(e.target.className === 'fa-solid fa-pen') {
      bookCreateButton.style.display = 'none';
      updateBookButton.style.display = 'block';
      const updateBookCard = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      const updateBookId = updateBookCard.id;
      const books = Storage.getBooksFromLocalStorage();
      books.map((book) => {
        if(book.id == updateBookId) {
          UI.updateBook2UI(book);
        }
      });
    }
    e.preventDefault();
  }

  static searchBook = function(e) {
    const getAllBooksName = document.querySelectorAll('.getAllBooks');
    const getAllDirectors = document.querySelectorAll('.getAllDirectors');
    const searchWord = e.target.value.toLowerCase();
    Filter.searchBook2UI(getAllBooksName, getAllDirectors, searchWord);
  }

  static sortBook = function(e) {
    const dropDownValue = e.target.textContent;
    Filter.sortBook2UI(dropDownValue);
    e.preventDefault();
  }

  static deleteAllBooks = function(e) {
    if(confirm('Tüm Kitapları Silmek İstediğinize Emin Misiniz?')) {
      UI.deleteAllBooksFromUI();
      UI.deleteFilterCategoriesAndAuthor();
      Storage.deleteAllBooksFromLocalStorage();
      UI.toastMessage('Tüm Kitaplar Başarılı Bir Şekilde Silindi.');
    }
    e.preventDefault();
  }

  static showAllBooks = function(e) {
    UI.showAllBooksFromUI();
    e.preventDefault();
  }
}