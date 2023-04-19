let isTrueGuess = false;
let count = 0;
let a = 0;
let random = Math.floor(Math.random() * 100);

for (let index = 0; index < 10; index++) {
  let value = prompt(`Bir deger giriniz${random}`);
  if (random > value) {
    value = prompt(`Kucuk bir sayi girdiniz.Buyuk bir sayi giriniz ${random}`);

    count += 1;
  } else if (random < value) {
    value = alert("Buyuk bir sayi girdiniz.Kucuk bir sayi giriniz");
    count += 1;
  } else {
    count += 1;
    value = prompt(`${count}.seferde dogru bildiniz`);
  }
}

//   if (value === random) {
//     isTrueGuess = true;
//     count = index + 1;
//     console.log(`${count}. sefer buldunuz`);
//   } else {
//     if (value > random) {
//       value = prompt("Buyuk sayi girdiniz tekrar deneyiniz");
//       count++;
//     } else {
//       value = prompt("Kucuk sayi girdiniz tekrar deneyiniz");
//       count++;
//     }
//   }
