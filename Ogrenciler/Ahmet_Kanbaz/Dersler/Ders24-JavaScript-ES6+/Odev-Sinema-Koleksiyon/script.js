const movieUrl = document.getElementById('imgUrl');
const movieName = document.getElementById('filmAdi');
const movieType = document.getElementById('filmTur');
const movieYear = document.getElementById('filmTarih');
const movieDirector = document.getElementById('filmYonetmen');
const movieContext = document.getElementById('filmTanitim');
const movieList = document.getElementById('movieList');

const addMovie = document.getElementById('addMovieButton');

const modalBody = document.getElementById('modalBody');
const modalImg = document.getElementById('modalImg');
const modalimgUrl = document.getElementById('modalimgUrl');
const modalfilmAdi = document.getElementById('modalfilmAdi');
const modalfilmTur = document.getElementById('modalfilmTur');
const modalfilmTarih = document.getElementById('modalfilmTarih');
const modalfilmYonetmen = document.getElementById('modalfilmYonetmen');
const modalfilmTanitim = document.getElementById('modalfilmTanitim');
const saveChanges = document.getElementById('saveChanges');


const toastMessage = document.getElementById('liveToast');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastMessage);

let movies;

addEventListeners();
loadItems();

function addEventListeners() {
  addMovie.addEventListener('click', filmEkle);
  movieList.addEventListener('click', editMovie);
  movieList.addEventListener('click', deleteMovie);
  saveChanges.addEventListener('click', saveChangesFunc);
}

function filmEkle(e) {
  if(movieUrl.value === '' || movieName.value === '' || movieType.value === '' || movieYear.value === '' || movieDirector.value === '' || movieContext.value === '') {
    alert('Lütfen tüm alanları eksiksiz doldurunuz.');
  }
  else {
    addMovieCard(movieUrl.value, movieName.value, movieType.value, movieYear.value, movieDirector.value, movieContext.value);
    newLocalStorageAdd(movieUrl.value, movieName.value, movieType.value, movieYear.value, movieDirector.value, movieContext.value);
    movieUrl.value = '';
    movieName.value = '';
    movieType.value = '';
    movieYear.value = '';
    movieDirector.value = '';
    movieContext.value = '';
    toastBootstrap.show();
  }
  e.preventDefault();
}

function loadItems() {
  movies = getMoviesFromLocalStorage();
  movies.forEach(function (movie) {
    addMovieCard(movie.url, movie.name, movie.type, movie.date, movie.director, movie.context);
  });
}

function addMovieCard(url, name, type, date, director, context) {
  const movieCol = document.createElement('div');
  movieCol.className = 'col-lg-3 col-sm-6 my-3 text-center';
  const movieCard = document.createElement('div');
  movieCard.className = 'card shadow';
  const movieImg = document.createElement('img');
  movieImg.className = 'card-img-top img-fluid';
  movieImg.setAttribute('src', url);
  movieImg.setAttribute('alt', name);
  const movieBody = document.createElement('div');
  movieBody.className = 'card-body';
  const cardBodyItems = `<h5 class="card-title text-center text-truncate">${name}</h5>
  <h6 class="text-center text-success">${type}</h6>
  <p class="card-text text-truncate">${context}</p>
  <h6 class="text-end">${date}</h6>
  <h6 class="text-end text-secondary">${director}</h6>
  <div class="d-flex justify-content-around my-3">
    <a href="#" class="me-3" data-bs-toggle="modal" data-bs-target="#moviesModal"><span class="fa-solid fa-pen-to-square fa-lg"></span></a>
    <a href="#"><span class="fa-solid fa-trash fa-lg"></span></a>
  </div>`;
  movieBody.innerHTML = cardBodyItems;
  movieCard.appendChild(movieImg);
  movieCard.appendChild(movieBody);
  movieCol.appendChild(movieCard);
  movieList.appendChild(movieCol);
}

function newLocalStorageAdd(url, name, type, date, director, context) {
  movies = getMoviesFromLocalStorage();
  movies.push({
    url: url,
    name: name,
    type: type,
    date: date,
    director: director,
    context: context
  });
  localStorage.setItem('movies', JSON.stringify(movies));
}

function getMoviesFromLocalStorage() {
  let movies;
  if(localStorage.getItem('movies') === null) {
    movies = [];
  }
  else {
    movies = JSON.parse(localStorage.getItem('movies'));
  }
  return movies;
}

function editMovie(e) {
  if(e.target.className === 'fa-solid fa-pen-to-square fa-lg') {
    const movie = e.target.parentElement.parentElement.parentElement.parentElement;
    const movieImgUrl = movie.children[0].getAttribute('src');
    movies = getMoviesFromLocalStorage();
    updateMovie(movies, movieImgUrl);
  }
  e.preventDefault();
}

function updateMovie(movies, movieImgUrl) {
  movies.forEach(function (movie) {
    if(movie.url === movieImgUrl) {
      modalImg.setAttribute('src', movie.url);
      modalimgUrl.value = movie.url;
      modalfilmAdi.value = movie.name;
      modalfilmTur.value = movie.type;
      modalfilmTarih.value = movie.date;
      modalfilmYonetmen.value = movie.director;
      modalfilmTanitim.value = movie.context;
    }
  });
}

function saveChangesFunc(e) {
  movies = getMoviesFromLocalStorage();
  movies.forEach(function (movie) {
    if(movie.url === modalimgUrl.value) {
      movie.url = modalimgUrl.value;
      movie.name = modalfilmAdi.value;
      movie.type = modalfilmTur.value;
      movie.date = modalfilmTarih.value;
      movie.director = modalfilmYonetmen.value;
      movie.context = modalfilmTanitim.value;
    }
  });
  localStorage.setItem('movies', JSON.stringify(movies));
  location.reload();
  e.preventDefault();
}

function deleteMovie(e) {
  if(e.target.className === 'fa-solid fa-trash fa-lg') {
    const movie = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    if(confirm('Bu filmi silmek istediğinize emin misiniz?')) {
      movie.remove();
      deleteMovieFromLocalStorage(movie);
    }
  }
  e.preventDefault();
}

function deleteMovieFromLocalStorage(movie) {
  movies = getMoviesFromLocalStorage();
  movies.forEach(function (movieItem, index) {
    if(movieItem.url === movie.children[0].children[0].getAttribute('src')) {
      movies.splice(index, 1);
    }
  });
  localStorage.setItem('movies', JSON.stringify(movies));
}