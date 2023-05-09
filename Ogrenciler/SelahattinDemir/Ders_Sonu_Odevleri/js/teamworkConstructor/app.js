const form = document.querySelector("#film-form");
const filmList = document.querySelector("#film-list");

// Fillm objesi
function Film(id, title, director, imageUrl, score, year, kind) {
  this.id = id;
  this.title = title;
  this.director = director;
  this.year = year;
  this.kind = kind;
  this.imageUrl = imageUrl;
  this.score = score;
}

// addEventListener
form.addEventListener("submit", formListenSubmit);

// UI objesi
const ui = new UI();

// Local Storage objesi
const storage = new LocalStorage();

// Local storage'dan id değerini al (silme ve düzenleme işlerinde id'ye göre filtre yapıyoruz.)
let id = checkandgetID();

function checkandgetID() {
  let id;
  if (localStorage.getItem("id") === null) {
    localStorage.setItem("id", 0);
    id = 0;
  } else {
    id = localStorage.getItem("id");
  }
  return id;
}
// Local storage'dan filmleri getir
ui.addFilmFromUI();

function formListenSubmit(e) {
  ui.formListenSubmitFromUI(e);
  ui.addFilmFromUI();
}

function editItem(id) {
  ui.editFilmFromUI(id);
}

function deleteItem(id) {
  let film = document.getElementById(id);
  deleteFilmToLocalStorage(film);
  film.remove();
}

// Local storage'dan filmleri getir
storage.getFilmFromLocalStorage();

// Film objesini local storage'a kaydet
function saveFilmToLocalStorage(movie) {
  let films = storage.getFilmFromLocalStorage();
  films.push(movie);
  localStorage.setItem("films", JSON.stringify(films));
}
// Film objesini local storage'dan güncelle
function updateFilmToLocalStorage(movie) {
  let films = storage.getFilmFromLocalStorage();
  films.map((film) => {
    if (film.id == movie.id) {
      //filme gelen değerleri ata
      film.kind = movie.kind;
      film.year = movie.year;
      film.director = movie.director;
      film.imageUrl = movie.imageUrl;
      film.title = movie.title;
    }
  });

  localStorage.setItem("films", JSON.stringify(films));
}

// Film objesini local storage'dan sil
function deleteFilmToLocalStorage(movie) {
  let films = storage.getFilmFromLocalStorage();
  films.forEach((film, index) => {
    if (film.id == movie.id) {
      films.splice(index, 1);
    }
  });
  localStorage.setItem("films", JSON.stringify(films));
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
