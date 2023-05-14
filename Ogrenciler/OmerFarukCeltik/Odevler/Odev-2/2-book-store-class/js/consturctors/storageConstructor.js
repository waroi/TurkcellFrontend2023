import { bookArray } from "../app.js";
class Storage{
  static getBooksFromStorage(){
    return JSON.parse(localStorage.getItem("bookStorage"));
  };
  static setBooksToStorage(){
    localStorage.setItem("bookStorage", JSON.stringify(bookArray));
  }
 };

export default Storage;