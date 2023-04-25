while (true) {
  const number = Number(prompt("Sayı Giriniz:"));
const islem = Number(prompt(`1- Faktöriyel Hesaplama\n2- Asal Sayı Kontrolü\n3- Tek mi Çift mi\n4- Mükemmel Sayı Kontrolü\nSeçiminizi Giriniz:`));

switch (islem) {
  case 1:
    let faktor = faktoriyel(number);
    alert(`${number} sayısının faktoriyel sonucu = ${faktor}`);
    break;
  case 2:
    let asal = asalSayi(number);
    if(asal) alert(`${number} sayısı asal sayıdır.`);
    else alert(`${number} sayısı asal sayı değildir.`);
    break;
  case 3:
    let cift = ciftMi(number);
    if (cift) alert(`${number} sayısı çift sayıdır.`);
    else alert(`${number} sayısı tek sayıdır.`);
    break;
  case 4:
    let mukemmel = mukemmelSayi(number);
    if(mukemmel) alert(`${number} sayısı mükemmel sayıdır.`);
    else alert(`${number} sayısı mükemmel sayı değildir.`);
    break;
  default:
    alert("Hatalı Seçim Yaptınız!");
}
}

function faktoriyel (num) {
  let sonuc = 1;
  for (let i = 1; i <= num; i++) {
    sonuc *= i;
  }
  return sonuc;
}

function asalSayi (num) {
  let asalMi = true;
  if (num > 2) {
    for (let i = 2; i < num; i++) {
      if(num % i == 0) {
        asalMi = false;
        break;
      }
    }
  }
  else {
    asalMi = false;
  }
  return asalMi;
}

function ciftMi(num) {
  return num % 2 == 0;
}

function mukemmelSayi(num) {
  let toplam = 0;
  for (let i = 1; i < num; i++) {
    if(num % i == 0) {
      toplam += i;
    }
  }
  return num == toplam;
}