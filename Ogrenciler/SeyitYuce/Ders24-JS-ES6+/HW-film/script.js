// UI constructor, Film Constructor ve Storage constructor olacak.

function FilmConstructor(name, director, year, genres, filmUrl) {
  this.name = name;
  this.director = director;
  this.year = year;
  this.genres = genres;
  this.filmUrl = filmUrl;
}

function UIConstructor() {
  this.filmName = document.getElementById("filmName");
  this.directorName = document.getElementById("director");
  this.year = document.getElementById("year");
  this.genres = document.getElementById("genres");
  this.filmUrl = document.getElementById("url");
  this.form = document.getElementById("form");
  this.cards = document.getElementById("cards");
  this.submitBtn = document.getElementById("submitBtn");
  this.editBtn = document.getElementById("editBtn");
  this.editedIndex = 0;
}

UIConstructor.prototype = {
  capitalizeFirstLetter: function (string) {
    // return this.string.toUpperCase() + this.string.slice(1);
  },
  resetInputs: function () {
    UIConstructor.call(this);
    this.filmName.value = "";
    this.directorName.value = "";
    this.year.value = "";
    this.genres.value = "";
    this.filmUrl.value = "";
  },
  addFilms: function () {
    UIConstructor.call(this);
    this.filmName = this.filmName.value;
    this.directorName = this.directorName.value;
    this.yearName = this.year.value;
    this.genresName = this.genres.value;
    this.filmUrl = this.filmUrl.value;
    if (
      this.filmName === "" ||
      this.directorName === "" ||
      this.year === "" ||
      this.genres === "" ||
      this.filmUrl === ""
    ) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }
    const filmText = this.filmName;
    const directorText = this.directorName;
    const yearText = this.yearName;
    const options = this.genresName;
    const urlText = this.filmUrl;

    const newFilm = new FilmConstructor(
      filmText,
      directorText,
      yearText,
      options,
      urlText
    );

    films.push(newFilm);

    localStorage.setItem("films", JSON.stringify(films));
    this.showFilms();
    this.resetInputs();
  },
  showFilms: function () {
    cards.innerHTML = "";

    films.forEach((film, index) => {
      const filmImage = document.createElement("img");
      filmImage.classList = "card-img-top";
      filmImage.src = film.filmUrl;

      const filmText = document.createElement("h5");
      filmText.textContent = film.name;

      const directorText = document.createElement("p");
      directorText.textContent = film.director;

      const genreText = document.createElement("span");
      genreText.textContent = film.genres;
      genreText.classList = "me-3";

      const yearText = document.createElement("span");
      yearText.textContent = film.year;

      const updateBtn = document.createElement("button");
      const updateText = document.createTextNode("Güncelle");
      updateBtn.appendChild(updateText);
      updateBtn.classList = "btn btn-dark";

      const deleteBtn = document.createElement("button");
      const deleteText = document.createTextNode("Sil");
      deleteBtn.appendChild(deleteText);
      deleteBtn.classList = "btn btn-danger ms-2 px-4";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const cardBtn = document.createElement("div");
      cardBtn.className = "card-btns";

      const card = document.createElement("div");
      card.className =
        "card d-flex col-12 col-md-5 col-lg-4  align-items-center mx-auto p-2 bg-secondary   text-white";

      cards.appendChild(card);

      card.appendChild(filmImage);
      card.appendChild(cardBody);
      card.appendChild(cardBtn);

      cardBody.appendChild(filmText);
      cardBody.appendChild(directorText);
      cardBody.appendChild(genreText);
      cardBody.appendChild(yearText);

      cardBtn.appendChild(updateBtn);
      cardBtn.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", () => {
        this.deleteFilm(index);
      });

      updateBtn.addEventListener("click", () => {
        this.updateFilm(index);
      });
    });
  },
  deleteFilm: function (index) {
    films.splice(index, 1);
    localStorage.setItem("films", JSON.stringify(films));
    this.showFilms();
  },
  updateFilm: function (index) {
    UIConstructor.call(this);
    this.filmName.value = films[index].name;
    this.directorName.value = films[index].director;
    this.year.value = films[index].year;
    this.genres.value = films[index].genres;
    this.filmUrl.value = films[index].filmUrl;
    this.submitBtn.classList.add("d-none");
    this.editBtn.classList.add("d-block");
    this.editBtn.classList.remove("d-none");
    this.editedIndex = index;
  },
  editFilm: function () {
    UIConstructor.call(this);
    const filmText = this.filmName.value;
    const directorText = this.directorName.value;
    const yearText = this.year.value;
    const options = this.genres.value;
    const urlText = this.filmUrl.value;
    const updatedFilm = {
      name: filmText,
      director: directorText,
      year: yearText,
      genres: options,
      filmUrl: urlText,
    };

    films[this.editedIndex] = updatedFilm;

    localStorage.setItem("films", JSON.stringify(films));
    this.showFilms();
    this.submitBtn.classList.add("d-block");
    this.submitBtn.classList.remove("d-none");
    this.editBtn.classList.add("d-none");
    this.editBtn.classList.remove("d-block");
    this.resetInputs();
  },
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (submitBtn.classList.contains("d-none")) {
    UIConstructor.prototype.editFilm();
  } else {
    UIConstructor.prototype.addFilms();
  }
});

