const movieName = document.getElementById("movieName");
const director = document.getElementById("director");
const year = document.getElementById("year");
const type = document.getElementById("type");
const posterUrl = document.getElementById("posterUrl");
class UI {
  addMovieToList(movie) {
    const movieTable = document
      .getElementById("movieTable")
      .getElementsByTagName("tbody")[0];

    const tr = document.createElement("tr");

    tr.innerHTML = `
          <td>${movie.movieName}</td>
          <td>${movie.director}</td>
          <td>${movie.year}</td>
          <td>${movie.type}</td>
          <td><a href="${movie.posterUrl}" target="_blank">Filmin posteri</a></td>
          <td>
            <button class="btn btn-danger">Sil</button>
            <button class="btn btn-primary">Güncelle</button>
          </td>
        `;

    movieTable.appendChild(tr);
  }
  clearFormFields() {
    movieName.value = "";
    director.value = "";
    year.value = "";
    type.value = "";
    posterUrl.value = "";
  }
  deleteMovieFromList(target) {
    if (target.classList.contains("btn-danger")) {
      target.parentElement.parentElement.remove();
    } 
  }
  deleteForUpdateMovie(target) {
    if (target.classList.contains("btn-primary")) {
        target.parentElement.parentElement.remove();
      }
  }
  updateMovieForm(movie) {
    movieName.value = movie.movieName;
    director.value = movie.director;
    year.value = movie.year;
    type.value = movie.type;
    posterUrl.value = movie.posterUrl;
  }
}
class Movie {
  constructor(movieName, director, year, type, posterUrl) {
    this.movieName = movieName;
    this.director = director;
    this.year = year;
    this.type = type;
    this.posterUrl = posterUrl;
  }
}
class Storage {
  getMoviesFromStorage() {
    let movies;

    if (localStorage.getItem("movies")) {
      movies = JSON.parse(localStorage.getItem("movies"));
    } else {
      movies = [];
    }
    return movies;
  }
  addMovieToStorage(movie) {
    const movies = this.getMoviesFromStorage();

    movies.push(movie);

    localStorage.setItem("movies", JSON.stringify(movies));
  }
  deleteMovieFromStorage(index) {
    const movies = this.getMoviesFromStorage();

    movies.splice(index, 1);

    localStorage.setItem("movies", JSON.stringify(movies));
  }
}
const ui = new UI();
const storage = new Storage();

function addMovie(event) {
  event.preventDefault();

  const movieName = document.getElementById("movieName").value;
  const director = document.getElementById("director").value;
  const year = document.getElementById("year").value;
  const type = document.getElementById("type").value;
  const posterUrl = document.getElementById("posterUrl").value;

  const movie = new Movie(movieName, director, year, type, posterUrl);

  ui.addMovieToList(movie);

  storage.addMovieToStorage(movie);

  ui.clearFormFields();
}

function deleteClick(event) {
  // Silme butonuna tıklandığında
  if (event.target.classList.contains("btn-danger")) {
    const rowIndex = event.target.parentElement.parentElement.rowIndex;

    ui.deleteMovieFromList(event.target);

    storage.deleteMovieFromStorage(rowIndex - 1);
  }
  event.preventDefault();
}
function updateClick(event){
    if (event.target.classList.contains("btn-primary")) {
        const rowIndex = event.target.parentElement.parentElement.rowIndex - 1;
    
        const movies = storage.getMoviesFromStorage();
        const movie = movies[rowIndex];
    
        ui.updateMovieForm(movie);
        ui.deleteForUpdateMovie(event.target);
        storage.deleteMovieFromStorage(rowIndex);
      }
    
      event.preventDefault();
}

document.getElementById("movieForm").addEventListener("submit", addMovie);

document
  .getElementById("movieTable")
  .addEventListener("click", deleteClick,updateClick);
  

document.addEventListener("DOMContentLoaded", function () {
  const movies = storage.getMoviesFromStorage();

  movies.forEach(function (movie) {
    ui.addMovieToList(movie);
  });
});
