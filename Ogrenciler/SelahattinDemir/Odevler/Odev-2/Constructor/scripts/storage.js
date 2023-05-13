function LocalStorage() {}

// Local Storage'da bulunan kitapları alma
LocalStorage.prototype.getBookFromLocalStorage = function () {
  return JSON.parse(localStorage.getItem("books")) || [];
};

// Local Storage'a kitap ekleme
LocalStorage.prototype.saveBookFromLocalStorage = function (books) {
  localStorage.setItem("books", JSON.stringify(books));
};

LocalStorage.prototype.deleteItemFromLocalStorage = function (e) {
  if (e.target.className === "fa-solid fa-trash fa-lg") {
    const book =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    if (confirm("Bu kitabı silmek istediğinize emin misiniz?")) {
      let books = storage.getBookFromLocalStorage();
      books.forEach((book, index) => {
        console.log(book.id);
        if (book.id === book.id) {
          books.splice(index, 1);
        }
      });
      storage.saveBookFromLocalStorage(books);
      book.remove();
    }
  }
};

// Local Storage'dan kitap silme
// LocalStorage.prototype.deleteFromLocalStorage = function (deleteBookId) {
//   let books = storage.getBookFromLocalStorage();
//   console.log(books);
//   books.forEach((book, index) => {
//     console.log(book.id);
//     console.log(deleteBookId);
//     if (book.id === deleteBookId) {
//       books.splice(index, 1);
//     }
//   });
//   console.log(books + "kaydedildi");
//   storage.saveBookFromLocalStorage(books);
// };

LocalStorage.prototype.updateBookFromLocalStorage = function (book) {
  let books = storage.getBookFromLocalStorage();
  books.forEach((bookone) => {
    if (bookone.id === book.id) {
      Object.assign(bookone, book);
    }
  });
  storage.saveBookFromLocalStorage(books);
};
