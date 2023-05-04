const movieUrl = document.getElementById('imgUrl');
const movieName = document.getElementById('filmAdi');
const movieType = document.getElementById('filmTur');
const movieYear = document.getElementById('filmTarih');
const movieDirector = document.getElementById('filmYonetmen');
const movieContext = document.getElementById('filmTanitim');
const movieList = document.getElementById('movieList');

const addMovie = document.getElementById('addMovieButton');

let movies;

addEventListeners();
loadItems();

function addEventListeners() {
  addMovie.addEventListener('click', filmEkle);
  movieList.addEventListener('click', editMovie);
}

function filmEkle(e) {

  // if(movieUrl.value === '' || movieName.value === '' || movieType.value === '' || movieYear.value === '' || movieDirector.value === '' || movieContext.value === '') {
  //   alert('Lütfen tüm alanları eksiksiz doldurunuz.');
  // }
  // else {
    addMovieCard(movieUrl.value, movieName.value, movieType.value, movieYear.value, movieDirector.value, movieContext.value);
    newLocalStorageAdd(movieUrl.value, movieName.value, movieType.value, movieYear.value, movieDirector.value, movieContext.value);
  // }
  e.preventDefault();
}

function loadItems() {
  movies = getMoviesFromLocalStorage();
  movies.forEach(function (movie) {
    addMovieCard(movie.url, movie.name, movie.type, movie.date, movie.director, movie.context);
  })
}

function addMovieCard(url, name, type, date, director, context) {
  const movieCol = document.createElement('div');
  movieCol.className = 'col-lg-3';
  const movieCard = document.createElement('div');
  movieCard.className = 'card shadow';
  const movieImg = document.createElement('img');
  movieImg.className = 'card-img-top img-fluid';
  movieImg.setAttribute('src', url);
  movieImg.setAttribute('alt', name);
  const movieBody = document.createElement('div');
  movieBody.className = 'card-body';
  const cardBodyItems = `<h5 class="card-title text-center">${name}</h5>
  <h6 class="text-center text-success">${type}</h6>
  <p class="card-text">${context}</p>
  <h6 class="text-end">${date}</h6>
  <h6 class="text-end">${director}</h6>
  <div class="d-flex justify-content-around my-2">
    <a href="#" class="me-3" data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="fa-solid fa-pen-to-square fa-xl"></span></a>
    <a href="#"><span class="fa-solid fa-trash fa-xl"></span></a>
  </div>`;
  movieBody.innerHTML = cardBodyItems;
  movieCard.appendChild(movieImg);
  movieCard.appendChild(movieBody);
  movieCol.appendChild(movieCard);
  movieList.appendChild(movieCol);
  movieUrl.value, movieName.value, movieType.value, movieYear.value, movieDirector.value, movieContext.value = "";
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
  if(e.target.className === 'fa-solid fa-pen-to-square fa-xl') {
    updateMovie(movieUrl.value, movieName.value, movieType.value, movieYear.value, movieDirector.value, movieContext.value);
  }
}

function updateMovie(url, name, type, date, director, context) {
  movies = getMoviesFromLocalStorage();
  movies.forEach(function (movie) {
    if(movie.url === url) {
      movie.url = url;
      movie.name = name;
      movie.type = type;
      movie.date = date;
      movie.director = director;
      movie.context = context;
    }
    
  });
  // const movieForm = document.createElement('form');
  //   movieForm.innerHTML = `<div class="my-2">
  //   <label for="imgUrl" class="form-label">Filmin Afiş Url'i</label>
  //   <input type="text" class="form-control" id="imgUrl" placeholder="https://..." value = ${url}>
  //   </div>
  //   <div class="mb-2">
  //     <label for="filmAdi" class="form-label">Filmin Adı</label>
  //     <input type="text" class="form-control" id="filmAdi" placeholder="" value= ${name}>
  //   </div>
  //   <div class="mb-2">
  //     <label for="filmTur" class="form-label">Filmin Türü</label>
  //     <input type="text" class="form-control" id="filmTur" placeholder="Korku, Aksiyon, Eğlenceli vb..." value= ${type}>
  //   </div>
  //   <div class="mb-2">
  //     <label for="filmTarih" class="form-label">Filmin Çıkış Tarihi</label>
  //     <input type="date" class="form-control" id="filmTarih" value= ${date}>
  //   </div>
  //   <div class="mb-2">
  //     <label for="filmYonetmen" class="form-label">Filmin Yönetmeni</label>
  //     <input type="text" class="form-control" id="filmYonetmen" placeholder="" value= ${director}>
  //   </div>
  //   <div class="mb-3">
  //     <label for="filmTanitim" class="form-label">Filmin Özeti</label>
  //     <textarea class="form-control" id="filmTanitim" rows="3" value= ${context}></textarea>
  //   </div>`;
  //   const modalBody = document.querySelector('.modal-body');
  //   modalBody.appendChild(movieForm);
}