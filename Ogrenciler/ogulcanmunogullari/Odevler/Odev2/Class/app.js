import DATA from '../development.js';
import UserC from './Models/UserC.js';
import UiC from './Models/UiC.js';
import BookC from './Models/BookC.js';
import StoreC from './Models/StoreC.js';

//Load
const localePurchase =
 JSON.parse(localStorage.getItem('purchaseHistory')) || [];
const localBooks = JSON.parse(localStorage.getItem('books')) || [...DATA];

const store = new StoreC();
const ui = new UiC(
 localBooks.map(
  (data) =>
   new BookC(
    data.title,
    data.author,
    data.genre,
    data.url,
    data.publishingDate,
   ),
 ),
 localePurchase,
);
ui.getLibrary();

//Load
//Reception
receptionEnterButton.addEventListener('click', () => {
 if (userNameInput.value && userIdInput.value) {
  const user = new UserC(userNameInput.value, userIdInput.value);
  store.enterStore(user);
  ui.purchaseHistory =
   JSON.parse(localStorage.getItem('purchaseHistory')) || [];
  store.user.setUserPurchase(ui.getPurchaseHistory());
  openInventoryButton.classList.remove('d-none');
  userNameInput.value = '';
  userIdInput.value = '';
  receptionEnter.classList.add('d-none');
  receptionProcess.classList.remove('d-none');
 } else {
  alert('Lütfen Tüm Alanları Doldurunuz');
 }
});

donateButton.addEventListener('click', () => {
 receptionProcess.classList.add('d-none');
 receptionDonate.classList.remove('d-none');
});
backDonateButton.addEventListener('click', () => {
 receptionProcess.classList.remove('d-none');
 receptionDonate.classList.add('d-none');
});
donateForm.addEventListener('submit', (e) => {
 e.preventDefault();
 if (
  donateTitleInput.value &&
  donateAuthorInput.value &&
  donateGenreInput.value &&
  donateUrlInput.value &&
  donatePublishDateInput.value
 ) {
  const book = new BookC(
   donateTitleInput.value,
   donateAuthorInput.value,
   donateGenreInput.value.split(', '),
   donateUrlInput.value,
   donatePublishDateInput.value,
  );
  ui.addBook(book);
  localStorage.setItem('books', JSON.stringify(ui.books));
  donateForm.reset();
  ui.getLibrary();
  store.user.getInventoryData();
  receptionProcess.classList.remove('d-none');
  receptionDonate.classList.add('d-none');
 } else {
  alert('Lütfen Tüm Alanları Doldurunuz');
 }
});
rentButton.addEventListener('click', () => {
 receptionProcess.classList.add('d-none');
 receptionRent.classList.remove('d-none');
});
rentBackButton.addEventListener('click', () => {
 receptionProcess.classList.remove('d-none');
 receptionRent.classList.add('d-none');
});
rentingButton.addEventListener('click', () => {
 if (store.user.inventory.length > 0) {
  ui.setPurchaseHistory(store.user.userPurchase());
 } else {
  alert('Envanterinizde Kitap Yok');
 }
 ui.getLibrary();
 store.user.getInventoryData();
 receptionProcess.classList.remove('d-none');
 receptionRent.classList.add('d-none');
});

searchBookButton.addEventListener('click', () => {
 receptionSearch.classList.remove('d-none');
 receptionProcess.classList.add('d-none');
});

searchButton.addEventListener('click', () => {
 ui.changeSearch(searchTitleInput.value);
 const BOOK = ui.books.find((book) => {
  return ui.searchTitle(book.title);
 });
 searchResult.innerHTML = BOOK.genre.length > 1 ? BOOK.genre[0] : BOOK.genre;
 searchTitleInput.value = '';
});

backButton.addEventListener('click', () => {
 receptionProcess.classList.remove('d-none');
 receptionSearch.classList.add('d-none');
});
bringButton.addEventListener('click', () => {
 receptionProcess.classList.add('d-none');
 receptionBring.classList.remove('d-none');
});
bringBackButton.addEventListener('click', () => {
 receptionProcess.classList.remove('d-none');
 receptionBring.classList.add('d-none');
});
bringingButton.addEventListener('click', () => {
 if (store.user.purchased.length > 0) {
  const { name, id, books } = store.user.userBringBack();
  let newbooks = books.map((book) => {
   return new BookC(
    book.title,
    book.author,
    book.genre,
    book.url,
    book.publishingDate,
   );
  });
  ui.takeToBringingBooks(name, id, newbooks);
  ui.getLibrary();
  store.user.getInventoryData();
  receptionProcess.classList.remove('d-none');
  receptionBring.classList.add('d-none');
 } else {
  alert('Daha Önce Kiralama Yapmamışsınız');
  receptionProcess.classList.remove('d-none');
  receptionBring.classList.add('d-none');
 }
});
leaveButton.addEventListener('click', () => {
 store.user.inventory.forEach((book) => {
  ui.addBook(store.user.leaveFromInventory(book));
 });
 store.user.getInventoryData();
 store.leaveStore();
 ui.getLibrary();
 openInventoryButton.classList.add('d-none');
 receptionProcess.classList.add('d-none');
 receptionEnter.classList.remove('d-none');
});
//Reception

