class Storage {
  
  getBooksFromStorage(KEY) {
    if (localStorage.getItem(KEY) === null) {
      KEY = [];
    } else {
      KEY = JSON.parse(localStorage.getItem(KEY));
    }
    return KEY;
  }
  
  deleteStorage(e) {
      let allBooks = this.getBooksFromStorage(KEY);
      allBooks.forEach(function (anyBook, i) {
        if (anyBook.id == e.target.parentElement.id) {
          allBooks.splice(i, 1);
        }
      });
      localStorage.setItem(KEY, JSON.stringify(allBooks));
    }

}
export default Storage;