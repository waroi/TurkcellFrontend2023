// UI Constructor
function UI() {}

UI.prototype.addMovieToList = function (movie) {
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

//   const movieCard = document.getElementById("movieCard");
//   const card = document.createElement("div");
//   card.className="deneme";

//   card.innerHTML = `<img src="${movie.posterUrl}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${movie.movieName}</h5>
//     <p class="card-text">${movie.director}</p>
//     <p class="card-text">${movie.year}</p>
//     <p class="card-text">${movie.type}</p>
//     <button class="btn btn-danger">Sil</button>
//       <button class="btn btn-primary">Güncelle</button>
//   </div>`;
//   movieCard.appendChild(card);
  movieTable.appendChild(tr);
  
};

UI.prototype.clearFormFields = function () {
  document.getElementById("movieName").value = "";
  document.getElementById("director").value = "";
  document.getElementById("year").value = "";
  document.getElementById("type").value = "";
  document.getElementById("posterUrl").value = "";
};

UI.prototype.deleteMovieFromList = function (target) {
  if (target.classList.contains("btn-danger")) {
    target.parentElement.parentElement.remove();
  }
  else if (target.classList.contains("btn-primary")) {
    target.parentElement.parentElement.remove();
  }
};

UI.prototype.updateMovieForm = function (movie) {
  document.getElementById("movieName").value = movie.movieName;
  document.getElementById("director").value = movie.director;
  document.getElementById("year").value = movie.year;
  document.getElementById("type").value = movie.type;
  document.getElementById("posterUrl").value = movie.posterUrl;
};

// Movie Constructor

function Movie(movieName, director, year, type, posterUrl) {
  this.movieName = movieName;
  this.director = director;
  this.year = year;
  this.type = type;
  this.posterUrl = posterUrl;
}

// Storage Constructor
function Storage() {}

Storage.prototype.getMoviesFromStorage = function () {
  let movies;

  if (localStorage.getItem("movies")) {
    movies = JSON.parse(localStorage.getItem("movies"));
  } else {
    movies = [];
  }

  return movies;
};

Storage.prototype.addMovieToStorage = function (movie) {
  const movies = this.getMoviesFromStorage();

  movies.push(movie);

  localStorage.setItem("movies", JSON.stringify(movies));
};

//   const movies = this.getMoviesFromStorage();

//   movies.splice(index, 1, movie);

//   localStorage.setItem("movies", JSON.stringify(movies));
  
// };

Storage.prototype.deleteMovieFromStorage = function (index) {
  const movies = this.getMoviesFromStorage();

  movies.splice(index, 1);

  localStorage.setItem("movies", JSON.stringify(movies));
};
const ui = new UI();
const storage = new Storage();

function addMovie(event) {
  event.preventDefault(); // Formun sayfayı yenilemesini engelliyor


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

document.getElementById("movieForm").addEventListener("submit", addMovie);

document.getElementById("movieTable").addEventListener("click", function (event) {
    // Silme butonuna tıklandığında
  if (event.target.classList.contains("btn-danger")) {
    const rowIndex = event.target.parentElement.parentElement.rowIndex-1;

    ui.deleteMovieFromList(event.target);

    storage.deleteMovieFromStorage(rowIndex);
  }
     // Güncelleme butonuna tıklandığında
      if (event.target.classList.contains("btn-primary")) {
        const rowIndex = event.target.parentElement.parentElement.rowIndex-1;
      
        const movies = storage.getMoviesFromStorage();
        const movie = movies[rowIndex];
        
        ui.updateMovieForm(movie);
        ui.deleteMovieFromList(event.target);
        storage.deleteMovieFromStorage(rowIndex);
      } 
  
  event.preventDefault();
});

// Sayfa yüklendiğinde localStorage'den verileri alma ve tabloya ekleme
document.addEventListener("DOMContentLoaded", function () {
  const movies = storage.getMoviesFromStorage();

  movies.forEach(function (movie) {
    ui.addMovieToList(movie);
  });
});