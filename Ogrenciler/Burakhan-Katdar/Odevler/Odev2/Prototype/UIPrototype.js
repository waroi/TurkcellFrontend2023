import kitapCard from '../Components/kitapCardComponent.js';
import filterFn from '../Components/filterComponent.js';

function UI(degisiklik, filterYil, degistirmekIcinTiklananKitap) {
 this.degisiklik = degisiklik;
 this.filterYil = filterYil;
 this.degistirmekIcinTiklananKitap = degistirmekIcinTiklananKitap;
}

UI.prototype.formSifirla = function () {
 form.reset();
};

UI.prototype.kitapToggle = function () {
 this.degisiklik = !this.degisiklik;
};

// UI.prototype = Object.create(Process.prototype);

UI.prototype.screen = function (kitaplar) {
 kitaplarContainer.innerHTML = kitaplar
  .filter((kitap) => {
   if (this.filterYil == 'Tümü') return true;
   return this.filterYil ? kitap.yil >= this.filterYil : true;
  })
  .filter((kitap) => {
   return kitap.ad.toLowerCase().includes(inputSearch.value.toLowerCase());
  })
  .map((kitap) => {
   return kitapCard(kitap, this.degisiklik);
  })
  .join('');
 const KITAPLAR_SET = new Set(kitaplar.map((kitap) => kitap.yil));
 filtreContainer.innerHTML = Array.from(KITAPLAR_SET)
  .sort()
  .map((yil) => {
   return filterFn(yil);
  })
  .join('');
 filtreContainer.innerHTML += `<li class="years" ><a>Tümü</a></li>`;
 localStorage.setItem('kitaplar', JSON.stringify(kitaplar));
};

UI.prototype.kontrolFn = function () {
 if (
  kitapResmi.value &&
  kitapYili.value &&
  kitapAdi.value &&
  kitapTuru.value &&
  kitapPuani.value &&
  kitapAciklamasi.value
 ) {
  if (!kitapResmi.value.includes('://')) {
   console.log('url testi');
   alert('Resim urlsini kontrol ediniz.');
   return true;
  }
 } else {
  console.log('boş alan testi');
  alert('Lütfen tüm alanları doldurunuz.');
  return true;
 }
};

export default UI;
