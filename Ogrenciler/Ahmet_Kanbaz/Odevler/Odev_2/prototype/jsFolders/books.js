function Books(id, name, author, category, date, imageUrl) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.category = category;
  this.date = date;
  this.imageUrl = imageUrl;
}

Books.prototype.addBook = function(e) {
  const id = Date.now();
  const name = bookName.value.trim();
  const author = bookAuthor.value.trim();
  const category = bookCategory.value.trim();
  const date = bookDate.value.trim();
  const imageUrl = bookImageUrl.value.trim();
  if(name === '' || author === '' || category === '' || date === '' || imageUrl === '') {
    ui.alertMessage('Lütfen tüm alanları doldurunuz ve Tekrar Deneyiniz');
    ui.clearModalForm();
  }
  else {
    ui.clearModalForm();
    const book = new Books(id, name, author, category, date, imageUrl);
    ui.addBookToUI(book);
    storage.setBook2LocalStorage(book);
    ui.toastMessage('Kitap Başarılı Bir Şekilde Eklendi.');
  }
  e.preventDefault();
}

Books.prototype.deleteBook = function(e) {
  if(e.target.className === 'fa-solid fa-trash') {
    const deleteBook = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    if(confirm('Kitabı silmek istediğinize emin misiniz?')) {
      ui.deleteBookFromUI(deleteBook);
      storage.deleteBookFromLocalStorage(deleteBook.id);
      ui.toastMessage('Kitap Başarılı Bir Şekilde Silindi.');
    }
  }
  e.preventDefault();
}

Books.prototype.updateBook = function(e) {
  if(e.target.className === 'fa-solid fa-pen') {
    bookCreateButton.style.display = 'none';
    updateBookButton.style.display = 'block';
    const updateBookCard = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    const updateBookId = updateBookCard.id;
    const books = storage.getBooksFromLocalStorage();
    books.map((book) => {
      if(book.id == updateBookId) {
        ui.updateBook2UI(book);
      }
    });
  }
  e.preventDefault();
}

Books.prototype.searchBook = function(e) {
  const getAllBooksName = document.querySelectorAll('.getAllBooks');
  const getAllDirectors = document.querySelectorAll('.getAllDirectors');
  const searchWord = e.target.value.toLowerCase();
  filter.searchBook2UI(getAllBooksName, getAllDirectors, searchWord);
}

Books.prototype.sortBook = function(e) {
  const dropDownValue = e.target.textContent;
  filter.sortBook2UI(dropDownValue);
  e.preventDefault();
}

Books.prototype.deleteAllBooks = function(e) {
  if(confirm('Tüm Kitapları Silmek İstediğinize Emin Misiniz?')) {
    ui.deleteAllBooksFromUI();
    ui.deleteFilterCategoriesAndAuthor();
    storage.deleteAllBooksFromLocalStorage();
    ui.toastMessage('Tüm Kitaplar Başarılı Bir Şekilde Silindi.');
  }
  e.preventDefault();
}

Books.prototype.showAllBooks = function(e) {
  ui.showAllBooksFromUI();
  e.preventDefault();
}