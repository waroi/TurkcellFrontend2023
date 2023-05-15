function LocalStorage() {}

//Local Storage'da bulunan filmleri alma
LocalStorage.prototype.getMoviesFromLocalStorage = function() {
  let movies;
  if(localStorage.getItem('movies') === null) {
    movies = [];
  }
  else {
    movies = JSON.parse(localStorage.getItem('movies'));
  }
  return movies;
}

//Local Storage'a film ekleme
LocalStorage.prototype.setMovie2LocalStorage = function(movie) {
  let movies = storage.getMoviesFromLocalStorage();
  movies.push(movie);
  localStorage.setItem('movies', JSON.stringify(movies));
}

//Local Storage'da bulunan filmleri gösterme
LocalStorage.prototype.showMoviesFromLocalStorage = function() {
  let movies = storage.getMoviesFromLocalStorage();
  movies.forEach((movie) => {
    ui.addMovie(movie);
  })
}

//Local Storage'dan film silme
LocalStorage.prototype.deleteMovieFromLocalStorage = function(deleteMovieId) {
  let movies = storage.getMoviesFromLocalStorage();
  for(let i = 0; i < movies.length; i++) {
    if(movies[i].id == deleteMovieId) {
      movies.splice(i, 1);
    }
  }
  localStorage.setItem('movies', JSON.stringify(movies));
}