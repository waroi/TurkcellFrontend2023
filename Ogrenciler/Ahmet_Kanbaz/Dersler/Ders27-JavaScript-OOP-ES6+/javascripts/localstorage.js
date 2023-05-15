class LocalStorage {
  static getMoviesFromLocalStorage = function() {
    let movies;
    if(localStorage.getItem('movies') === null) {
      movies = [];
    }
    else {
      movies = JSON.parse(localStorage.getItem('movies'));
    }
    return movies;
  }

  static setMovie2LocalStorage = function(movie) {
    let movies = LocalStorage.getMoviesFromLocalStorage();
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  static showMoviesFromLocalStorage = function() {
    let movies = LocalStorage.getMoviesFromLocalStorage();
    movies.forEach((movie) => {
      UI.addMovie(movie);
    });
  }

  static deleteMovieFromLocalStorage = function(deleteMovieId) {
    let movies = LocalStorage.getMoviesFromLocalStorage();
    for(let i = 0; i < movies.length; i++) {
      if(movies[i].id == deleteMovieId) {
        movies.splice(i, 1);
      }
    }
    localStorage.setItem('movies', JSON.stringify(movies));
  }
}