// Verileri tutacak dizi
let movies = [];

// Form elemanları
const form = document.getElementById("movieForm");
const movieName = document.getElementById("movieName");
const director = document.getElementById("director");
const year = document.getElementById("year");
const type = document.getElementById("type");
const posterUrl = document.getElementById("posterUrl");

const movieTable = document
  .getElementById("movieTable")
  .getElementsByTagName("tbody")[0];
// const filmKartlari = document.getElementById('movieCard');

// Verileri localStorage'dan yükle
if (localStorage.getItem("movies")) {
  movies = JSON.parse(localStorage.getItem("movies"));
  movieList();
  movieCards();
}

// Form gönderildiğinde çalışacak fonksiyon
function addMovie(event) {
  event.preventDefault(); // Formun sayfayı yenilemesini engelle

  // Formdaki verileri al
  const newMovie = {
    movieName: movieName.value,
    director: director.value,
    year: year.value,
    type: type.value,
    posterUrl: posterUrl.value,
  };

  // Yeni filmi movies dizisine ekle
  movies.push(newMovie);

  // moviesi localStorage'e kaydet
  localStorage.setItem("movies", JSON.stringify(movies));

  // Tabloyu güncelle
  movieList();
  movieCards();

  // Formu temizle
  form.reset();
}
function movieCards() {
  document.getElementById("movieCard").innerHTML = " ";
  movies.forEach(function (film, index) {
    const item = document.createElement("div");
    item.className = "card";
    item.setAttribute("style", "width: 18rem;");

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.setAttribute("src", film.posterUrl);
    item.appendChild(img);
    const body = document.createElement("div");
    body.className = "card-body";
    item.appendChild(body);
    const header = document.createElement("h5");
    header.className = "card-title";
    header.textContent = film.movieName;
    body.appendChild(header);

    const list = document.createElement("ul");
    list.className = "list-group list-group-flush";
    item.appendChild(list);

    const director = document.createElement("li");
    director.className = "list-group-item";
    director.textContent = film.director;
    list.appendChild(director);

    const type = document.createElement("li");
    type.className = "list-group-item";
    type.textContent = film.type;
    list.appendChild(type);

    const year = document.createElement("li");
    year.className = "list-group-item";
    year.textContent = film.year;
    list.appendChild(year);

    const buttons = document.createElement("li");
    buttons.className = "d-flex justify-content-evenly";
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.setAttribute(
      "style",
      " padding-left:40px; padding-right:40px;"
    );
    deleteButton.textContent = "Sil";
    deleteButton.addEventListener("click", function () {
      deleteMovie(index);
    });
    buttons.appendChild(deleteButton);
    const updateButton = document.createElement("button");
    updateButton.textContent = "Güncelle";
    updateButton.className = "btn btn-success";
    updateButton.addEventListener("click", function () {
      updateMovie(index);
    });
    buttons.appendChild(updateButton);
    list.appendChild(buttons);
    document.getElementById("movieCard").appendChild(item);
  });
}

// moviesi tabloya ekle
function movieList() {
  // Tabloyu temizle
  movieTable.innerHTML = "";

  // Her bir film için bir satır oluşturma
  movies.forEach(function (film, index) {
    const tr = document.createElement("tr");

    // Tabloya hücreler ekle
    const tdMovieName = document.createElement("td");
    tdMovieName.textContent = film.movieName;
    tr.appendChild(tdMovieName);

    const tdDirector = document.createElement("td");
    tdDirector.textContent = film.director;
    tr.appendChild(tdDirector);

    const tdYear = document.createElement("td");
    tdYear.textContent = film.year;
    tr.appendChild(tdYear);

    const tdType = document.createElement("td");
    tdType.textContent = film.type;
    tr.appendChild(tdType);

    const tdPoster = document.createElement("td");
    const posterUrlLink = document.createElement("a");
    posterUrlLink.href = film.posterUrl;
    posterUrlLink.target = "_blank";
    posterUrlLink.textContent = "Filmin posteri";
    tdPoster.appendChild(posterUrlLink);

    tr.appendChild(tdPoster);
    // Satırı tabloya ekle
    movieTable.appendChild(tr);
  });
}

// Bir filmi sil
function deleteMovie(index) {
  // Filmi diziden sil
  movies.splice(index, 1); //splice dizinin belirli bir bölümünü silmek için.Burada 1 filmi siliyor.

  // moviesi localStorage'den sil
  localStorage.setItem("movies", JSON.stringify(movies));

  // Tabloyu güncelle
  movieList();
  movieCards();
}

// Bir filmi güncelleme formuna yükle
function updateMovie(index) {
  // Film bilgilerini form elemanlarına yükle
  movieName.value = movies[index].movieName;
  director.value = movies[index].director;
  year.value = movies[index].year;
  type.value = movies[index].type;
  posterUrl.value = movies[index].posterUrl;

  // Eski filmi diziden sil
  movies.splice(index, 1);

  // moviesi localStorage'den sil
  localStorage.setItem("movies", JSON.stringify(movies));

  // Tabloyu güncelle
  movieList();
  movieCards();
}

// Formu submit eventine bağla
form.addEventListener("submit", addMovie);
