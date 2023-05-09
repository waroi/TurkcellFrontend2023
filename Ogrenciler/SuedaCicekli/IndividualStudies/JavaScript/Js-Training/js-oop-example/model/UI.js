class UI {
  form;
  submitButton;
  filmName;
  filmDirectorName;
  filmDirectorSurname;
  filmYear;
  filmScore;
  filmUrl;
  filmGenre;
  filmList;

  constructor() {
    this.filmName = document.getElementById("filmName");
    this.submitButton = document.getElementById("addOrEditButton");
    this.filmDirectorName = document.getElementById("directorName");
    this.filmDirectorSurname = document.getElementById("directorSurname");
    this.filmYear = document.getElementById("filmYear");
    this.filmScore = document.getElementById("filmScore");
    this.filmUrl = document.getElementById("filmUrl");
    this.filmGenre = document.getElementById("filmCategory");
    this.filmList = document.getElementById("film-list");
    this.form = document.getElementById("film-form");
  }

  listenFormSubmit() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.submitButton.className.includes("btn-warning")) {
        this.submitButton.innerHTML = "Ekle";
        this.submitButton.className = "btn btn-primary w-25";
      } else {
        let filmDirector = new Director(directorName.value, directorSurname.value);
        let addedFilm = new Film(this.filmName.value, this.filmYear.value, filmDirector, this.filmGenre.value, this.filmScore.value, this.filmUrl.value);
        addedFilm.addFilmToLS(addedFilm);
      }

      this.showFilmsToUI();
    });
  }

  showFilmsToUI() {
    this.filmList.innerHTML = "";
    let filmList = this.getFilmsFromLS();
    filmList.map((movie) => {
      this.filmList.innerHTML += `
      <div class="col-md-4" id="${movie.id}">
      <div class="card mb-3 mt-5 m-3">
            <div class="row align-items-center">
              <div class="col-md-6">
                <img src=${movie.image}
                  class="img-fluid rounded-start ms-3 my-3 " id="film-url" alt="" />
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title" id="film-name">${movie.title}</h5>
                  <p class="card-text">
                    <span class="fw-bold" id="
                    director">Yönetmen Adı:</span> ${movie.directorName} ${movie.directorSurname}
                  </p>
                  <p class="card-text" id="filmType"><span class="fw-bold">Tür Adı:</span>${movie.genre}</p>
                  <p class="card-text" id="filmYear"><span class="fw-bold">Yıl:</span>${movie.year}</p>
                  <p class="card-text" id="filmScore"><span class="fw-bold">Puan:</span>${movie.score}</p>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-evenly my-3">
            <button class="btn btn-danger w-25" onclick="ui.deleteFilm(${movie.id})" class="deleteButton">Sil</button>
            <button class="btn btn-success w-25" onClick="ui.editFilm(${movie.id})" id="editButton">Düzenle</button>
            </div>
          </div>
          </div>
        `;
    });
  }

  getFilmsFromLS() {
    let films = JSON.parse(localStorage.getItem("films"));
    return films;
  }

  deleteFilm(id) {
    let films = this.getFilmsFromLS();
    films.forEach((film, index) => {
      if (film.id == id) {
        films.splice(index, 1);
      }
    });
    localStorage.setItem("films", JSON.stringify(films));
    document.getElementById(id).remove();
  }

}