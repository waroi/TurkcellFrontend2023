function UI(){};

UI.prototype.alertMessage = function(e){
    alert(e);
};

UI.prototype.createNewBook = function(book){
    const bookList = document.getElementById("bookList");
    bookList.innerHTML += createCard(book); 

    const edit = document.querySelectorAll(".card");

    console.log(edit);
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
        bookList.innerHTML += createCard(e);
    })
}

function createCard(e){
    return `
    <div class="card " style="width: 18rem;height:38rem;">
            <img src="${e.url}" class="card-img-top cardImg" alt="${e.name}">
            <div class="card-body bookBody">
                <h5 class="card-title bookName">${e.name}</h5>
                <p class="card-text writerName m-0"> Yazar Adı: ${e.writer}</p>
                <p class="card-text m-0">  ${e.writer}</p>
                <p class="card-text ">  ${e.date}</p>
                <a href="#" class="me-3 edit" data-bs-toggle="modal" data-bs-target="#booksModal"><span class="fa-solid fa-pen-to-square fa-lg"></span></a>
                <a href="#" id = "delete-book" class = "btn deleteBtn mx-5">Kitabı Sil</a>
            </div>
        </div>
    `
}

UI.prototype.deleteBookFromUI = function(e){
    e.remove();
}
