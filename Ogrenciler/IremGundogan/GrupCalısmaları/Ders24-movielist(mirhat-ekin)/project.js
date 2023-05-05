const form = document.getElementById("movie-form");
const nameElement = document.querySelector("#name");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const releaseElement = document.querySelector("#release");
const cardbody = document.querySelectorAll(".card-body")[1];

//uı Objesinİ Başlatma
const ui = new UI();

//Storage objesi üret
const storage = new Storage();
//Tüm eventleri yükleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addMovie);
  document.addEventListener("DOMContentLoaded", function () {
    let movies = storage.getMoviesFromStorage();
    ui.loadAllMovies(movies);
  });
  cardbody.addEventListener("click", deleteMovie);
}
function addMovie(e) {
  e.preventDefault();

  const name = nameElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  const release = releaseElement.value;

  if (name === "" || director === "" || url === "" || release === "") {
    //Hata
    ui.displayMessages("Lütfen boş alan bırakmayınız!", "danger");
  } else {
    //yeni filmm
    const newMovie = new Movie(name, director, url, release);
    ui.addMovieToUI(newMovie);
    storage.addMovieStorage(newMovie); //storage film ekleme
    ui.displayMessages("Film başarıyla eklendi!", "success"); //arayüze film ekle
  }
  ui.clearInputs(nameElement, urlElement, directorElement, releaseElement);
}
function deleteMovie(e) {
  if (e.target.id === "delete-movie") {
    ui.deleteMovieFromUI(e.target);
  }
}
