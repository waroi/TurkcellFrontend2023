function createCard(book) {
  return `<div id="${book.id}" class="col">
<div class="card h-100 bg-white bg-opacity-25 p-4">
  <img src="${book.banner}" class="card-img-top img-fluid" alt="...">
    
  <div class="card-body">
    <h5 class="card-title fs-4">${book.bookName}</h5>
    <div>
      <h6 class="mt-3">Category: <span class="fw-normal">${book.category}</span></h6>
    </div>
    <div>
      <h6 class="mt-3">Author: <span class="fw-normal">${book.author}</span></h6>
    </div>
    <div>
      <h6 class="mt-3">Publication Date: <span class="fw-normal">${book.publicationDate}</span></h6>
    </div>
    <hr>
  </div>
  <div class="px-4 d-flex justify-content-end">
    <div class="btn btn-danger delete-button me-3">Remove</div>
    <button type="button" data-bs-toggle="modal"
    data-bs-target="#addBookModal" class="btn btn-warning edit-button">Edit</button>
  </div>
</div>
</div>`
}
export default createCard;

