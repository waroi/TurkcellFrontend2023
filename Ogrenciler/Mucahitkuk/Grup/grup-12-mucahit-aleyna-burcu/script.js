const addBtn = document.querySelector("#add-movie");
const movieList = document.querySelector("#film-collection");
const movieName = document.querySelector("#movie-name-input");
const movieType = document.querySelector("#movie-type-input");
const movieDirector = document.querySelector("#movie-director-input");
const searchInput = document.querySelector("#search-input");
const movieUrl = document.querySelector("#movie-url-input");
const errorText = document.querySelector("#error-text");
const editButton = document.querySelector("#edit-movie");

addBtn.addEventListener("click", inputValidation);
searchInput.addEventListener("input", searchMovie);
editButton.addEventListener("click", editCard);

let list = document.getElementById("film-collection");

function addMovie() {
  const movies = {
    id: Date.now(),
    name: movieName.value.trim(),
    type: movieType.value.trim(),
    director: movieDirector.value.trim(),
    url: movieUrl.value.trim(),
  };
  renderMovies(movies);
  saveToLocalStorage(movies);
  resetInput();
  console.log(movies);
}


function resetInput() {
  movieName.value = "";
  movieDirector.value = "";
  movieType.value = "";
  movieUrl.value = "";
}

function inputValidation() {
  let regexTest = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i;
  if (
    movieName.value.trim() === "" ||
    movieDirector.value.trim() === "" ||
    movieType.value.trim() === "" ||
    !regexTest.test(movieUrl.value.trim())
  ) {
    errorText.textContent = "Lütfen tüm alanları doğru şekilde doldurunuz.";
    setTimeout(function () {
      errorText.textContent = "";
    }, 3000);
    return;
  }
  addMovie();
}

function saveToLocalStorage(movies) {
  let movieList = getMoviesFromLocalStorage();
  movieList.push(movies);
  localStorage.setItem("movieList", JSON.stringify(movieList));
  console.log(movieList);
}

function getMoviesFromLocalStorage() {
  let movieList = localStorage.getItem("movieList");
  return movieList ? JSON.parse(movieList) : [];
}

function renderMovies(movies) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("col-lg-4");
  movieCard.innerHTML = `
    <div class="card mt-3 movie-card">
      <img src="${movies.url}" class="card-img-top" alt="Hatalı Url">
      <div class="card-body">
        <h5 class="card-title fw-bold">${movies.name}</h5>
        <h6>Tür: ${movies.type}</h6>
        <p class="card-text">Yönetmen: ${movies.director}</p>
      </div>
      <div class="card-body d-flex justify-content-between p-2">
        <button class="btn btn-success w-50 edit-btn">Düzenle</button>
        <button style="width: 49%;" class="btn btn-danger delete-btn">Kaldır</button>
      </div>
    </div>
  `;
  const editBtn = movieCard.querySelector(".edit-btn");
  const deleteBtn = movieCard.querySelector(".delete-btn");
  editBtn.addEventListener("click", () => {
    movieName.value = movies.name;
    movieType.value = movies.type;
    movieDirector.value = movies.director;
    movieUrl.value = movies.url;
    editButton.classList.remove("d-none");
    editButton.style.display = "flex";
    addBtn.classList.add("d-none");
    currentId = movies.id;
  });
  deleteBtn.addEventListener("click", () => {
    movieCard.remove();
    let movieList = getMoviesFromLocalStorage();
    movieList = movieList.filter((movie) => movie.id !== movies.id);
    localStorage.setItem("movieList", JSON.stringify(movieList));
  });
  if (movieList) {
    movieList.appendChild(movieCard);
  }
}

function searchMovie(e) {
  const searchTerm = e.target.value.toLowerCase();
  const movieList = document.querySelectorAll(".card");
  console.log(movieList)
  Array.from(movieList).forEach((movie) => {
    const movieName = movie
      .querySelector(".card-title")
      .innerText.toLowerCase();
    if (movieName.includes(searchTerm)) {
      movie.style.display = "flex";
    } else {
      movie.style.display = "none";
    }
  });
}


function editCard() {
  const movieList = getMoviesFromLocalStorage();
  const id = currentId;
  let updateItem = movieList.find(item => item.id === id)
  let newData = {
    id: currentId,
    name: movieName.value.trim(),
    type: movieType.value.trim(),
    director: movieDirector.value.trim(),
    url: movieUrl.value.trim()
  }
  
  Object.assign(updateItem, newData)
  localStorage.setItem("movieList", JSON.stringify(movieList)); 
  addBtn.classList.remove("d-none");
  editButton.classList.add("d-none");
  resetInput();
  window.location.reload();
}

function loadMoviesFromLocalStorage() {
  const movieList = getMoviesFromLocalStorage();
  movieList.forEach((movies) => renderMovies(movies));
}

loadMoviesFromLocalStorage();
