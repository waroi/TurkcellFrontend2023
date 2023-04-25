let isTrueGuess = false;
let count = 0;
let random = Math.floor(Math.random() * 100);

for (let index = 0; true; index++) {
  let value = prompt(`Bir deger giriniz${random}`);
  let result = "";

  if (random > value) {
    result = alert(`Kucuk bir sayi girdiniz.Buyuk bir sayi giriniz ${random}`);
    count += 1;
  } else if (random < value) {
    result = alert(`Buyuk bir sayi girdiniz.Kucuk bir sayi giriniz ${random}`);
    count += 1;
  } else {
    count += 1;
    result = alert(`${count}.seferde dogru bildiniz`);
    count = 0;
    random = Math.floor(Math.random() * 100);
  }
}