let films = [];

if (localStorage.getItem("films")) {
  films = JSON.parse(localStorage.getItem("films"));
  UIConstructor.prototype.showFilms();
}

// function showFilms() {
//   cards.innerHTML = "";

//   films.forEach((film, index) => {
//     const filmImage = document.createElement("img");
//     filmImage.classList = "card-img-top";
//     filmImage.src = film.url;

//     const filmText = document.createElement("h5");
//     filmText.textContent = film.name;

//     const directorText = document.createElement("p");
//     directorText.textContent = film.director;

//     const genreText = document.createElement("span");
//     genreText.textContent = film.genres;
//     genreText.classList = "me-3";

//     const yearText = document.createElement("span");
//     yearText.textContent = film.year;

//     const updateBtn = document.createElement("button");
//     const updateText = document.createTextNode("Güncelle");
//     updateBtn.appendChild(updateText);
//     updateBtn.classList = "btn btn-dark";

//     const deleteBtn = document.createElement("button");
//     const deleteText = document.createTextNode("Sil");
//     deleteBtn.appendChild(deleteText);
//     deleteBtn.classList = "btn btn-danger ms-2 px-4";

//     const cardBody = document.createElement("div");
//     cardBody.className = "card-body";

//     const cardBtn = document.createElement("div");
//     cardBtn.className = "card-btns";

//     const card = document.createElement("div");
//     card.className =
//       "card d-flex col-12 col-md-5 col-lg-4  align-items-center mx-auto p-2 bg-secondary   text-white";

//     cards.appendChild(card);

//     card.appendChild(filmImage);
//     card.appendChild(cardBody);
//     card.appendChild(cardBtn);

//     cardBody.appendChild(filmText);
//     cardBody.appendChild(directorText);
//     cardBody.appendChild(genreText);
//     cardBody.appendChild(yearText);

//     cardBtn.appendChild(updateBtn);
//     cardBtn.appendChild(deleteBtn);

//     deleteBtn.addEventListener("click", () => {
//       deleteFilm(index);
//     });

//     updateBtn.addEventListener("click", () => {
//       updateFilm(index);
//     });
//   });
// }

// function deleteFilm(index) {
//   films.splice(index, 1);
//   localStorage.setItem("films", JSON.stringify(films));
//   showFilms();
// }
// function updateFilm(index) {
//   filmName.value = films[index].name;
//   directorName.value = films[index].director;
//   year.value = films[index].year;
//   genres.value = films[index].genres;
//   filmUrl.value = films[index].url;
//   submitBtn.classList.add("d-none");
//   editBtn.classList.add("d-block");
//   editBtn.classList.remove("d-none");
//   editedIndex = index;
// }

// function editFilm() {
//   const filmText = filmName.value;
//   const directorText = directorName.value;
//   const yearText = year.value;
//   const options = genres.value;
//   const urlText = filmUrl.value;
//   const updatedFilm = {
//     name: filmText,
//     director: directorText,
//     year: yearText,
//     genres: options,
//     url: urlText,
//   };

//   films[editedIndex] = updatedFilm;

//   localStorage.setItem("films", JSON.stringify(films));
//   showFilms();
//   submitBtn.classList.add("d-block");
//   submitBtn.classList.remove("d-none");
//   editBtn.classList.add("d-none");
//   editBtn.classList.remove("d-block");
//   resetInputs();
// }
