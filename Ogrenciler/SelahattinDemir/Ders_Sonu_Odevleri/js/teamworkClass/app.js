// elementleri erişme
const form = document.querySelector("#film-form");
const filmList = document.querySelector("#film-list");

UI.addFilmFromUI();

// addEventListen
form.addEventListener("submit", formListenSubmit);

function formListenSubmit(e) {
  UI.formListenSubmitFromUI(e);
  UI.addFilmFromUI();
}

function editItem(id) {
  UI.editFilmFromUI(id);
}

// Local storage'dan id değerini al (silme ve düzenleme işlerinde id'ye göre filtre yapıyoruz.)
let id = LocalStorage.checkedIdFromLS();

LocalStorage.checkedIdFromLS();

// Local storage'dan filmleri getir
LocalStorage.getFilmFromLocalStorage();

// onclick tetiklendiren fonksiyon
function deleteItem(id) {
  LocalStorage.deleteItemFromLocalStorage(id);
}

// Film objesini local storage'dan sil
function deleteLocalStorage(movie) {
  LocalStorage.deleteFromLocalStorage(movie);
}

// Film objesini local storage'a kaydet
function saveLocalStorage(movie) {
  let films = LocalStorage.getFilmFromLocalStorage();
  films.push(movie);
  LocalStorage.saveFilmFromLocalStorage(films);
}
// Film objesini local storage'dan güncelle
function updateLocalStorage(movie) {
  LocalStorage.updateFilmFromLocalStorage(movie);
}
