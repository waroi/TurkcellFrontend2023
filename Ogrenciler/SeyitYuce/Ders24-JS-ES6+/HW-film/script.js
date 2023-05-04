const filmName = document.getElementById("filmName");
const directorName = document.getElementById("director");
const year = document.getElementById("year");
const genres = document.getElementById("genres");
const filmUrl = document.getElementById("url");
const form = document.getElementById("form");
const cards = document.getElementById("cards");
const submitBtn = document.getElementById("submitBtn");
const editBtn = document.getElementById("editBtn");

let editedIndex = 0;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const resetInputs = () => {
  filmName.value = "";
  directorName.value = "";
  year.value = "";
  genres.value = "";
  filmUrl.value = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (submitBtn.classList.contains("d-none")) {
    editFilm();
  } else {
    addFilms();
  }
});

let films = [];

if (localStorage.getItem("films")) {
  films = JSON.parse(localStorage.getItem("films"));
  showFilms();
}

function addFilms() {
  const filmText = capitalizeFirstLetter(filmName.value);
  const directorText = capitalizeFirstLetter(directorName.value);
  const yearText = year.value;
  const options = capitalizeFirstLetter(genres.value);
  const urlText = filmUrl.value;

  const film = {
    name: filmText,
    director: directorText,
    year: yearText,
    genres: options,
    url: urlText,
  };

  films.push(film);

  localStorage.setItem("films", JSON.stringify(films));
  showFilms();
  resetInputs();
}

function showFilms() {
  cards.innerHTML = "";

  films.forEach((film, index) => {
    const filmImage = document.createElement("img");
    filmImage.classList = "card-img-top";
    filmImage.src = film.url;

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
    updateBtn.classList = "btn btn-primary";

    const deleteBtn = document.createElement("button");
    const deleteText = document.createTextNode("Sil");
    deleteBtn.appendChild(deleteText);
    deleteBtn.classList = "btn btn-primary ms-2 px-4";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardBtn = document.createElement("div");
    cardBtn.className = "card-btns";

    const card = document.createElement("div");
    card.className =
      "card d-flex col-12 col-md-5 col-lg-4  align-items-center mx-auto p-2 bg-danger text-white";

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
      deleteFilm(index);
    });

    updateBtn.addEventListener("click", () => {
      updateFilm(index);
    });
  });
}

function deleteFilm(index) {
  films.splice(index, 1);
  localStorage.setItem("films", JSON.stringify(films));
  showFilms();
}
function updateFilm(index) {
  filmName.value = films[index].name;
  directorName.value = films[index].director;
  year.value = films[index].year;
  genres.value = films[index].genres;
  filmUrl.value = films[index].url;
  submitBtn.classList.add("d-none");
  editBtn.classList.add("d-block");
  editBtn.classList.remove("d-none");
  editedIndex = index;
}

function editFilm() {
  const filmText = filmName.value;
  const directorText = directorName.value;
  const yearText = year.value;
  const options = genres.value;
  const urlText = filmUrl.value;
  const updatedFilm = {
    name: filmText,
    director: directorText,
    year: yearText,
    genres: options,
    url: urlText,
  };

  films[editedIndex] = updatedFilm;

  localStorage.setItem("films", JSON.stringify(films));
  showFilms();
  submitBtn.classList.add("d-block");
  submitBtn.classList.remove("d-none");
  editBtn.classList.add("d-none");
  editBtn.classList.remove("d-block");
  resetInputs();
}
