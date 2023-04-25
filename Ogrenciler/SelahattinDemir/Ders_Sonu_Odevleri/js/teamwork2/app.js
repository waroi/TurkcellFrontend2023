// Matematiksel Fonksiyonlar
// Grup Çalışması(İrem-Mücahit-Selahattin)

let sayi = parseInt(prompt("Bir sayi giriniz:"));

let islem = Number(
  prompt(
    "İşlemi seciniz: (1 = faktöriyel, 2 = asal sayi, 3 = cift-tek, 4 = mükemmel sayi, 5 = çikiş)"
  )
);

function faktoriyel(sayi) {
  let sonuc = 1;
  for (let i = 1; i <= sayi; i++) {
    sonuc *= i;
  }
  console.log(`${sayi} sayisinin faktoriyeli: ${sonuc}`);
}

function asal(sayi) {
  let asalSayi = true;
  for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) {
      asalSayi = false;
      break;
    }
  }
  if (asalSayi) {
    console.log(`${sayi} asal sayidir`);
  } else {
    console.log(`${sayi} asal sayi değildir`);
  }
}

function cifttek(sayi) {
  if (sayi % 2 == 0) {
    console.log(`${sayi} cift sayidir`);
  } else {
    console.log(`${sayi} tek sayidir`);
  }
}

function mukemmel(sayi) {
  let toplam = 0;
  for (let i = 1; i < sayi; i++) {
    if (sayi % i == 0) {
      toplam += i;
    }
  }
  if (toplam == sayi) {
    console.log(`${sayi} mükemmel sayidir`);
  } else {
    console.log(`${sayi} mükemmel sayi değildir`);
  }
}
switch (islem) {
  case 1:
    faktoriyel(sayi);
    break;
  case 2:
    asal(sayi);
    break;
  case 3:
    cifttek(sayi);
    break;
  case 4:
    mukemmel(sayi);
    break;
  case 5:
    alert("Çıkış yapılıyor...");
    break;
  default:
    alert("Hatalı işlem 1 ile 5 arası değer giriniz");
    break;
}