//PC
pcOpen.addEventListener('click', pcData);
function pcData() {
 const { authors, categories } = ui.getFilters();
 authorsFilter.innerHTML = authors
  .map((author) => {
   return `<option value="${author}"
      ${ui.filterAuthor == author && 'selected'}
      > 
      ${author} 
      </option>`;
  })
  .join('');
 authorsFilter.innerHTML += `<option value="null" ${
  ui.filterAuthor == 'null' && 'selected'
 }> 
    Yazara Göre Listele 
    </option>`;
 categoriesFilter.innerHTML = categories
  .map((category) => {
   return `<option value="${category}" ${
    ui.filterCategory == category && 'selected'
   }> 
      ${category} 
      </option>`;
  })
  .join('');
 categoriesFilter.innerHTML += `<option value="null" ${
  ui.filterCategory == 'null' && 'selected'
 }> 
     Kategori Seç 
     </option>`;

 sortFilter.innerHTML = `
         <option value="A-Z" ${ui.sorting == 'A-Z' && 'selected'}>
         A-Z
         </option>
         <option value="Z-A" ${ui.sorting == 'Z-A' && 'selected'}>
         Z-A
         </option>
         <option value="Yeniden eskiye" ${
          ui.sorting == 'Yeniden eskiye' && 'selected'
         }>
         Yeni
         </option>
         <option value="Eskiden yeniye" ${
          ui.sorting == 'Eskiden yeniye' && 'selected'
         }>
         Eski
         </option>`;
 ui.filteredList();
}
authorsFilter.addEventListener('change', () => {
 ui.changeFilterAuthor(authorsFilter.value);
 ui.filteredList();
});
categoriesFilter.addEventListener('change', () => {
 ui.changeFilterCategory(categoriesFilter.value);
 ui.filteredList();
});
sortFilter.addEventListener('change', () => {
 ui.changeSorting(sortFilter.value);
 ui.filteredList();
});
searchFilter.addEventListener('input', () => {
 ui.changeSearch(searchFilter.value);
 ui.filteredList();
});
resetFilterButton.addEventListener('click', () => {
 ui.resetFilters();
 pcData();
});
//PC

libraryBooks.addEventListener('click', (e) => {
 const genre = e.target.parentElement.id;
 ui.getLibraryData(genre);
});

//Buranın sebebi modal içini js ile oluşturduğum için ulaşmak
window.addEventListener('click', (e) => {
 if (e.target.classList.contains('inventoryButton')) {
  if (store.user) {
   store.user.takeToInventory(ui.getBook(e.target.id));
   libraryCloseButton.click();
   ui.getLibrary();
   store.user.getInventoryData();
  } else {
   alert('Giriş yapmalısınız');
   libraryCloseButton.click();
  }
 }
 if (e.target.classList.contains('changeButton')) {
  store.user.selectBook(e.target.id);
  inventoryList.classList.add('d-none');
  changeSelectedBook.classList.remove('d-none');
  changeTitleInput.value = store.user.selectedBook.title;
  changeAuthorInput.value = store.user.selectedBook.author;
  changePublishDateInput.value = store.user.selectedBook.publishingDate;
  changeGenreInput.value = store.user.selectedBook.genre.join(', ');
  changeUrlInput.value = store.user.selectedBook.url;
 }
 if (e.target.classList.contains('bringButton')) {
  store.user.selectBook(e.target.id);
  ui.addBook(store.user.leaveFromInventory(store.user.selectedBook));
  localStorage.setItem('books', JSON.stringify(ui.books));
  ui.getLibrary();
  store.user.getInventoryData();
 }
});

changeSelectedBook.addEventListener('submit', (e) => {
 e.preventDefault();
 if (
  changeTitleInput.value &&
  changeAuthorInput.value &&
  changeGenreInput.value &&
  changeUrlInput.value &&
  changePublishDateInput.value
 ) {
  const book = store.user.selectedBook;
  book.changeBook(
   changeTitleInput.value,
   changeAuthorInput.value,
   changeGenreInput.value.split(', '),
   changeUrlInput.value,
   changePublishDateInput.value,
  );
  store.user.selectedBook = null;
  changeFormReset.click();
  store.user.getInventoryData();
  inventoryList.classList.remove('d-none');
  changeSelectedBook.classList.add('d-none');
 } else {
  alert('Lütfen tüm alanları doldurunuz');
 }
});

//Library
