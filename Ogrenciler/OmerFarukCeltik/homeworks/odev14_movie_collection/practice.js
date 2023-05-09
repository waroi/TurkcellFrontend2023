const movieNameInp = document.querySelector("#movieNameInput");
const movieDirectorInp = document.querySelector("#movieDirectorInput");
const movieYearInp = document.querySelector("#movieYearInput");
const movieGenreInp = document.querySelector("#movieGenreInput");
const movieBannerInp = document.querySelector("#movieBannerInput");
const movieCollectionRow = document.querySelector(".movie-collection");
const addMovieButton = document.querySelector("#add-movie");
const editMovieButton = document.querySelector("#edit-movie");


function Movie(name, director, year, genre, banner) {
  this.id = Date.now();
  this.name = name;
  this.director = director;
  this.year = year;
  this.genre = genre;
  this.banner = banner;
}

function UI(){}

UI.prototype.isEmpty = function(){
  return (movieNameInp.value == "" || movieDirectorInp.value == "" || movieYearInp.value == "" || movieGenreInp.value == "" || movieBannerInp.value == "");
}

UI.prototype.addMovieToUI = function () {
  const movieWrap = document.createElement("div");
  movieWrap.classList.add("col-md-4");
  movieWrap.innerHTML = createCard(newMovie);
  movieCollectionRow.appendChild = movieWrap;
}
UI.prototype.resetInput = function () {
  form.reset();
}

function Storage() {}

Storage.prototype.getStorage = function () {
  return JSON.parse(localStorage.getItem("movieStorage"));
}
Storage.prototype.setStorage = function () {
  return localStorage.setItem("movieStorage", JSON.stringify(movies));
}

const storage = new Storage();
const ui = new UI();

const movies = storage.getStorage() ?  storage.getStorage() : [];
addEventListeners();
function addEventListeners() {
  addMovieButton.addEventListener("click",() => {
    addMovie();
  });
}

function addMovie(e) {
  e.preventDefault();
  if(ui.isEmpty){
    alert("lütfen boş veri girmeyiniz");
  } else {
    const newMovie = new Movie(
      movieNameInp.value, movieDirectorInp.value, movieYearInp.value, movieGenreInp.value, movieBannerInp.value
    );
      ui.addMovieToUI(newMovie);
      ui.resetInput();
      storage.setStorage();
  }
}


function createCard(movie) {
  return `<div class="card h-100">
                    <img
                      src=${movie.movieBannerURL}
                      class="card-img-top movie-banner"
                      alt="..."
                    />
                    <div class="card-body">
                      <h2 class="card-title movie-title">${movie.movieName}</h2>
                      <h4 class="card-title genre-year">${movie.movieGenre} - ${movie.movieYear}</h4>
                      <h6 class="card-title director">${movie.movieDirector}</h6>
                      <button class="btn btn-danger movie-delete">Delete</button>
                      <button class="btn btn-warning movie-edit">Edit</button>
                      </div>
                      </div>
                      `;
}
function updateDisplay () {
  movies.map((movie) => {
    addMovie(movie);
  })
}