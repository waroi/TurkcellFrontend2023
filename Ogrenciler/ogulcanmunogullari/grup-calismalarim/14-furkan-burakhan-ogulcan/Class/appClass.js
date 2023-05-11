import Film from './FilmClass.js';
import Process from './ProcessClass.js';
import UI from './UIClass.js';

let ui = new UI(false, null, null);

let filmler = JSON.parse(localStorage.getItem('filmler')) || [];
ui.screen(filmler);

inputSearch.addEventListener('input', function (e) {
 e.preventDefault();
 ui.screen(filmler);
});

filtreContainer.addEventListener('click', function (e) {
 e.preventDefault();
 if (e.target.id != 'filtreContainer') {
  ui.filterYil = e.target.innerText;
  ui.screen(filmler);
 }
});

ekleButton.addEventListener('click', function (e) {
 e.preventDefault();
 const kontrol = ui.kontrolFn();
 if (kontrol) {
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
 ui.formSifirla();
 ui.screen(filmler);
});

filmlerContainer.addEventListener('click', function (e) {
 e.preventDefault();
 if (e.target.innerText == 'Değiştir') {
  Process.degistir(e.target.parentElement.parentElement.id, filmler, ui);
  ui.filmToggle();
  ui.screen(filmler);
 }
 if (e.target.innerText == 'Silme') {
  filmler = filmler.filter((film) => {
   return film.id != e.target.parentElement.parentElement.id;
  });
 }
 ui.screen(filmler);
});

uygulaButton.addEventListener('click', function (e) {
 e.preventDefault();
 const kontrol = ui.kontrolFn();
 if (kontrol) {
  return;
 }
 Process.uygula(ui);
 ui.filmToggle();
 ui.formSifirla();
 ui.screen(filmler);
});
