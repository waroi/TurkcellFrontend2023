import filmCard from './filmCardComponent.js';
import filterFn from './filterComponent.js';
let durum = {
 degisiklik: false,
 filterYil: null,
 degistirmekIcinTiklananFilm: null,
};
let filmler = JSON.parse(localStorage.getItem('filmler')) || [];
screen();

inputSearch.addEventListener('input', function (e) {
 e.preventDefault();
 screen();
});

filtreContainer.addEventListener('click', function (e) {
 e.preventDefault();
 if (e.target.id != 'filtreContainer') {
  durum.filterYil = e.target.innerText;
  screen();
 }
});

ekleButton.addEventListener('click', function (e) {
 e.preventDefault();
 if (
  filmResmi.value &&
  filmYili.value &&
  filmAdi.value &&
  filmTuru.value &&
  filmPuani.value &&
  filmAciklamasi.value
 ) {
  if (!filmResmi.value.includes('://')) {
   alert('Resim urlsini kontrol ediniz.');
   return;
  }
 } else {
  alert('Lütfen tüm alanları doldurunuz.');
  return;
 }
 filmler = [
  {
   id: Math.floor(Math.random() * 1_000_000_000),
   url: filmResmi.value,
   yil: filmYili.value,
   ad: filmAdi.value,
   tur: filmTuru.value,
   puan: filmPuani.value,
   aciklama: filmAciklamasi.value,
  },
  ...filmler,
 ];
 sifirla();
 screen();
});

filmlerContainer.addEventListener('click', function (e) {
 e.preventDefault();
 if (e.target.innerText == 'Değiştir') {
  degistir(e.target.parentElement.parentElement.id);
 }
 if (e.target.innerText == 'Silme') {
  filmler = filmler.filter((film) => {
   return film.id != e.target.parentElement.parentElement.id;
  });
 }
 screen();
});

function filmToggle() {
 durum.degisiklik = !durum.degisiklik;
}
degistirButton.addEventListener('click', function (e) {
 e.preventDefault();
 const film = durum.degistirmekIcinTiklananFilm;
 film.url = filmResmi.value;
 film.yil = filmYili.value;
 film.ad = filmAdi.value;
 film.tur = filmTuru.value;
 film.puan = filmPuani.value;
 film.aciklama = filmAciklamasi.value;
 degistirButton.classList.toggle('d-none');
 ekleButton.classList.toggle('d-none');
 filmToggle();
 sifirla();
 screen();
});

function sifirla() {
 form.reset()
}

function degistir(id) {
 const film = filmler.find((film) => film.id == id);
 durum.degistirmekIcinTiklananFilm = film;
 filmResmi.value = film.url;
 filmYili.value = film.yil;
 filmAdi.value = film.ad;
 filmTuru.value = film.tur;
 filmPuani.value = film.puan;
 filmAciklamasi.value = film.aciklama;
 ekleButton.classList.toggle('d-none');
 degistirButton.classList.toggle('d-none');
 filmToggle();
 screen();
}
function screen() {
 filmlerContainer.innerHTML = filmler
  .filter((film) => {
   if (durum.filterYil == 'Tümü') return true;
   return durum.filterYil ? film.yil >= durum.filterYil : true;
  })
  .filter((film) => {
   return film.ad.toLowerCase().includes(inputSearch.value.toLowerCase());
  })
  .map((film) => {
   return filmCard(film, durum.degisiklik);
  })
  .join('');
 const FILMLER_SET = new Set(filmler.map((film) => film.yil));
 filtreContainer.innerHTML = Array.from(FILMLER_SET)
  .sort()
  .map((yil) => {
   return filterFn(yil);
  })
  .join('');
 filtreContainer.innerHTML += `<li class="years" ><a>Tümü</a></li>`;
 localStorage.setItem('filmler', JSON.stringify(filmler));
}
