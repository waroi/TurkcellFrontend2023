function UI(){};

UI.prototype.alertMessage = function(e){
    alert(e);
};

UI.prototype.createNewBook = function(book){
    const bookCol = document.createElement('div');
    bookCol.className = 'col-lg-3 col-sm-6 my-3 text-center';
    const bookCard = document.createElement('div');
    bookCard.className = 'card shadow';
    const bookImg = document.createElement('img');
    bookImg.className = 'card-img-top img-fluid';
    bookImg.setAttribute('src', book.url);
    bookImg.setAttribute('alt', book.name);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const cardBodyItems = `<h5 class="card-title text-center text-truncate">${book.name}</h5>
    <p class="card-text text-truncate">${book.category}</p>
    <h6 class="text-end">${book.date}</h6>
    <h6 class="text-end text-secondary">${book.writer}</h6>
    <div class="d-flex justify-content-around my-3">
      <a href="#" class="me-3" data-bs-toggle="modal" data-bs-target="#booksModal"><span class="fa-solid fa-pen-to-square fa-lg"></span></a>
      <a href="#"><span class="fa-solid fa-trash fa-lg"></span></a>
    </div>`;
    cardBody.innerHTML = cardBodyItems;
    bookCard.appendChild(bookImg);
    bookCard.appendChild(cardBody);
    bookCol.appendChild(bookCard);
    bookList.appendChild(bookCol);
    
};

UI.prototype.clearModal = function(){
    bookName.value = "";
    writerName.value = "";
    bookCategory.value = "";
    releaseDate.value = "";
    bookImgUrl.value = "";
}
