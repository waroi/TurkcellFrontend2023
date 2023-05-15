class UI{

addBook = function (book) {
    
    const card = document.createElement('div');
    card.id = book.id;
    card.className = 'card col-4 my-5 mx-0 px-0 shadow';
    console.log(book.bookPoster);
    card.innerHTML = `<img src="${book.bookPoster}" class="card-img-top img-fluid" alt="${book.bookTitle}">
    <div class="card-body text-white m-0 p-0">
      <h5 class="card-title fs-6 mt-2 ">${book.bookTitle}</h5>
     
      </div>`;
      card.setAttribute('data-toggle', "modal");
      card.setAttribute('data-target', "#addBookModal");
      card.setAttribute('onclick', "bookEdit(this.id)");
    bookList.appendChild(card);
  }


  alertMessage = function (message) {
    alert(message);
  }
  
  clearForm = function () {
    bookPosterInput.value = '';
    bookTitleInput.value = '';
    bookCategoryInput.value = '';
    bookYearInput.value = '';
    bookAuthorInput.value = '';
  }

}