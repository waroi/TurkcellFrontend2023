const form = document.getElementById("movie-form");
const nameElement = document.querySelector("#name");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const releaseElement = document.querySelector("#release");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-movies");
const edit = document.getElementById("edit-movie");
console.log(edit);
//Tüm eventleri yükleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addMovie);
  document.addEventListener("DOMContentLoaded", function () {
    let movies = Storage.getMoviesFromStorage();
    UI.loadAllMovies(movies);
  });
  cardbody.addEventListener("click", deleteMovie);
  clear.addEventListener("click", clearAllFilms);
}
function addMovie(e) {
  e.preventDefault();
  debugger;

  const name = nameElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  const release = releaseElement.value;

  if (name === "" || director === "" || url === "" || release === "") {
    //Hata
    UI.displayMessages("Lütfen boş alan bırakmayınız!", "danger");
  } else {
    //yeni filmm
    const newMovie = new Movie(name, director, url, release);
    UI.addMovieToUI(newMovie);
    storage.addMovieStorage(newMovie); //storage film ekleme
    UI.displayMessages("Film başarıyla eklendi!", "success"); //arayüze film ekle
  }
  UI.clearInputs(nameElement, urlElement, directorElement, releaseElement);
}
function deleteMovie(e) {
  if (e.target.id === "delete-movie") {
    UI.deleteMovieFromUI(e.target);
  }
}
function editMovie(e) {}
function clearAllFilms() {
  if (confirm("Emin misiniz ?")) {
    UI.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
  }
}
