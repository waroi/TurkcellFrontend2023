function Movie(name, director, year, cover) {
    this.name = name;
    this.director = director;
    this.year = year;
    this.cover = cover;
  }
  
  Movie.prototype.createBox = function () {
    let cardWrap = document.createElement("div");
    cardWrap.className = "col-sm-6 col-md-4";
    let card = `<div class='card'>
      <div class='mx-auto' style='width:100%; height:300px; '>
            <img src='${this.cover}' class='card-img-top' alt='${this.cover}' style='width:100%; height:300px; '/></div>
      <div class='card-body'>
        <h5 class='card-title'>${this.name}</h5>
        <p class='card-text'> ${this.director} - ${this.year}</p>
          <div class='d-flex justify-content-center gap-3'>
            <button class='btn btn-success'>Edit</button>
            <button class='btn btn-danger'>Delete</button>
          </div>
        </div>
  </div>`;
    cardWrap.innerHTML = card;
    return cardWrap;
  };