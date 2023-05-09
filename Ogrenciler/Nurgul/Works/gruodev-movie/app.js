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
      <button class="btn btn-success">Güncelle</button>
    </td>
  `;

  movieTable.appendChild(tr);
};

UI.prototype.clearFormFields = function () {
  document.getElementById("movieName").value = "";
  document.getElementById("director").value = "";
  document.getElementById("year").value = "";
  document.getElementById("type").value = "";
  document.getElementById("posterUrl").value = "";
};

UI.prototype.showAlert = function (message, className) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert ${className}`;
  alertDiv.appendChild(document.createTextNode(message));

  const container = document.querySelector(".container");
  const form = document.getElementById("movieForm");
  container.insertBefore(alertDiv, form);

  setTimeout(function () {
    alertDiv.remove();
  }, 3000);
};

UI.prototype.deleteMovieFromList = function (target) { //???
  if (target.classList.contains("btn-danger")) {
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
UI.prototype.updateMovieInList = function (index, movie) {
  const movieRows = document.querySelectorAll("#movieTable tbody tr");
  const movieRow = movieRows[index];

  // Film bilgilerini güncelle
  movieRow.cells[0].textContent = movie.movieName;
  movieRow.cells[1].textContent = movie.director;
  movieRow.cells[2].textContent = movie.year;
  movieRow.cells[3].textContent = movie.type;

  const posterUrlLink = movieRow.cells[4].querySelector("a");
  posterUrlLink.href = movie.posterUrl;
  
  // Başarılı güncelleme mesajı göster
  this.showAlert("Film başarıyla güncellendi", "alert-success");
};


// Film Constructor
function Film(movieName, director, year, type, posterUrl) {
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

Storage.prototype.updateMovieInStorage = function (index, movie) {
  const movies = this.getMoviesFromStorage();

  movies.splice(index, 1, movie);

  localStorage.setItem("movies", JSON.stringify(movies));
  
};

Storage.prototype.deleteMovieFromStorage = function (index) {
  const movies = this.getMoviesFromStorage();

  movies.splice(index, 1);

  localStorage.setItem("movies", JSON.stringify(movies));
};
const ui = new UI();
const storage = new Storage();

// Form gönderildiğinde çalışacak fonksiyon
function addMovie(event) {
  event.preventDefault(); // Formun sayfayı yenilemesini engelliyor

  // Formdaki verileri al
  const movieName = document.getElementById("movieName").value;
  const director = document.getElementById("director").value;
  const year = document.getElementById("year").value;
  const type = document.getElementById("type").value;
  const posterUrl = document.getElementById("posterUrl").value;

  // Yeni filmi oluştur
  const movie = new Film(movieName, director, year, type, posterUrl);

  // UI nesnesi üzerinden filmi tabloya ekle
  ui.addMovieToList(movie);

  // Storage nesnesi üzerinden filmi localStorage'e ekle
  storage.addMovieToStorage(movie);

  // Formu temizle
  ui.clearFormFields();

  // Başarılı ekleme mesajı göster
  ui.showAlert("Film başarıyla eklendi", "alert-success");
}

// Formu submit eventine bağla
document.getElementById("movieForm").addEventListener("submit", addMovie);
// Silme ve güncelleme butonlarına click eventi ekleme
document.getElementById("movieTable").addEventListener("click", function (event) {
  // Silme butonuna tıklandığında
  if (event.target.classList.contains("btn-danger")) {
    const rowIndex = event.target.parentElement.parentElement.rowIndex - 1;

    // UI nesnesi üzerinden filmi tablodan sil
    ui.deleteMovieFromList(event.target);

    // Storage nesnesi üzerinden filmi localStorage'dan sil
    storage.deleteMovieFromStorage(rowIndex);

    // Başarılı silme mesajı göster
    ui.showAlert("Film başarıyla silindi", "alert-success");
  }

  // Güncelleme butonuna tıklandığında
  if (event.target.classList.contains("btn-success")) {
    const rowIndex = event.target.parentElement.parentElement.rowIndex - 1;
    ui.deleteMovieFromList(event.target);
    // Storage nesnesi üzerinden güncellenecek filmi al
    const movies = storage.getMoviesFromStorage();
    const movie = movies[rowIndex];
    
    // UI nesnesi üzerinden güncelleme formunu doldur
    ui.updateMovieForm(movie);

    // Storage nesnesi üzerinden filmi localStorage'dan sil
    storage.deleteMovieFromStorage(rowIndex);
    
    ui.updateMovieInList(rowIndex, movie);

    // Başarılı güncelleme mesajı göster
    ui.showAlert("Film güncelleme formuna yüklendi", "alert-info");
  }


  event.preventDefault();
});
// Sayfa yüklendiğinde localStorage'den verileri al ve tabloya ekle
document.addEventListener("DOMContentLoaded", function () {
  const movies = storage.getMoviesFromStorage();

  movies.forEach(function (movie) {
    ui.addMovieToList(movie);
  });
});



