function createCard(book) {
  return `
    <div class="col-md-3 mb-5" id="${book.id}">
    <div class="card h-100">
    <img src="${book.coverURL}" class="card-img-top" alt="..." width="300px" height="300px">
    <div class="card-body h-50">
      <h2 class="book-title">${book.name}</h2>
      <h3 class="book-writer">${book.writer}</h3>
      <h3 class="book-category">${book.category}</h3>
      <h5 class="book-release-date">${book.releaseDate}</h5>
      
      <a href="#" data-bs-toggle="modal" data-bs-target="#addModal" class="btn btn-warning book-edit"><i class="fa-solid fa-pen-nib"></i></a>
      <a href="#"  class="btn btn-danger book-delete"><i class="fa-solid fa-eraser"></i></a>
    </div>
    </div>
  </div>`;
}

export default createCard;
