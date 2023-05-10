// UI constructor, Film Constructor ve Storage constructor olacak.
const director = document.getElementById("director");
const filmName = document.getElementById("filmName");
const year = document.getElementById("year");
const genres = document.getElementById("genres");
const filmUrl = document.getElementById("url");
const form = document.getElementById("form");
const editBtn = document.getElementById("editBtn");
const submitBtn = document.getElementById("submitBtn");
const cards = document.getElementById("cards");

console.log(director);

class FilmConstructor {
  constructor(name, director, year, genres, filmUrl) {
    this.name = name;
    this.director = director;
    this.year = year;
    this.genres = genres;
    this.filmUrl = filmUrl;
  }
}

class UIConstructor {
  constructor(
    filmName,
    director,
    year,
    genres,
    filmUrl,
    cards,
    form,
    submitBtn,
    editBtn,
    editedIndex
  ) {
    this.filmName = filmName;
    this.directorName = director;
    this.year = year;
    this.genres = genres;
    this.filmUrl = filmUrl;
    this.form = form;
    this.cards = cards;
    this.submitBtn = submitBtn;
    this.editBtn = editBtn;
    this.editedIndex = editedIndex;
  }
  static capitalizeFirstLetter() {
    // return this.string.toUpperCase() + this.string.slice(1);
  }
  static resetInputs() {
    filmName.value = "";
    director.value = "";
    year.value = "";
    genres.value = "";
    filmUrl.value = "";
  }
  static addFilms(name, director, year, genres, filmUrl) {
    this.filmName = name.value;
    this.yearName = year.value;
    this.genresName = genres.value;
    this.filmUrl = filmUrl.value;
    this.directorName = director.value;
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
  }
  static showFilms() {
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
        UIConstructor.deleteFilm(index);
      });

      updateBtn.addEventListener("click", () => {
        UIConstructor.updateFilm(index);
      });
    });
  }
  static deleteFilm(index) {
    films.splice(index, 1);
    localStorage.setItem("films", JSON.stringify(films));
    UIConstructor.showFilms();
  }
  static updateFilm(index) {
    filmName.value = films[index].name;
    director.value = films[index].director;
    year.value = films[index].year;
    genres.value = films[index].genres;
    filmUrl.value = films[index].filmUrl;
    submitBtn.classList.add("d-none");
    editBtn.classList.add("d-block");
    editBtn.classList.remove("d-none");
    editedIndex = index;
  }
  static editFilm() {
    const filmText = filmName.value;
    const directorText = director.value;
    const yearText = year.value;
    const options = genres.value;
    const urlText = filmUrl.value;
    const updatedFilm = {
      name: filmText,
      director: directorText,
      year: yearText,
      genres: options,
      filmUrl: urlText,
    };

    films[editedIndex] = updatedFilm;

    localStorage.setItem("films", JSON.stringify(films));
    UIConstructor.showFilms();
    submitBtn.classList.add("d-block");
    submitBtn.classList.remove("d-none");
    editBtn.classList.add("d-none");
    editBtn.classList.remove("d-block");
    UIConstructor.resetInputs();
  }
}

let editedIndex = 0;

const ui = new UIConstructor(
  filmName,
  director,
  year,
  genres,
  filmUrl,
  cards,
  form,
  submitBtn,
  editBtn,
  editedIndex
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (submitBtn.classList.contains("d-none")) {
    UIConstructor.editFilm();
  } else {
    UIConstructor.addFilms(filmName, director, year, genres, filmUrl);
  }
});

let films = [];

if (localStorage.getItem("films")) {
  films = JSON.parse(localStorage.getItem("films"));
  UIConstructor.showFilms();
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
