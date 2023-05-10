// elementleri erişme
const form = document.querySelector("#film-form");
const filmList = document.querySelector("#film-list");

// UI objesi
const ui = new UI();

// Local Storage objesi
const storage = new LocalStorage();

ui.addFilmFromUI();

// addEventListen
form.addEventListener("submit", formListenSubmit);

function formListenSubmit(e) {
  ui.formListenSubmitFromUI(e);
  ui.addFilmFromUI();
}

function editItem(id) {
  ui.editFilmFromUI(id);
}

// Local storage'dan id değerini al (silme ve düzenleme işlerinde id'ye göre filtre yapıyoruz.)
let id = storage.checkedIdFromLS();

storage.checkedIdFromLS();

// Local storage'dan filmleri getir
storage.getFilmFromLocalStorage();

// onclick tetiklendiren fonksiyon
function deleteItem(id) {
  storage.deleteItemFromLocalStorage(id);
}

// Film objesini local storage'dan sil
function deleteLocalStorage(movie) {
  storage.deleteFromLocalStorage(movie);
}

// Film objesini local storage'a kaydet
function saveLocalStorage(movie) {
  let films = storage.getFilmFromLocalStorage();
  films.push(movie);
  storage.saveFilmFromLocalStorage(films);
}
// Film objesini local storage'dan güncelle
function updateLocalStorage(movie) {
  storage.updateFilmFromLocalStorage(movie);
}
b;
