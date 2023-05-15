import filmCard from '../Components/filmCardComponent.js';
import filterFn from '../Components/filterComponent.js';

class UI {
 constructor(degisiklik, filterYil, degistirmekIcinTiklananFilm) {
  this.degisiklik = degisiklik;
  this.filterYil = filterYil;
  this.degistirmekIcinTiklananFilm = degistirmekIcinTiklananFilm;
 }
 formSifirla() {
  form.reset();
 }
 filmToggle() {
  this.degisiklik = !this.degisiklik;
 }
 screen(filmler) {
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
 }
 kontrolFn() {
  if (
   filmResmi.value &&
   filmYili.value &&
   filmAdi.value &&
   filmTuru.value &&
   filmPuani.value &&
   filmAciklamasi.value
  ) {
   if (!filmResmi.value.includes('://')) {
    console.log('url testi');
    alert('Resim urlsini kontrol ediniz.');
    return true;
   }
  } else {
   console.log('boş alan testi');
   alert('Lütfen tüm alanları doldurunuz.');
   return true;
  }
 }
}
export default UI;
