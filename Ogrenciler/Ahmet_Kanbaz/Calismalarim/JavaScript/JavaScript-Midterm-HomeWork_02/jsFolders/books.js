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
    ui.alertMessage('Lütfen tüm alanları doldurunuz.');
    ui.clearModalForm();
  }
  else {
    ui.clearModalForm();
    const book = new Books(id, name, author, category, date, imageUrl);
    ui.addBookToUI(book);
    storage.setBook2LocalStorage(book);
  }
  e.preventDefault();
}

Books.prototype.deleteBook = function(e) {
  if(e.target.className === 'fa-solid fa-trash') {
    const deleteBook = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    if(confirm('Kitabı silmek istediğinize emin misiniz?')) {
      ui.deleteBookFromUI(deleteBook);
      storage.deleteBookFromLocalStorage(deleteBook.id);
    }
  }
  e.preventDefault();
}

Books.prototype.updateBook = function(e) {
  if(e.target.className === 'fa-solid fa-pen') {
    const updateBook = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    const updateBookId = updateBook.id;
    const books = storage.getBooksFromLocalStorage();
    books.map((book) => {
      if(book.id == updateBookId) {
        modalTitle.textContent = 'Kitap Güncelle';
        modalTitle.id = book.id;
        bookName.value = book.name;
        bookAuthor.value = book.author;
        bookCategory.value = book.category;
        bookDate.value = book.date;
        bookImageUrl.value = book.imageUrl;
        bookCreateButton.setAttribute('class', 'btn btn-warning');
        bookCreateButton.textContent = 'Kitabı Güncelle';
        bookCreateButton.addEventListener('click', function(e) {
          const updateBookId = modalTitle.id;
          const books = storage.getBooksFromLocalStorage();
          books.map((book) => {
            if(book.id == updateBookId) {
              book.name = bookName.value.trim();
              book.author = bookAuthor.value.trim();
              book.category = bookCategory.value.trim();
              book.date = bookDate.value.trim();
              book.imageUrl = bookImageUrl.value.trim();
              console.log(book.name, book.author, book.category, book.date, book.imageUrl);
              // storage.updateBookFromLocalStorage(book);
              // ui.updateBookFromUI(book);
              // ui.clearModalForm();
            }
          })
          e.preventDefault();
        });
      }
    })
  }
  e.preventDefault();
}