class Film {

  id;
  title;
  year;
  director;
  genre;
  rating;
  image;

  constructor(title, year, director, genre, rating, image) {
    this.id = this.checkandgetID();
    this.title = title;
    this.year = year;
    this.director = director;
    this.genre = genre;
    this.rating = rating;
    this.image = image;
  }

  checkandgetID() {
    let id;
    if (localStorage.getItem("film_id") === null) {
      localStorage.setItem("film_id", 0);
      id = localStorage.getItem("film_id");
    } else {
      id = parseInt(localStorage.getItem("film_id"));
      localStorage.setItem("film_id", id + 1);
    }
    return id;
  }

  addFilmToLS(film) {
    let films = this.getFilmsFromLS();
    films.push(film);
    localStorage.setItem("films", JSON.stringify(films));
  }

  getFilmsFromLS() {
    let films;
    if (localStorage.getItem("films") === null) {
      films = [];
    } else {
      films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
  }

  getFilmFromId(id) {
    let films = this.getFilmsFromLS();
    let film = null;
    films.forEach((item) => {
      if (item.id == id) {
        film = item;
      }
    });
    return film;
  }

  updateFilm(film) {
    console
    let films = this.getFilmsFromLS();
    films.forEach((item, index) => {
      if (item.id == film.id) {
        films[index] = film;
      }
    });
    localStorage.setItem("films", JSON.stringify(films));
  }

}