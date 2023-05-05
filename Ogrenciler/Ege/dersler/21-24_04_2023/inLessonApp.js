// Ege KARA Büşra KOSNAK Ahmet KANBAZ Ekin Mete TAHMİLCİ

for (let i = 0; true; i++) {
  const num = Number(prompt("Sayi gir"));
  const islem = Number(
    prompt(`Hangi işlem
  1- Faktöriyel
  2- Asal Mı?
  3- Çift Mi?
  4- Mükemmel Sayı Mı?`)
  );
  let sonuc;
  switch (islem) {
    case 1:
      sonuc = faktoriyel(num);
      alert(`Faktoriyel Sonucu: ${sonuc}`);
      break;
    case 2:
      sonuc = asalSayi(num);
      if (sonuc) alert(`Seçtiğiniz sayı olan ${num} asaldır.`);
      else alert(`Seçtiğiniz sayı olan ${num} asal değildir.`);
      break;
    case 3:
      sonuc = ciftMi(num);
      if (sonuc) alert(`Seçtiğiniz sayı olan ${num} çifttir.`);
      else alert(`Seçtiğiniz sayı olan ${num} tektir.`);
      break;
    case 4:
      sonuc = mukemmelSayi(num);
      if (sonuc) alert(`Seçtiğiniz sayı olan ${num} mükemmeldir.`);
      else alert(`Seçtiğiniz sayı olan ${num} mükemmel değildir.`);
      break;

    default:
      alert("Düzgün işlem seçilmedi.");
      break;
  }
}

function faktoriyel(number) {
  let fakt = 1;
  for (let i = 1; i <= number; i++) {
    fakt *= i;
  }

  return fakt;
}

function asalSayi(number) {
  let asalMi = true;
  if (number === 1) {
    return false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        asalMi = false;
        break;
      }
    }
  }

  return asalMi;
}

function ciftMi(number) {
  return number % 2 === 0;
}

function mukemmelSayi(number) {
  let toplam = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) toplam += i;
  }
  return number == toplam;
}
