// Verileri tutacak dizi
let filmler = [];

// Form elemanlarını seç
const form = document.getElementById('movieForm');
const movieName = document.getElementById('movieName');
const director = document.getElementById('director');
const year = document.getElementById('year');
const type = document.getElementById('type');
const posterUrl = document.getElementById('posterUrl');

// Tablo ve kartları seç
const movieTable = document.getElementById('movieTable').getElementsByTagName('tbody')[0];
const filmKartlari = document.getElementById('movieCard');

// Verileri localStorage'den yükle
if (localStorage.getItem('filmler')) {
  filmler = JSON.parse(localStorage.getItem('filmler'));
  filmleriListele();
}

// Form gönderildiğinde çalışacak fonksiyon
function filmEkle(event) {
  event.preventDefault(); // Formun sayfayı yenilemesini engelle

  // Formdaki verileri al
  const yeniFilm = {
    movieName: movieName.value,
    director: director.value,
    year: year.value,
    type: type.value,
    posterUrl: posterUrl.value,
  };

  // Yeni filmi filmler dizisine ekle
  filmler.push(yeniFilm);

  // Filmleri localStorage'e kaydet
  localStorage.setItem('filmler', JSON.stringify(filmler));

  // Tabloyu güncelle
  filmleriListele();
  
  // Formu temizle
  form.reset();
  
}
function movieCards(){
    filmler = JSON.parse(localStorage.getItem('filmler'));
    let movies=document.getElementById("movieCard");
    filmler.forEach(film=>movies.innerHTML+=`<div class="card" style="width: 18rem;">
    <img src="${film.posterUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${film.movieName}</h5>
      <p class="card-text">${film.type}</p>
      <p class="card-text">${film.director}</p>
      <p class="card-text">${film.year}</p>
    </div>
  </div>`
  )
  

}

// Filmleri tabloya ekle
function filmleriListele() {
  // Tabloyu temizle
  movieTable.innerHTML = '';

  // Her bir film için bir satır oluştype
  filmler.forEach(function (film, index) {
    const tr = document.createElement('tr');
    

    // Tabloya hücreler ekle
    const tdmovieName = document.createElement('td');
    tdmovieName.textContent = film.movieName;
    tr.appendChild(tdmovieName);

    const tddirector = document.createElement('td');
    tddirector.textContent = film.director;
    tr.appendChild(tddirector);

    const tdyear = document.createElement('td');
    tdyear.textContent = film.year;
    tr.appendChild(tdyear);

    const tdtype = document.createElement('td');
    tdtype.textContent = film.type;
    tr.appendChild(tdtype);

    const tdAfiş = document.createElement('td');
    const posterUrlImg = document.createElement('img');
    posterUrlImg.src = film.posterUrl;
    posterUrlImg.alt = `${film.movieName} afişi`;
    tdAfiş.appendChild(posterUrlImg);
    tr.appendChild(tdAfiş);

    const tdIslemler = document.createElement('td');
    const silButton = document.createElement('button');
    silButton.className="btn btn-danger";
    silButton.setAttribute("style","margin:0 5px; padding-left:20px; padding-right:20px;")
    silButton.textContent = 'Sil';
    silButton.addEventListener('click', function () {
      filmSil(index);
    });
    tdIslemler.appendChild(silButton);

    const guncelleButton = document.createElement('button');
    guncelleButton.textContent = 'Güncelle';
    guncelleButton.className="btn btn-success";
    guncelleButton.addEventListener('click', function () {
      filmGuncelle(index);
    });
    tdIslemler.appendChild(guncelleButton);
    tr.appendChild(tdIslemler);

    // Satırı tabloya ekle
    movieTable.appendChild(tr);
    
});
}

// Bir filmi sil
function filmSil(index) {
// Filmi diziden sil
filmler.splice(index, 1); //splice dizinin belirli bir bölümünü silmek için.Burada 1 filmi siliyor.

// Filmleri localStorage'den sil
localStorage.setItem('filmler', JSON.stringify(filmler));

// Tabloyu güncelle
filmleriListele();
}

// Bir filmi güncelleme formuna yükle
function filmGuncelle(index) {
// Film bilgilerini form elemanlarına yükle
movieName.value = filmler[index].movieName;
director.value = filmler[index].director;
year.value = filmler[index].year;
type.value = filmler[index].type;
posterUrl.value = filmler[index].posterUrl;

// Eski filmi diziden sil
filmler.splice(index, 1);

// Filmleri localStorage'den sil
localStorage.setItem('filmler', JSON.stringify(filmler));

// Tabloyu güncelle

filmleriListele();
}
movieCards();
// Formu submit eventine bağla
form.addEventListener('submit', filmEkle);
