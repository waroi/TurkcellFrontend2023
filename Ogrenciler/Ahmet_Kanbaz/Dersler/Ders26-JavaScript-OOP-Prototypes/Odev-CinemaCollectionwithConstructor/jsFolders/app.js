const storage = new Storage();
const ui = new UI();
const movies = new Movies();

//Get Form Elements
const movieImageUrl = document.getElementById("imgUrl");
const movieName = document.getElementById("filmAdi");
const movieType = document.getElementById("filmTur");
const movieDate = document.getElementById("filmTarih");
const movieDirector = document.getElementById("filmYonetmen");
const movieSummary = document.getElementById("filmOzet");

const addMovieButton = document.getElementById("addMovieButton");

const movieList = document.getElementById("movieList");

//Get Modal Elements
const modalImage = document.getElementById("modalImg");
const modalImageUrl = document.getElementById("modalimgUrl");
const modalMovieName = document.getElementById("modalfilmAdi");
const modalMovieType = document.getElementById("modalfilmTur");
const modalMovieDate = document.getElementById("modalfilmTarih");
const modalMovieDirector = document.getElementById("modalfilmYonetmen");
const modalMovieSummary = document.getElementById("modalFilmSummary");

const saveEditChanges = document.getElementById("saveChanges");

addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", storage.showMoviesFromLocalStorage);
  addMovieButton.addEventListener('click', movies.addMovie);
  movieList.addEventListener('click', movies.deleteMovie);
  movieList.addEventListener('click', movies.editMovie);
  saveEditChanges.addEventListener('click', movies.saveEditMovie);
}