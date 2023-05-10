function Storage() {

}

let allBooksDatabase = [];

Storage.prototype.addStorage = function (OneBook) {
    // window.addEventListener("DOMContentLoaded", () => {})

    //Main.js'den eklenen yeni kitap buraya geldi, burdan ui'ya gidicek sonra ekrana basılacak
    allBooksDatabase = [OneBook, ...allBooksDatabase];
    //LocalStorage'a attık
    localStorage.setItem("books", JSON.stringify(allBooksDatabase));

    getBooks = JSON.parse(localStorage.getItem("books"));
    console.log(getBooks)
    const ui = new UI();
    ui.addBook(getBooks);
}


Storage.prototype.getStorage = function () {


}