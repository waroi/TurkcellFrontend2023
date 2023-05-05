const form = document.querySelector("#film-form");
const filmList = document.querySelector("#film-list");

function Film(id, title, director, imageUrl, score, year, kind) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.year = year;
    this.kind = kind;
    this.imageUrl = imageUrl;
    this.score = score
}

let id = checkandgetID();

function checkandgetID() {
    let id;
    if (localStorage.getItem("id") === null) {
        localStorage.setItem("id", 0);
        id = 0;
    } else {
        id = localStorage.getItem("id");
    }
    return id;
}


showFilmsFromLocalStorage();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    id = checkandgetID();
    const button = document.getElementById("addOrEditButton")
    let filmUrl = document.getElementById("filmUrl").value;
    let filmName = document.getElementById("filmName").value;
    let director = document.getElementById("director").value;
    let filmType = document.getElementById("filmCategory").value;
    let filmYear = document.getElementById("filmYear").value;
    let filmScore = document.getElementById("filmScore").value;
    console.log(button.className.includes("btn-warning"), button.className);
    if (button.className.includes("btn-warning")) {
        button.innerHTML = "Ekle";
        button.className = "btn btn-primary w-25"
    } else {
        let newFilm = new Film(id, filmName, director, filmUrl, filmScore, filmYear, filmType);
        saveFilmToLocalStorage(newFilm);
    }
    showFilmsFromLocalStorage(); //değerleri local storage'dan aldığımız için parametresiz çalıştırdık.
    localStorage.setItem("id", ++id);
    form.reset();
});


function showFilmsFromLocalStorage() {
    filmList.innerHTML = "";
    let films = getFilmToLocalStorage();
    films.forEach((movie) => {
        filmList.innerHTML += `
  <div class="col-md-4" id="${movie.id}">
  <div class="card mb-3 mt-5">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src=${movie.imageUrl}
              class="img-fluid rounded-start" id="film-url" alt="" />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title" id="film-name">${movie.title}</h5>
              <p class="card-text">
                <span class="fw-bold" id="
                director">Yönetmen Adı:</span> ${movie.director}
              </p>
              <p class="card-text" id="filmType"><span class="fw-bold">Tür Adı:</span>${movie.kind}</p>
              <p class="card-text" id="filmYear"><span class="fw-bold">Yıl:</span>${movie.year}</p>
              <p class="card-text" id="filmScore"><span class="fw-bold">Puan:</span>${movie.score}</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-evenly my-3">
        <button class="btn btn-danger w-25" onclick="deleteItem(${movie.id})" class="deleteButton">Sil</button>
        <button class="btn btn-success w-25" onClick="editItem(${movie.id})" id="editButton">Düzenle</button>
        </div>
      </div>
      </div>
`;
    })
}

function deleteItem(id) {
    let film = document.getElementById(id);
    deleteFilmToLocalStorage(film);
    film.remove();
}

function editItem(id) {
    let films = getFilmToLocalStorage();
    console.log(films);
    films.forEach((film) => {
        if (film.id == id) {
            const button = document.getElementById("addOrEditButton")
            let filmUrl = document.getElementById("filmUrl");
            let filmName = document.getElementById("filmName");
            let director = document.getElementById("director");
            let filmType = document.getElementById("filmCategory");
            let filmYear = document.getElementById("filmYear");
            let filmScore = document.getElementById("filmScore");

            filmUrl.value = film.imageUrl;
            filmName.value = film.title;
            director.value = film.director;
            filmType.value = film.kind;
            filmYear.value = film.year;
            filmScore.value = film.score;
            button.innerHTML = "Düzenle";
            button.className = "btn btn-warning w-25"

            button.onclick = function () {
                film.kind = filmType.value;
                film.year = filmYear.value;
                film.title = filmName.value;
                film.score = filmScore.value;
                film.imageUrl = filmUrl.value;
                film.director = director.value;
                updateFilmToLocalStorage(film);
            }
        }
    });
}

// Local storage'dan filmleri getir
function getFilmToLocalStorage() {
    let films;
    if (localStorage.getItem("films") === null) {
        films = [];
    } else {
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

// Film objesini local storage'a kaydet
function saveFilmToLocalStorage(movie) {
    let films = getFilmToLocalStorage();
    films.push(movie);
    localStorage.setItem("films", JSON.stringify(films));
}

function updateFilmToLocalStorage(movie) {
    console.log("update çalıştı")
    let films = getFilmToLocalStorage();
    films.map((film) => {
        if (film.id == movie.id) {
            film.kind = movie.kind;
            film.year = movie.year;
            film.director = movie.director;
            film.imageUrl = movie.imageUrl;
            film.title = movie.title
        }
    })

    localStorage.setItem("films", JSON.stringify(films));
}

// Film objesini local storage'dan sil
function deleteFilmToLocalStorage(movie) {
    let films = getFilmToLocalStorage();
    films.forEach((film, index) => {
        if (film.id == movie.id) {
            films.splice(index, 1);
        }
    });
    localStorage.setItem("films", JSON.stringify(films));
}

