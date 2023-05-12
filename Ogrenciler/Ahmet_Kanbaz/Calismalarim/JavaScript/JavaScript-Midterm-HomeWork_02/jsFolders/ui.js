function UI() {}

UI.prototype.alertMessage = function(message) {
  alert(message);
}

UI.prototype.clearModalForm = function() {
  modalTitle.textContent = 'Yeni Kitap Ekle';
  bookName.value = '';
  bookAuthor.value = '';
  bookCategory.value = '';
  bookDate.value = '';
  bookImageUrl.value = '';
  bookCreateButton.setAttribute('class', 'btn btn-primary');
  bookCreateButton.textContent = 'Kitap Oluştur';
}

UI.prototype.addBookToUI = function(book) {
  const bookCol = document.createElement('div');
  bookCol.id = book.id;
  bookCol.className = 'col-md-3 col-sm-6 mb-3';
  const bookCard = document.createElement('div');
  bookCard.className = 'card shadow border-0';
  const bookCardRow = `
  <div class="row">
    <div class="col-6">
      <img src=${book.imageUrl} alt=${book.name}
        class="cardImage img-fluid rounded">
    </div>
    <div class="col-6 ps-0">
      <div class="card-body ps-0 pt-3">
        <h6 class="card-title text-center mb-3 text-truncate">${book.name}</h6>
        <span class="card-text bg-danger rounded px-2 py-1">${book.category}</span>
        <p class="card-text fst-italic fw-bolder text-end mt-3 mb-2">${book.date}</p>
        <p class="border-top mb-0 text-center pt-2 text-truncate">${book.author}</p>
        <div class="d-flex justify-content-around pt-2 cardIcon">
          <a href="#" data-bs-toggle="modal" data-bs-target="#addBookModal"><span class="fa-solid fa-pen"></span></a>
          <a href="#"><span class="fa-solid fa-trash"></span></a>
        </div>
      </div>
    </div>
  </div>
  `;
  bookCard.innerHTML = bookCardRow;
  bookCol.appendChild(bookCard);
  bookList.appendChild(bookCol);
}

UI.prototype.deleteBookFromUI = function(deleteBook) {
  deleteBook.remove();
}