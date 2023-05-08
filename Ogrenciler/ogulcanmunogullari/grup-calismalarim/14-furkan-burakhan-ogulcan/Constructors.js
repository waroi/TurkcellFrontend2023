import filmCard from './filmCardComponent.js';
import filterFn from './filterComponent.js';

export function Film(url, yil, ad, tur, puan, aciklama) {
 (this.url = url),
  (this.yil = yil),
  (this.ad = ad),
  (this.tur = tur),
  (this.puan = puan),
  (this.aciklama = aciklama);
}

export function Durum(degisiklik, filterYil, degistirmekIcinTiklananFilm) {
 (this.degisiklik = degisiklik),
  (this.filterYil = filterYil),
  (this.degistirmekIcinTiklananFilm = degistirmekIcinTiklananFilm);
}
Durum.prototype.sifirla = function () {
 form.reset();
};
Durum.prototype.filmToggle = function () {
 this.degisiklik = !this.degisiklik;
};
Durum.prototype.screen = function (filmlerContainer, filmler) {
 filmlerContainer.innerHTML = filmler
  .filter((film) => {
   if (this.filterYil == 'Tümü') return true;
   return this.filterYil ? film.yil >= this.filterYil : true;
  })
  .filter((film) => {
   return film.ad.toLowerCase().includes(inputSearch.value.toLowerCase());
  })
  .map((film) => {
   return filmCard(film, this.degisiklik);
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
};
