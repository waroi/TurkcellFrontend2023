const movieNameInp = document.querySelector("#movieNameInput");
const movieDirectorInp = document.querySelector("#movieDirectorInput");
const movieYearInp = document.querySelector("#movieYearInput");
const movieGenreInp = document.querySelector("#movieGenreInput");
const movieBannerInp = document.querySelector("#movieBannerInput");
const movieCollectionRow = document.querySelector(".movie-collection");
const addMovieButton = document.querySelector("#add-movie");
const editMovieButton = document.querySelector("#edit-movie");

const movies = localStorage.getItem("movieStorage")
  ? JSON.parse(localStorage.getItem("movieStorage"))
  : [];

addMovieButton.addEventListener("click", (e) => {
  // e.preventDefault();
  addMovie(
    movieNameInp.value,
    movieDirectorInp.value,
    movieYearInp.value,
    movieGenreInp.value,
    movieBannerInp.value
  );
  // resetInputs();
});

updateDisplay();

// Diziye movie ekleme
function addMovie(
  movieName,
  movieDirector,
  movieYear,
  movieGenre,
  movieBannerURL
) {
  if (
    movieNameInp.value === "" ||
    movieDirectorInp.value === "" ||
    movieYearInp.value === "" ||
    movieGenreInp.value === "" ||
    movieBannerInp.value === ""
  ) {
    alert("Tüm değerleri eksiksiz giriniz");
  } else {
    movies.push({
      movieName: movieName,
      movieDirector: movieDirector,
      movieYear: movieYear,
      movieGenre: movieGenre,
      movieBannerURL: movieBannerURL,
    });
    localStorage.setItem("movieStorage", JSON.stringify(movies));
    updateDisplay();
  }

  // resetInputs();
}

// Diziyi gösterm
function updateDisplay() {
  movieCollectionRow.innerHTML = "";
  movies.map((movie, i) => {
    let movieDisplay = document.createElement("div");
    movieDisplay.classList.add("col-md-4");
    movieDisplay.innerHTML = createCard(movie);
    movieCollectionRow.appendChild(movieDisplay);
    movieDisplay
      .querySelector(".movie-delete")
      .addEventListener("click", () => deleteMovie(i));
    movieDisplay
      .querySelector(".movie-edit")
      .addEventListener("click", () => editMovie(i));
  });
}

function createCard(movie) {
  return `<div class="card h-100">
                    <img
                      src=${movie.movieBannerURL}
                      class="card-img-top movie-banner"
                      alt="..."
                    />
                    <div class="card-body">
                      <h2 class="card-title movie-title">${movie.movieName}</h2>
                      <h4 class="card-title genre-year">${movie.movieGenre} - ${movie.movieYear}</h4>
                      <h6 class="card-title director">${movie.movieDirector}</h6>
                      <button class="btn btn-danger movie-delete">Delete</button>
                      <button class="btn btn-warning movie-edit">Edit</button>
                      </div>
                      </div>
                      `;
}

// Film Silme
function deleteMovie(movieIndex) {
  movies.splice(movieIndex, 1);
  localStorage.setItem("movieStorage", JSON.stringify(movies));
  updateDisplay();
}

// Film Düzenleme

function editMovie(movieIndex) {
  editMovieButton.style.display = "block";
  addMovieButton.style.display = "none";
  movieNameInp.value = movies[movieIndex].movieName;
  movieDirectorInp.value = movies[movieIndex].movieDirector;
  movieYearInp.value = movies[movieIndex].movieYear;
  movieGenreInp.value = movies[movieIndex].movieGenre;
  movieBannerInp.value = movies[movieIndex].movieBannerURL;
  editMovieButton.addEventListener("click", (e) => {
    // e.preventDefault();
    submitEdit(movieIndex);
  });
}

function submitEdit(movieIndex) {
  if (
    movieNameInp.value === "" ||
    movieDirectorInp.value === "" ||
    movieYearInp.value === "" ||
    movieGenreInp.value === "" ||
    movieBannerInp.value === ""
  ) {
    alert("Tüm değerleri eksiksiz giriniz");
  } else {
    movies[movieIndex].movieName = movieNameInp.value;
    movies[movieIndex].movieDirector = movieDirectorInp.value;
    movies[movieIndex].movieYear = movieYearInp.value;
    movies[movieIndex].movieGenre = movieGenreInp.value;
    movies[movieIndex].movieBannerURL = movieBannerInp.value;
    localStorage.setItem("movieStorage", JSON.stringify(movies));
    updateDisplay();
    editMovieButton.style.display = "none";
    addMovieButton.style.display = "block";
    // resetInputs();
  }
}

function resetInputs() {
  movieNameInp.value = "";
  movieDirectorInp.value = "";
  movieYearInp.value = "";
  movieGenreInp.value = "";
  movieBannerInp.value = "";
}
