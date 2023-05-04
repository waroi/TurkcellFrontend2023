const form = document.querySelector("#film-form");
const filmList = document.querySelector("#film-list");

function Film(title, director, imageUrl, score, year, kind) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.kind = kind;
  this.imageUrl = imageUrl;
  this.score = score;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let filmUrl = document.getElementById("filmUrl").value;
  let filmName = document.getElementById("filmName").value;
  let director = document.getElementById("director").value;
  let filmType = document.getElementById("filmCategory").value;
  let filmYear = document.getElementById("filmYear").value;
  let filmScore = document.getElementById("filmScore").value;

  let newFilm = new Film(filmName, director, filmUrl, filmScore, filmYear, filmType);
  filmAdd(newFilm);

});



function filmAdd(film) {

  console.log(film);
  filmList.innerHTML += `
  <div class="col-md-4 " id="card">
  <div class="card mb-3 mt-5">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src=${film.imageUrl}
              class="img-fluid rounded-start" id="film-url" alt="" />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title" id="film-name">${film.title}</h5>
              <p class="card-text">
                <span class="fw-bold" id="
                director">Yönetmen Adı:</span> ${film.director}
              </p>
              <p class="card-text" id="filmType"><span class="fw-bold">Tür Adı:</span>${film.kind}</p>
              <p class="card-text" id="filmYear"><span class="fw-bold">Yıl:</span>${film.year}</p>
              <p class="card-text" id="filmScore"><span class="fw-bold">Puan:</span>${film.score}</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-evenly my-3">
          <button class="btn btn-danger w-25" id="deleteButton">Sil</button>
          <button class="btn btn-success w-25" id="editButton">Düzenle</button>
        </div>
      </div>
      </div>
`;

  // Local storage'dan filmleri yükle
  document.addEventListener("DOMContentLoaded", () => {
    let films = filmBringLS();
    films.forEach((film) => {
      filmAdd(film);
    });
  });

  filmSaveLS(film);
  filmDeleteCard(film);
}

function filmDeleteCard(film) {
  const deleteCard = document.getElementById("card");
  const deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", () => {
    filmDeleteLS(film);
    deleteCard.remove();
  });
}

// Local storage'dan filmleri getir
function filmBringLS() {
  let films;
  if (localStorage.getItem("films") === null) {
    films = [];
  } else {
    films = JSON.parse(localStorage.getItem("films"));
  }
  return films;
}

// Film objesini local storage'a kaydet
function filmSaveLS(film) {
  let films = filmBringLS();
  films.push(film);
  localStorage.setItem("films", JSON.stringify(films));
}

// Film objesini local storage'dan sil
function filmDeleteLS(film) {
  let films = filmBringLS();
  films.forEach((f, index) => {
    if (f.filmName === film.filmName) {
      films.splice(index, 1);
    }
  });
  localStorage.setItem("films", JSON.stringify(films));
}