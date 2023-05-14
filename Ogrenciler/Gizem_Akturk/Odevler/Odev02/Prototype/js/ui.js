function UI() {
   
}

UI.prototype.addBookToUI = function (newBook) {
    const bookList = document.getElementById("book-list");
    
    bookList.innerHTML += `
    <tr>
        <td><img src="${newBook.url}" class="img-fluid img-thumbnail"></td>
        <td>${newBook.title}</td>
        <td>${newBook.author}</td>
        <td><a href="#" id = "delete-book" class = "btn btn-danger">Kitabı Sil</a></td>
    </tr>
    `;
}