class BookCard {
  static addBookFromBookCard(book) {
    bookList.innerHTML += `
    <div class="col-lg-4 mb-5" id="${book.id}">
    <div class="card h-100">
      <div class="image">
        <img src="${book.img}"/>
      </div>
      <div class="card-inner">
        <div class="header">
          <h2>${book.name}</h2>
          <h3>${book.author}</h3>
        </div>
        <div class="content d-flex justify-content-between">
          <p>${book.category}</p>
          <p>${book.year}</p>
        </div>
        <div class="content d-flex justify-content-center">
          <button class="btn btn-warning me-3 "data-bs-toggle="modal"
              data-bs-target="#booksModal" >Düzenle</button>
          <button class="btn btn-danger px-4">Sil</button>
        </div>
      </div>
    </div>
  </div>
`;
  }
}
