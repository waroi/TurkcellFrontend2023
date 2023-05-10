function Movies(id, url, name, type, date, director, summary) {
  this.id = id;
  this.url = url;
  this.name = name;
  this.type = type;
  this.date = date;
  this.director = director;
  this.summary = summary;
}

//Add Movie to UI
Movies.prototype.addMovie = function (e) {
  const id = Date.now();
  const url = movieUrl.value.trim();//trim() metodu stringin başındaki ve sonundaki boşlukları siler.
  const name = movieName.value.trim();
  const type = movieType.value.trim();
  const date = movieDate.value.trim();
  const director = movieDirector.value.trim();
  const summary = movieSummary.value.trim();

  if(url === '' || name === '' || type === '' || date === '' || director === '' || summary === '') {
    ui.alertMessage('Lütfen tüm alanları doldurunuz.');
    ui.clearForm();
  }
  else {
    const uiMovie = new Movies(id, url, name, type, date, director, summary);
    ui.addMovie(uiMovie);
    storage.setMovie2LocalStorage(uiMovie);
    
    ui.clearForm();
  }
  
  e.preventDefault();
}

Movies.prototype.deleteMovie = function (e) {
  if(e.target.className === 'fa-solid fa-trash fa-lg') {
    const movie = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    if(confirm('Bu filmi silmek istediğinize emin misiniz?')) {
      movie.remove();
      storage.deleteMovieFromLocalStorage(movie.id);
    }
  }
  e.preventDefault();
}

Movies.prototype.editMovie = function (e) {
  if(e.target.className === 'fa-solid fa-pen-to-square fa-lg') {
    const movie = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    const movieChangeId = movie.id;
    const movies = storage.getMoviesFromLocalStorage();
    for(let i = 0; i < movies.length; i++) {
      if(movies[i].id == movieChangeId) {
        modalImage.setAttribute('src', movies[i].url);
        modalImage.id = movies[i].id;
        modalImageUrl.value = movies[i].url;
        modalMovieName.value = movies[i].name;
        modalMovieType.value = movies[i].type;
        modalMovieDate.value = movies[i].date;
        modalMovieDirector.value = movies[i].director;
        modalMovieSummary.value = movies[i].summary;
      }
    }
  }
  e.preventDefault();
}


Movies.prototype.saveEditMovie = function (e) {
  const movies = storage.getMoviesFromLocalStorage();
  const movieChangeId = modalImage.id;
  movies.forEach(function (movie) {
    if(movie.id == movieChangeId) {
      movie.url = modalimgUrl.value;
      movie.name = modalfilmAdi.value;
      movie.type = modalfilmTur.value;
      movie.date = modalfilmTarih.value;
      movie.director = modalfilmYonetmen.value;
      movie.summary = modalfilmOzet.value;
    }
  });
  localStorage.setItem('movies', JSON.stringify(movies));
  location.reload();
  e.preventDefault();
}