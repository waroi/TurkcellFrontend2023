const movieNameInp = document.querySelector("#movieNameInput");
const movieDirectorInp = document.querySelector("#movieDirectorInput");
const movieYearInp = document.querySelector("#movieYearInput");
const movieGenreInp = document.querySelector("#movieGenreInput");
const movieBannerInp = document.querySelector("#movieBannerInput");
const movieCollectionRow = document.querySelector(".movie-collection");
const addMovieButton = document.querySelector("#add-movie");
const editMovieButton = document.querySelector("#edit-movie");
const form = document.querySelector("form");

// #region Constructors
function Movie(name, director, year, genre, banner) {
  this.id = Date.now();
  this.name = name;
  this.director = director;
  this.year = year;
  this.genre = genre;
  this.banner = banner;
}

function UI() {}

UI.prototype.isEmpty = function () {
  return (
    movieNameInp.value == "" ||
    movieDirectorInp.value == "" ||
    movieYearInp.value == "" ||
    movieGenreInp.value == "" ||
    movieBannerInp.value == ""
  );
};

UI.prototype.addMovieToUI = function (newMovie) {
  movieCollectionRow.innerHTML += createCard(newMovie);
};

UI.prototype.deleteMovieFromUI = function (movie) {
  movie.remove();
};

UI.prototype.resetInput = function () {
  form.reset();
};

UI.prototype.cardToForm = function (movieID) {
  addMovieButton.style.display = "none";
  editMovieButton.style.display = "block";
  const movie = movies.find((movie) => movie.id == movieID);
  movieNameInp.value = movie.name;
  movieDirectorInp.value = movie.director;
  movieYearInp.value = movie.year;
  movieGenreInp.value = movie.genre;
  movieBannerInp.value = movie.banner;
  editMovieButton.addEventListener("click", (e) => editMovie(movie, e));
};

function Storage() {}

Storage.prototype.getStorage = function () {
  return JSON.parse(localStorage.getItem("movieStorage"));
};

Storage.prototype.setStorage = function () {
  localStorage.setItem("movieStorage", JSON.stringify(movies));
};
//#endregion

const storage = new Storage();
const ui = new UI();

const movies = storage.getStorage() ? storage.getStorage() : [];
eventListeners();
updateDisplay();

function eventListeners() {
  addMovieButton.addEventListener("click", addMovie);
  movieCollectionRow.addEventListener("click", function (e) {
    if (e.target.classList.contains("movie-delete")) {
      const movieCard = e.target.parentElement.parentElement.parentElement;
      ui.deleteMovieFromUI(movieCard);
      removeFromArray(movieCard.id);
    } else if (e.target.classList.contains("movie-edit")) {
      const movieCard = e.target.parentElement.parentElement.parentElement;
      ui.cardToForm(movieCard.id);
      // toggleButtons();
    }
  });
}

function addMovie(e) {
  e.preventDefault();
  if (ui.isEmpty()) {
    alert("Boş girdi yapmayınız");
  } else {
    const newMovie = new Movie(
      movieNameInp.value,
      movieDirectorInp.value,
      movieYearInp.value,
      movieGenreInp.value,
      movieBannerInp.value
    );
    movies.push(newMovie);
    ui.addMovieToUI(newMovie);
    ui.resetInput();
    storage.setStorage();
  }
}

function updateDisplay() {
  movieCollectionRow.innerHTML = "";
  movies.map((movie) => {
    ui.addMovieToUI(movie);
  });
}

function createCard(movie) {
  return `
  <div class="col-md-4 my-3" id="${movie.id}">
  <div class="card h-100">
  <img
    src=${movie.banner}
    class="card-img-top movie-banner"
    alt="..."
  />
  <div class="card-body">
    <h2 class="card-title movie-title">${movie.name}</h2>
    <h4 class="card-title genre-year">${movie.genre} - ${movie.year}</h4>
    <h6 class="card-title director">${movie.director}</h6>
    <button class="btn btn-danger movie-delete">Delete</button>
    <button class="btn btn-warning movie-edit">Edit</button>
    </div>
    </div>
    </div>
    `;
}

function removeFromArray(movieID) {
  const movie = movies.find((movie) => movie.id == movieID);
  movies.splice(movies.indexOf(movie), 1);
  storage.setStorage();
}

function toggleButtons() {
  addMovieButton.style.display =
    addMovieButton.style.display === "block" ? "none" : "block";
  editMovieButton.style.display =
    editMovieButton.style.display === "block" ? "none" : "block";
}

function editMovie(movie, e) {
  let crazy = movie;
  console.log(crazy);
  editMovieButton.style.display = "none";
  addMovieButton.style.display = "block";
  // toggleButtons();
  movie.name = movieNameInp.value;
  movie.director = movieDirectorInp.value;
  movie.year = movieYearInp.value;
  movie.genre = movieGenreInp.value;
  movie.banner = movieBannerInp.value;
  editMovieButton.removeEventListener("click", () => editMovie(movie));
  storage.setStorage();
}
