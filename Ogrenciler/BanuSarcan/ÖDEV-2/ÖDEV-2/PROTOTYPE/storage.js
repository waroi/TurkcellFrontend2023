function Storage() {}

Storage.prototype.getBooksFromStorage = function (KEY) {
  if (localStorage.getItem(KEY) === null) {
    KEY = [];
  } else {
    KEY = JSON.parse(localStorage.getItem(KEY));
  }
  return KEY;
};

Storage.prototype.deleteStorage = function (e) {
    let allBooks = this.getBooksFromStorage(KEY);
    allBooks.forEach(function (anyBook, i) {
      if (anyBook.id == e.target.parentElement.id) {
        allBooks.splice(i, 1);
      }
    });
    localStorage.setItem(KEY, JSON.stringify(allBooks));
  }
  export default Storage;