const movieNameInp = document.querySelector("#movieNameInput");
const movieDirectorInp = document.querySelector("#movieDirectorInput");
const movieYearInp = document.querySelector("#movieYearInput");
const movieGenreInp = document.querySelector("#movieGenreInput");
const movieBannerInp = document.querySelector("#movieBannerInput");
const movieCollectionRow = document.querySelector(".movie-collection");
const addMovieButton = document.querySelector("#add-movie");
let editMovieButton = document.querySelector("#edit-movie");
const form = document.querySelector("form");

// #region Constructors
class Movie {
  constructor(name, director, year, genre, banner){
    this.id = Date.now();
    this.name = name;
    this.director = director;
    this.year = year;
    this.genre = genre;
    this.banner = banner;
  }
}
// function Movie() {
//   this.id = Date.now();
//   this.name = name;
//   this.director = director;
//   this.year = year;
//   this.genre = genre;
//   this.banner = banner;
// }

class UI{
  static isEmpty(){
    return (
      movieNameInp.value == "" ||
      movieDirectorInp.value == "" ||
      movieYearInp.value == "" ||
      movieGenreInp.value == "" ||
      movieBannerInp.value == ""
    );
  }
  static addMovieToUI(newMovie){
    movieCollectionRow.innerHTML += createCard(newMovie);
  }
  static deleteMovieFromUI(movie){
    movie.remove();
  }
  static resetInput(movie){
    form.reset();
  }
  static cardToForm(movieID){
    addMovieButton.style.display = "none";
    editMovieButton.style.display = "block";
    let movie = movies.find((movie) => movie.id == movieID);
    movieNameInp.value = movie.name;
    movieDirectorInp.value = movie.director;
    movieYearInp.value = movie.year;
    movieGenreInp.value = movie.genre;
    movieBannerInp.value = movie.banner;
  };
  }

class Storage{
  static getStorage(){
    return JSON.parse(localStorage.getItem("movieStorage"));
  }
  static setStorage(){
    localStorage.setItem("movieStorage", JSON.stringify(movies));
  }
}

// function UI() {}

// UI.prototype.isEmpty = function () {
//   return (
//     movieNameInp.value == "" ||
//     movieDirectorInp.value == "" ||
//     movieYearInp.value == "" ||
//     movieGenreInp.value == "" ||
//     movieBannerInp.value == ""
//   );
// };

// UI.prototype.addMovieToUI = function (newMovie) {
//   movieCollectionRow.innerHTML += createCard(newMovie);
// };

// UI.prototype.deleteMovieFromUI = function (movie) {
//   movie.remove();
// };

// UI.prototype.resetInput = function () {
//   form.reset();
// };

// UI.prototype.cardToForm = function (movieID) {
//   addMovieButton.style.display = "none";
//   editMovieButton.style.display = "block";
//   let movie = movies.find((movie) => movie.id == movieID);
//   console.log("asdasdsa");
//   movieNameInp.value = movie.name;
//   movieDirectorInp.value = movie.director;
//   movieYearInp.value = movie.year;
//   movieGenreInp.value = movie.genre;
//   movieBannerInp.value = movie.banner;
//   console.log(movie); 
// };

// function Storage() {}

// Storage.prototype.getStorage = function () {
//   return JSON.parse(localStorage.getItem("movieStorage"));
// };

// Storage.prototype.setStorage = function () {
//   localStorage.setItem("movieStorage", JSON.stringify(movies));
// };
//#endregion

// let storage = new Storage();
// let ui = new UI();
let currentMovieID;

let movies = Storage.getStorage() ? Storage.getStorage() : [];
eventListeners();
updateDisplay();

function eventListeners() {
  addMovieButton.addEventListener("click", addMovie);
  movieCollectionRow.addEventListener("click", function (e) {
    if (e.target.classList.contains("movie-delete")) {
      let movieCard = e.target.parentElement.parentElement.parentElement;
      UI.deleteMovieFromUI(movieCard);
      removeFromArray(movieCard.id);
    } else if (e.target.classList.contains("movie-edit")) {
      let movieCard = e.target.parentElement.parentElement.parentElement;
      currentMovieID = movieCard.id;
      UI.cardToForm(movieCard.id);
      // toggleButtons();
    }
  });
  editMovieButton.addEventListener("click", (e) =>
  {
  console.log(currentMovieID);
  editMovie(currentMovieID, e)
}) 
}

function addMovie(e) {
  e.preventDefault();
  if (UI.isEmpty()) {
    alert("Boş girdi yapmayınız");
  } else {
    let newMovie = new Movie(
      movieNameInp.value,
      movieDirectorInp.value,
      movieYearInp.value,
      movieGenreInp.value,
      movieBannerInp.value
    );
    movies.push(newMovie);
    UI.addMovieToUI(newMovie);
    UI.resetInput();
    Storage.setStorage();
  }
}

function updateDisplay() {
  movieCollectionRow.innerHTML = "";
  movies.map((movie) => {
    UI.addMovieToUI(movie);
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
  let movie = movies.find((movie) => movie.id == movieID);
  movies.splice(movies.indexOf(movie), 1);
  Storage.setStorage();
}

function toggleButtons() {
  addMovieButton.style.display =
    addMovieButton.style.display === "block" ? "none" : "block";
  editMovieButton.style.display =
    editMovieButton.style.display === "block" ? "none" : "block";
}

function editMovie(movieID, e) {
  console.log(movieID);
  let crazy = movies.find((element)=> element.id == movieID)
  editMovieButton.style.display = "none";
  addMovieButton.style.display = "block";
  // toggleButtons();
  crazy.name = movieNameInp.value;
  crazy.director = movieDirectorInp.value;
  crazy.year = movieYearInp.value;
  crazy.genre = movieGenreInp.value;
  crazy.banner = movieBannerInp.value;
  editMovieButton.removeEventListener("click", () => editMovie());
  e.preventDefault();
  Storage.setStorage();
  updateDisplay();
  // for (const key in obj.address) {
  //   delete movie[key];
  // }
}
