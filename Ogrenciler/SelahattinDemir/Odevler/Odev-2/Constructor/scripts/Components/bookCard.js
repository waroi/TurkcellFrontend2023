function BookCard() {}

BookCard.prototype.addBookFromBookCard = function (book) {
  bookList.innerHTML += `
  <div class="col-lg-3 col-sm-6 my-3 text-center" id="${book.id}">
    <div class="card shadow">
      <img src=${book.imageUrl} alt="" class="card-img-top img-fluid" />
      <div class="card-body">
        <h5 class="card-title text-center text-truncate">${book.name}</h5>
        <h6 class="text-center text-success">${book.writer}</h6>
        <p class="card-text text-truncate">${book.type}</p>
        <h6 class="text-end">${book.date}</h6>
        <h6 class="text-end text-secondary">${book.type}</h6>
        <div class="d-flex justify-content-around my-3">
          <a
            href="#"
            class="me-3"
            data-bs-toggle="modal"
            data-bs-target="#booksModal"
            ><span class="fa-solid fa-pen-to-square fa-lg"></span
          ></a>
          <a href="#"><span class="fa-solid fa-trash fa-lg"></span></a>
        </div>
      </div>
    </div>
  </div>
`;
};
