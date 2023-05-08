import { Film, Durum } from './Constructors.js';

let durum = new Durum(false, null, null);
let filmler = JSON.parse(localStorage.getItem('filmler')) || [];
durum.screen(filmlerContainer, filmler);
inputSearch.addEventListener('input', function (e) {
 e.preventDefault();
 durum.screen(filmlerContainer, filmler);
});

filtreContainer.addEventListener('click', function (e) {
 e.preventDefault();
 if (e.target.id != 'filtreContainer') {
  durum.filterYil = e.target.innerText;
  durum.screen(filmlerContainer, filmler);
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

 const film = new Film(
  filmResmi.value,
  filmYili.value,
  filmAdi.value,
  filmTuru.value,
  filmPuani.value,
  filmAciklamasi.value,
 );
 film.id = Math.floor(Math.random() * 1_000_000_000);
 filmler = [film, ...filmler];
 durum.sifirla();
 durum.screen(filmlerContainer, filmler);
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
 durum.screen(filmlerContainer, filmler);
});

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
 durum.filmToggle();
 durum.sifirla();
 durum.screen(filmlerContainer, filmler);
});

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
 durum.filmToggle();
 durum.screen(filmlerContainer, filmler);
}
