function UI() {
  this.addFilmFromUI = function () {
    filmList.innerHTML = "";
    let films = storage.getFilmFromLocalStorage();
    films.forEach((movie) => {
      filmList.innerHTML += `
  <div class="col-md-4" id="${movie.id}">
  <div class="card mb-3 mt-5 m-3">
        <div class="row align-items-center">
          <div class="col-md-6 text-center">
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
    });
  };
  this.editFilmFromUI = function (id) {
    let films = storage.getFilmFromLocalStorage();
    console.log(films);
    films.forEach((film) => {
      if (film.id == id) {
        const button = document.getElementById("addOrEditButton");
        let filmUrl = document.getElementById("filmUrl");
        let filmName = document.getElementById("filmName");
        let director = document.getElementById("director");
        let filmType = document.getElementById("filmCategory");
        let filmYear = document.getElementById("filmYear");
        let filmScore = document.getElementById("filmScore");
        //inputları doldur
        filmUrl.value = film.imageUrl;
        filmName.value = film.title;
        director.value = film.director;
        filmType.value = film.kind;
        filmYear.value = film.year;
        filmScore.value = film.score;
        //butonu düzenle
        button.innerHTML = "Düzenle";
        button.className = "btn btn-warning w-25";
        //butona tıklandığında filmi güncelle ve sayfayı yenile
        button.onclick = function () {
          film.kind = filmType.value;
          film.year = filmYear.value;
          film.title = filmName.value;
          film.score = filmScore.value;
          film.imageUrl = filmUrl.value;
          film.director = director.value;
          //update fonksiyonuna filmi gönder
          updateLocalStorage(film);
          location.reload();
        };
      }
    });
  };
}
// Geçerli bir URL mi diye kontrol etme
function isValidImageUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}
UI.prototype.formListenSubmitFromUI = function (e) {
  e.preventDefault();
  id = storage.checkedIdFromLS();
  const button = document.getElementById("addOrEditButton");
  let filmUrl = document.getElementById("filmUrl").value;
  let filmName = document.getElementById("filmName").value;
  let director = document.getElementById("director").value;
  let filmType = document.getElementById("filmCategory").value;
  let filmYear = document.getElementById("filmYear").value;
  let filmScore = document.getElementById("filmScore").value;

  // Form validasyonları
  if (!filmName) {
    document.getElementById("filmNameError").innerHTML =
      "Lütfen bir film adı girin.";
    return;
  } else {
    document.getElementById("filmNameError").innerHTML = "";
  }
  if (!director) {
    document.getElementById("directorError").innerHTML =
      "Lütfen bir yönetmen adı girin.";
    return;
  } else {
    document.getElementById("directorError").innerHTML = "";
  }
  if (!filmType) {
    document.getElementById("filmCategoryError").innerHTML =
      "Lütfen bir tür adı girin.";
    return;
  } else {
    document.getElementById("filmCategoryError").innerHTML = "";
  }
  if (!filmYear) {
    document.getElementById("filmYearError").innerHTML =
      "Lütfen geçerli bir yıl girin.";
    return;
  } else {
    document.getElementById("filmYearError").innerHTML = "";
  }
  if (!filmScore) {
    document.getElementById("filmScoreError").innerHTML =
      "Lütfen geçerli bir puan girin.";
    return;
  } else {
    document.getElementById("filmScoreError").innerHTML = "";
  }
  if (!filmUrl || !isValidImageUrl(filmUrl)) {
    document.getElementById("filmUrlError").innerHTML =
      "Lütfen geçerli bir url girin.";
    return;
  } else {
    document.getElementById("filmUrlError").innerHTML = "";
  }

  if (button.className.includes("btn-warning")) {
    button.innerHTML = "Ekle";
    button.className = "btn btn-primary w-25";
  } else {
    // Fillm objesi
    let newFilm = new Film(
      id,
      filmName,
      director,
      filmUrl,
      filmScore,
      filmYear,
      filmType
    );
    saveLocalStorage(newFilm);
  }
  localStorage.setItem("id", ++id);
  form.reset();
};
