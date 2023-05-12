class Storage {
  static addMovieStorage(newMovie) {
    let movies = this.getMoviesFromStorage();
    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  static getMoviesFromStorage() {
    let movies;
    if (!localStorage.getItem("movies")) {
      movies = [];
    } else {
      movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
  }
  static clearAllMoviesFromStorage() {
    localStorage.removeItem("movies");
  }
  // static editMovieStorage(oldValue, newValue) {
  //   let movies = this.getMoviesFromStorage();
  //   movies.forEach(function (mov) {
  //     for (const property in mov) {
  //       oldValue.forEach((old, i) => {
  //         if (mov[property] == old) {
  //           mov[property] = newValue[i];
  //         }
  //       });
  //     }
  //   });
  //   localStorage.setItem("movies", JSON.stringify(movies));
  // }
}
