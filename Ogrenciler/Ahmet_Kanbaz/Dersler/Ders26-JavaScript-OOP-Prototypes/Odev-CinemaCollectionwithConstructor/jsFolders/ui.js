function UI() {}

UI.prototype.alertMessage = function(message) {
  alert(message);
}

UI.prototype.clearForm = function() {
  movieImageUrl.value = '';
  movieName.value = '';
  movieType.value = '';
  movieDate.value = '';
  movieDirector.value = '';
  movieSummary.value = '';
}

UI.prototype.createMovieCard = function(movie) {
  const movieCol = document.createElement('div');
  movieCol.id = movie.id;
  movieCol.className = 'col-lg-3 col-sm-6 my-3 text-center';
  const movieCard = document.createElement('div');
  movieCard.className = 'card shadow';
  const movieImg = document.createElement('img');
  movieImg.className = 'card-img-top img-fluid';
  movieImg.setAttribute('src', movie.url);
  movieImg.setAttribute('alt', movie.name);
  const movieBody = document.createElement('div');
  movieBody.className = 'card-body';
  const cardBodyItems = `<h5 class="card-title text-center text-truncate">${movie.name}</h5>
  <h6 class="text-center text-success">${movie.type}</h6>
  <p class="card-text text-truncate">${movie.summary}</p>
  <h6 class="text-end">${movie.date}</h6>
  <h6 class="text-end text-secondary">${movie.director}</h6>
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