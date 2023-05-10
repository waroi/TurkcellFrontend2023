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

addEventListeners();

function addEventListeners() {
  addMovieButton.addEventListener('click', movies.addMovie);
  movieList.addEventListener('click', movies.deleteMovie);
}