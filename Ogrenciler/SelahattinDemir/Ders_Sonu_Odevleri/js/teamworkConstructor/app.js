const form = document.querySelector("#film-form");
const filmList = document.querySelector("#film-list");



// addEventListener
form.addEventListener("submit", formListenSubmit);

// UI objesi
const ui = new UI();

// Local Storage objesi
const storage = new LocalStorage();
ui.addFilmFromUI();

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

function deleteItem(id) {
  storage.deleteItemFromLocalStorage(id);
}

// Film objesini local storage'a kaydet
function saveFilmToLocalStorage(movie) {
  let films = storage.getFilmFromLocalStorage();
  films.push(movie);
  storage.saveFilmToLocalStorage(films);
}
// Film objesini local storage'dan güncelle
function updateFilmToLocalStorage(movie) {
  storage.updateFilmFromLocalStorage(movie);
}

// Film objesini local storage'dan sil
function deleteFilmToLocalStorage(movie) {
  storage.deleteFilmFromLocalStorage(movie);
}


function isValidImageUrl(url) {
  // Geçerli bir URL mi diye kontrol etme
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
