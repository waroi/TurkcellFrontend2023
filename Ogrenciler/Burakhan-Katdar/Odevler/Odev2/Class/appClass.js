import Kitap from "./KitapClass.js";
import Process from "./ProcessClass.js";
import UI from "./UIClass.js";

let ui = new UI(false, null, null);

let kitaplar = JSON.parse(localStorage.getItem("kitaplar")) || [];
ui.screen(kitaplar);

inputSearch.addEventListener("input", function (e) {
  e.preventDefault();
  ui.screen(kitaplar);
});

filtreContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.id != "filtreContainer") {
    ui.filterTur = e.target.innerText;
    ui.screen(kitaplar);
  }
});

ekleButton.addEventListener("click", function (e) {
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
    kitapAciklamasi.value
  );
  kitap.id = Math.floor(Math.random() * 1_000_000_000);
  kitaplar = [kitap, ...kitaplar];
  ui.formSifirla();
  ui.screen(kitaplar);
});

kitaplarContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.innerText == "Değiştir") {
    Process.degistir(e.target.parentElement.parentElement.id, kitaplar, ui);
    ui.kitapToggle();
    ui.screen(kitaplar);
  }
  if (e.target.innerText == "Silme") {
    kitaplar = kitaplar.filter((kitap) => {
      return kitap.id != e.target.parentElement.parentElement.id;
    });
  }
  ui.screen(kitaplar);
});

uygulaButton.addEventListener("click", function (e) {
  e.preventDefault();
  const kontrol = ui.kontrolFn();
  if (kontrol) {
    return;
  }
  Process.uygula(ui);
  ui.kitapToggle();
  ui.formSifirla();
  ui.screen(kitaplar);
});

dropdownMenu.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.id == "asc") {
    var sortedBooks = kitaplar
      .filter((kitap) => {
        return kitap.ad;
      })
      .sort((a, b) => {
        return a.ad.localeCompare(b.ad); // Sıralama için "localeCompare" kullanılır
      });

    ui.screen(sortedBooks);
    console.log("asc ye tıklandı", sortedBooks);
  }
  if (e.target.id == "desc") {
    var sortedBooks = kitaplar
      .filter((kitap) => {
        return kitap.ad;
      })
      .sort((a, b) => {
        return b.ad.localeCompare(a.ad); // Z'den A'ya sıralamak için önceki sıralamayı tersine çevirin
      });

    ui.screen(sortedBooks);
    console.log("desc ye tıklandı", sortedBooks);
  }

  if (e.target.id == "tarihArtan") {
    var sortedBooks = kitaplar
      .filter((kitap) => {
        return kitap.yil;
      })
      .sort((a, b) => {
        return a.yil - b.yil; // Yıla göre artan sıralama
      });
  
    ui.screen(sortedBooks);
    console.log("TarihArtan'a tıklandı", sortedBooks);
  }

  if (e.target.id == "tarihAzalan") {
    var sortedBooks = kitaplar
      .filter((kitap) => {
        return kitap.yil;
      })
      .sort((a, b) => {
        return b.yil - a.yil; // Yıla göre artan sıralama
      });
  
    ui.screen(sortedBooks);
    console.log("TarihAzalan'a tıklandı", sortedBooks);
  }
  
});
