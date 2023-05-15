function BookCard() {}

BookCard.prototype.addBookFromBookCard = function (book) {
  bookList.innerHTML += `
  <div class="col-lg-3 col-sm-6 my-3 text-center" id="${book.id}">
    <div class="card shadow">
      <img src=${book.imageUrl} alt="" class="card-img img-fluid" />
      <div class="card-body">
        <h5 class="card-title text-center text-truncate fs-3 mb-2">${book.name}</h5>
        <h6 class="text-center text-success fs-5">${book.writer}</h6>
        <p class="card-text text-truncate">${book.category}</p>
        <h6 class="text-end fs-6">${book.date}</h6>
        <div class="d-flex justify-content-around my-3">
          <a
            href="#"
            class="me-3 text-danger"
            data-bs-toggle="modal"
            data-bs-target="#booksModal"
            ><span class="fa-solid fa-pen-to-square fa-lg"></span
          ></a>
          <a href="#" class="text-success"><span class="fa-solid fa-trash fa-lg"></span></a>
        </div>
      </div>
    </div>
  </div>
`;
};
