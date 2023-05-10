function Movies (id, url, name, type, date, director, summary) {
  this.id = id;
  this.url = url;
  this.name = name;
  this.type = type;
  this.date = date;
  this.director = director;
  this.summary = summary;
}

Movies.prototype.addMovie = function(e) {
  const id = Date.now();
  const url = movieImageUrl.value.trim();
  const name = movieName.value.trim();
  const type = movieType.value.trim();
  const date = movieDate.value.trim();
  const director = movieDirector.value.trim();
  const summary = movieSummary.value.trim();
  if(url === '' || name === '' || type === '' || date === '' || director === '' || summary === '') {
    ui.alertMessage('Lütfen Tüm Alanları Eksiksiz Doldurunuz!!!');
    ui.clearForm();
  }
  else {
    const uiMovie = new Movies(id, url, name, type, date, director, summary);
    ui.createMovieCard(uiMovie);

    ui.clearForm();
  }
  e.preventDefault();
}

Movies.prototype.deleteMovie = function(e) {
  if(e.target.className === 'fa-solid fa-trash fa-lg') {
    const deleteMovie = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    if(confirm('Bu filmi silmek istediğinize emin misiniz?')){
      deleteMovie.remove();
      storage.deleteMovieFromLocalStorage(deleteMovie.id);
    }
  }
  e.preventDefault();
}

Movies.prototype.editMovie = function(e) {
  if(e.target.className === 'fa-solid fa-pen-to-square fa-lg') {
    const editMovie = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    const editMovieId = editMovie.id;

  }

  e.preventDefault();
}