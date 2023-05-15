import Kitap from './KitapPrototype.js';
import Process from './ProcessPrototype.js';
import UI from './UIPrototype.js';

let ui = new UI(false, null, null);
let process = new Process();

let kitaplar = JSON.parse(localStorage.getItem('kitaplar')) || [];
ui.screen(kitaplar);

inputSearch.addEventListener('input', function (e) {
 e.preventDefault();
 ui.screen(kitaplar);
});

filtreContainer.addEventListener('click', function (e) {
 e.preventDefault();
 if (e.target.id != 'filtreContainer') {
  ui.filterYil = e.target.innerText;
  ui.screen(kitaplar);
 }
});

ekleButton.addEventListener('click', function (e) {
 e.preventDefault();
 const kontrol = ui.kontrolFn();
 if (kontrol) {
  return;
 }
 const kitap = new Kitap(
  kitapResmi.value,
  kitapYili.value,
  kitapAdi.value,
  kitapTuru.value,
  kitapPuani.value,
  kitapAciklamasi.value,
 );
 kitap.id = Math.floor(Math.random() * 1_000_000_000);
 kitaplar = [kitap, ...kitaplar];
 ui.formSifirla();
 ui.screen(kitaplar);
});

kitaplarContainer.addEventListener('click', function (e) {
 e.preventDefault();
 if (e.target.innerText == 'Değiştir') {
  process.degistir(e.target.parentElement.parentElement.id, kitaplar, ui);
  ui.kitapToggle();
  ui.screen(kitaplar);
 }
 if (e.target.innerText == 'Silme') {
  kitaplar = kitaplar.filter((kitap) => {
   return kitap.id != e.target.parentElement.parentElement.id;
  });
 }
 ui.screen(kitaplar);
});

uygulaButton.addEventListener('click', function (e) {
 e.preventDefault();
 const kontrol = ui.kontrolFn();
 if (kontrol) {
  return;
 }
 process.uygula(ui);
 ui.kitapToggle();
 ui.formSifirla();
 ui.screen(kitaplar);
});
