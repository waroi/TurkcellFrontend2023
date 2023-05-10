function Film(title, director, year, posterUrl) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.posterUrl = posterUrl;
}

Film.prototype.createCard = function() {
    const card = document.createElement('div');
    card.classList.add('film-card', 'card', 'mb-3',"col-4");
    card.innerHTML = `
        <img src="${this.posterUrl}" class="card-img-top" alt="${this.title}">
        <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">Yapımcı: ${this.director}</p>
            <p class="card-text">Yıl: ${this.year}</p>
            <button class="btn btn-primary edit-button">Düzenle</button>
            <button class="btn btn-danger delete-button">Sil</button>
        </div>
    `;
    return card;
}

function saveFilmToLocalStorage(film) {
    let films = JSON.parse(localStorage.getItem('films')) || [];
    films.push(film);
    localStorage.setItem('films', JSON.stringify(films));
}

function deleteFilmFromLocalStorage(title) {
    let films = JSON.parse(localStorage.getItem('films')) || [];
    films = films.filter(film => film.title !== title);
    localStorage.setItem('films', JSON.stringify(films));
}

function displayFilmsFromLocalStorage() {
    let films = JSON.parse(localStorage.getItem('films')) || [];
    films.forEach(filmData => {
        const film = new Film(filmData.title, filmData.director, filmData.year, filmData.posterUrl);
        const filmCard = film.createCard();
        filmCard.querySelector('.edit-button').addEventListener('click', function() {
            // Düzenleme işlemleri burada yapılabilir
            });
            filmCard.querySelector('.delete-button').addEventListener('click', function() {
                filmCard.remove();
                deleteFilmFromLocalStorage(film.title);
            });
        
            document.getElementById('film-container').appendChild(filmCard);
        });
        }
        
        document.getElementById('film-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('film-title').value;
        const director = document.getElementById('film-director').value;
        const year = document.getElementById('film-year').value;
        const posterUrl = document.getElementById('film-poster-url').value;

        const film = new Film(title, director, year, posterUrl);
        const filmCard = film.createCard();

        filmCard.querySelector('.edit-button').addEventListener('click', function() {
    // Düzenleme işlemleri burada yapılabilir
});

filmCard.querySelector('.delete-button').addEventListener('click', function() {
    filmCard.remove();
    deleteFilmFromLocalStorage(film.title);
});

document.getElementById('film-container').appendChild(filmCard);

// Filmi Local Storage'a kaydet
saveFilmToLocalStorage(film);

// Inputları temizle
document.getElementById('film-title').value = '';
document.getElementById('film-director').value = '';
document.getElementById('film-year').value = '';
document.getElementById('film-poster-url').value = '';
});

// Local Storage'daki filmleri ekrana yazdır
displayFilmsFromLocalStorage();
