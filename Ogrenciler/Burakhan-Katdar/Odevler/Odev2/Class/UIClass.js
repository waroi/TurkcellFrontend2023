import kitapCard from "../Components/kitapCardComponent.js";
import filterFn from "../Components/filterComponent.js";

class UI {
  constructor(degisiklik, filterTur, degistirmekIcinTiklananKitap) {
    this.degisiklik = degisiklik;
    this.filterTur = filterTur;
    this.degistirmekIcinTiklananKitap = degistirmekIcinTiklananKitap;
  }

  formSifirla() {
    form.reset();
  }

  kitapToggle() {
    this.degisiklik = !this.degisiklik;
  }

  screen(kitaplar) {
    kitaplarContainer.innerHTML = kitaplar
      .filter((kitap) => {
        if (this.filterTur == "Tümü") return true;
        return this.filterTur ? kitap.tur == this.filterTur : true;
      })
      .filter((kitap) => {
        return kitap.ad.toLowerCase().includes(inputSearch.value.toLowerCase()) || 
        kitap.puan.toLowerCase().includes(inputSearch.value.toLowerCase());
        ;
      })
      
      .map((kitap) => {
        return kitapCard(kitap, this.degisiklik);
      })
      .join("");

    const KATEGORI_SET = new Set(kitaplar.map((kitap) => kitap.tur));


    filtreContainer.innerHTML = Array.from(KATEGORI_SET)
      .sort()
      .map((tur) => {
        return filterFn(tur);
      })
      
      .join("");
    
    filtreContainer.innerHTML += `<li class="years" ><a>Tümü</a></li>`;
    localStorage.setItem("kitaplar", JSON.stringify(kitaplar));

    
  }
  
  kontrolFn() {
    if (
      kitapResmi.value &&
      kitapYili.value &&
      kitapAdi.value &&
      kitapTuru.value &&
      kitapPuani.value &&
      kitapAciklamasi.value
    ) {
      if (!kitapResmi.value.includes("://")) {
        console.log("url testi");
        alert("Resim urlsini kontrol ediniz.");
        return true;
      }
    } else {
      console.log("boş alan testi");
      alert("Lütfen tüm alanları doldurunuz.");
      return true;
    }
  }
}
export default UI;
