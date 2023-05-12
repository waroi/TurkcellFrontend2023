function UI(){};
const ui3 = new UI();

UI.prototype.alertMessage = function(e){
    alert(e);
};

UI.prototype.createNewBook = function(book){
    const bookList = document.getElementById("bookList");
    bookList.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${book.url}" class="card-img-top" alt="${book.name}">
        <div class="card-body">
            <h5 class="card-title">${book.name}</h5>
            <p class="card-text"> Yazar Adı: ${book.writer}</p>
            <p class="card-text"> Kategori: ${book.writer}</p>
            <p class="card-text"> Yayın Tarihi: ${book.date}</p>
            <a href="#" class="me-3" data-bs-toggle="modal" data-bs-target="#booksModal"><span class="fa-solid fa-pen-to-square fa-lg"></span></a>
            <a href="#" id = "delete-book" class = "btn btn-danger mx-5">Kitabı Sil</a>
        </div>
    </div>
    `;
    
    
};

UI.prototype.clearModal = function(){
    bookName.value = "";
    writerName.value = "";
    bookCategory.value = "";
    releaseDate.value = "";
    bookImgUrl.value = "";
}


UI.prototype.loadAllBooksFromStorage = function(books){
    const bookList = document.getElementById("bookList");

    books.forEach(function(e){
        bookList.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${e.url}" class="card-img-top" alt="${e.name}">
            <div class="card-body">
                <h5 class="card-title">${e.name}</h5>
                <p class="card-text"> Yazar Adı: ${e.writer}</p>
                <p class="card-text"> Kategori: ${e.writer}</p>
                <p class="card-text"> Yayın Tarihi: ${e.date}</p>
                <a href="#" class="me-3" data-bs-toggle="modal" data-bs-target="#booksModal"><span class="fa-solid fa-pen-to-square fa-lg"></span></a>
                <a href="#" id = "delete-book" class = "btn btn-danger mx-5">Kitabı Sil</a>
            </div>
        </div>
        `;
    })
}

UI.prototype.deleteBookFromUI = function(e){
    e.remove();
}