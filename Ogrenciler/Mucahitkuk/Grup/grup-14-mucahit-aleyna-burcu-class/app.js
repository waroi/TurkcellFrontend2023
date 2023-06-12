const addBtn = document.querySelector("#add-movie");
const movieList = document.querySelector("#film-collection");
const movieName = document.querySelector("#movie-name-input");
const movieType = document.querySelector("#movie-type-input");
const movieDirector = document.querySelector("#movie-director-input");
const searchInput = document.querySelector("#search-input");
const movieUrl = document.querySelector("#movie-url-input");
const errorText = document.querySelector("#error-text");
const editButton = document.querySelector("#edit-movie");

addBtn.addEventListener("click", () => ui.addMovie());
editButton.addEventListener("click", () => ui.updateMovie());
searchInput.addEventListener("input", (e) => ui.searchMovie(e));

let list = document.getElementById("film-collection");
let currentId;

class Movie {
  constructor(name, type, director, url) {
    this.id = Date.now();
    this.name = name;
    this.type = type;
    this.director = director;
    this.url = url;
  }
}


class UI {
  constructor() {
    this.movieList = document.getElementById("film-collection");
  }
  addMovie() {
    const name = movieName.value;
    const type = movieType.value;
    const director = movieDirector.value;
    const url = movieUrl.value;
    if (this.inputValidation()) {
      const movie = new Movie(name, type, director, url);
      this.addMovieToList(movie);
      storage.addMovie(movie);
      this.clearFields();
    }
  }
  updateMovie() {
    const name = movieName.value;
    const type = movieType.value;
    const director = movieDirector.value;
    const url = movieUrl.value;
    let movieList = storage.getMovies();
    const id = currentId;
    let updateItem = movieList.find((item) => item.id === id);
    if (this.inputValidation()) {
      const movie = new Movie(name, type, director, url);
      Object.assign(updateItem, movie);
      localStorage.setItem("movieList", JSON.stringify(movieList));
      this.clearFields();
      addBtn.classList.remove("d-none");
      editButton.classList.add("d-none");
      window.location.reload();
    }
  }
  searchMovie(e) {
    const searchTerm = e.target.value.toLowerCase();
    const movieList = document.querySelectorAll(".card");
    Array.from(movieList).forEach((movie) => {
      const movieName = movie.querySelector(".card-title").innerText.toLowerCase();
      if (movieName.includes(searchTerm)) {
        movie.style.display = "flex";
      } else {
        movie.style.display = "none";
      }
    });
  }
  addMovieToList(movie) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("col-lg-4");
    movieCard.innerHTML = `
    <div class="card mt-3 movie-card">
      <img src="${movie.url}" class="card-img-top" alt="Hatalı Url">
      <div class="card-body">
        <h5 class="card-title fw-bold">${movie.name}</h5>
        <h6>Tür: ${movie.type}</h6>
        <p class="card-text">Yönetmen: ${movie.director}</p>
      </div>
      <div class="card-body d-flex justify-content-between p-2">
        <button class="btn btn-success w-50 edit-btn">Düzenle</button>
        <button style="width: 49%;" class="btn btn-danger delete-btn">Kaldır</button>
      </div>
    </div>
  `;
    const editBtn = movieCard.querySelector(".edit-btn");
    const deleteBtn = movieCard.querySelector(".delete-btn");
    editBtn.addEventListener("click", function () {
      ui.showEditForm(movie);
    });
    deleteBtn.addEventListener("click", function () {
      ui.deleteMovie(movieCard, movie);
    });
    this.movieList.appendChild(movieCard);
  }
  showEditForm(movie) {
    movieName.value = movie.name;
    movieType.value = movie.type;
    movieDirector.value = movie.director;
    movieUrl.value = movie.url;
    currentId = movie.id;
    editButton.classList.remove("d-none");
    editButton.style.display = "flex";
    addBtn.classList.add("d-none");
  }
  deleteMovie(movieCard, movie) {
    const storage = new Storage();
    storage.deleteMovie(movie.id);
    movieCard.remove();
  }
  clearFields() {
    movieName.value = "";
    movieType.value = "";
    movieDirector.value = "";
    movieUrl.value = "";
  }
  inputValidation() {
    let regexTest = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i;
    if (movieName.value.trim() === "" ||
      movieDirector.value.trim() === "" ||
      movieType.value.trim() === "" ||
      !regexTest.test(movieUrl.value.trim())) {
      ui.displayError("Lütfen tüm alanları doldurunuz.");
      return false;
    }
    return true;
  }
  displayError(message) {
    errorText.textContent = message;
    setTimeout(function () {
      errorText.textContent = "";
    }, 3000);
  }
}

class Storage {
  constructor() {}
  getMovies() {
    let movieList = localStorage.getItem("movieList");
    return movieList ? JSON.parse(movieList) : [];
  }
  addMovie(movie) {
    let movieList = this.getMovies();
    movieList.push(movie);
    localStorage.setItem("movieList", JSON.stringify(movieList));
  }
  deleteMovie(id) {
    let movieList = this.getMovies();
    movieList = movieList.filter((movie) => movie.id !== id);
    localStorage.setItem("movieList", JSON.stringify(movieList));
  }
  loadMoviesFromLocalStorage() {
    const movieList = this.getMovies();
    for (let i = 0; i < movieList.length; i++) {
      ui.addMovieToList(movieList[i]);
    }
  }
}

const ui = new UI();
const storage = new Storage();

document.addEventListener("DOMContentLoaded", function () {
  storage.loadMoviesFromLocalStorage();
});
