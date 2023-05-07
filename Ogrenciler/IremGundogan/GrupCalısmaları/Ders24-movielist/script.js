const filmForm = document.getElementById("film-form");
const filmKoleksiyonu = document.getElementById("film-koleksiyonu");

filmForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const filmAdi = document.getElementById("filmAdi").value;
  const yonetmen = document.getElementById("yonetmen").value;
  const yil = document.getElementById("yil").value;
  const tur = document.getElementById("tur").value;
  const afis = document.getElementById("afis").value;

  const film = {
    filmAdi,
    yonetmen,
    yil,
    tur,
    afis,
  };

  filmEkle(film);
  filmForm.reset();
});

function filmEkle(film) {
  const filmId = Date.now();
  const filmKart = `
                <div class="col-md-4 mb-4" id="film ${filmId}">
                    <div class="card">
                        <img src="${film.afis}" class="card-img-top" alt="${film.filmAdi}">
                        <div class="card-body">
                            <h5 class="card-title">${film.filmAdi}</h5>
                            <p class="card-text">Yönetmen: ${film.yonetmen}</p>
                            <p class="card-text">Yıl: ${film.yil}</p>
                            <p class="card-text">Tür: ${film.tur}</p>
                            <button class="btn btn-primary" onclick="filmDuzenle('${filmId}')">Düzenle</button>
                            <button class="btn btn-danger" onclick="filmSil('${filmId}')">Sil</button>
                        </div>
                    </div>
                </div>
            `;

  filmKoleksiyonu.insertAdjacentHTML("beforeend", filmKart);
  localStorage.setItem(`film_${filmId}`, JSON.stringify(film));
}

function filmDuzenle(filmId) {
  const film = JSON.parse(localStorage.getItem(`film_${filmId}`));

  document.getElementById("filmAdi").value = film.filmAdi;
  document.getElementById("yonetmen").value = film.yonetmen;
  document.getElementById("yil").value = film.yil;
  document.getElementById("tur").value = film.tur;
  document.getElementById("afis").value = film.afis;

  filmSil(filmId);
}

function filmSil(filmId) {
  const filmKart = document.getElementById(`film_${filmId}`);
  filmKart.remove();
  localStorage.removeItem(`film_${filmId}`);
}

function koleksiyonuYukle() {
  const localStorageKeys = Object.keys(localStorage);

  for (const key of localStorageKeys) {
    if (key.startsWith("film_")) {
      const film = JSON.parse(localStorage.getItem(key));
      filmEkle(film);
    }
  }
}

koleksiyonuYukle();
