import { bookArray } from "../app.js";
function Storage() { };

Storage.prototype.getBooksFromStorage = function () {
  return JSON.parse(localStorage.getItem("bookStorage"));
}

Storage.prototype.setBooksToStorage = function () {
  localStorage.setItem("bookStorage", JSON.stringify(bookArray));
}


export default Storage;