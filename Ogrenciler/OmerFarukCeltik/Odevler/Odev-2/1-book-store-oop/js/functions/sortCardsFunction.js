import { cardUpdateToUI,bookArray } from "../app.js";

function sortCardsDateAndAlphabetic(e) {
  if (e.target.value == "a/z") {
    bookArray.sort((a, b) => {
      let bookA = a.bookName.toLowerCase();
      let bookB = b.bookName.toLowerCase();
      if (bookA > bookB) {
        return 1;
      }
      if (bookA < bookB) {
        return -1;
      }
      return 0
    })
    cardUpdateToUI();
  }
  if (e.target.value == "z/a") {
    bookArray.sort((a, b) => {
      let bookA = a.bookName.toLowerCase();
      let bookB = b.bookName.toLowerCase();
      if (bookA < bookB) {
        return 1;
      }
      if (bookA > bookB) {
        return -1;
      }
      return 0
    })
    cardUpdateToUI();
  }
  if (e.target.value == "date") {
    bookArray.sort((a, b) => a.publicationDate - b.publicationDate);
    cardUpdateToUI();
  }
}
export default sortCardsDateAndAlphabetic;