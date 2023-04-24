// #region Koşul İfadeleri dvm.

//  Switch - Case

//  const islem = 1;

// switch (islem) {
//   case 1:
//     console.log("İşlem 1 Seçildi");
//     break;

//   case 2:
//     console.log("İşlem 2 Seçildi");
//     break;

//   case 3:
//     console.log("İşlem 3 Seçildi");
//     break;

//   default:
//     console.log("Geçersiz İşlem");
// }

//#endregion

// #region Functions
// merhaba();
// function merhaba() {
//   console.log("Hello World!");
// }

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//   console.log(`İsim: ${name}
// Yaş: ${age}`);
// }
// user("Ege", 25);
// user("Kara", 105);
// user("Kara");
// user();

// Return ile dışarı değer döndürme
// function square(x) {
//   return x * x;
// }
// const sonuc = square(5) * 4;
// console.log(sonuc);

// /**
//  * Rastgele Başlık xD
//  * @param {string} x
//  */
// function test(x) {
// }
// test();

// const database = {
//   host: "localhost",
//   add: function () {
//     console.log(`Veri Eklendi`);
//   },
//   get: function () {
//     console.log(`Veri Okundu`);
//   },
//   update: function () {
//     console.log(`Veri Güncellendi`);
//   },
//   delete: function () {
//     console.log(`Veri Silindi`);
//   },
// };

// #endregion

//#region Arrow Functions
// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(5));

//#endregion

//#region Döngü dvm.

// while döngüsü
// let i = 0;
// while (i < 10) {
//   console.log("Merhaba");
//   i++;
// }

// let i = 0;
// while (i < 10) {
//   if (i === 3 || i === 5) {
//     i++;
//     continue;
//   }
//   console.log(`Deneme => ${i}`);
//   i++;
// }

// do while döngüsü
// let i = 0;
// do {
//   console.log(`Deneme => ${i}`);
//   i++;
// } while (i > 10);

//#endregion

//#region Array map() method
// const langs = ["Python", "Java", "C++", "JavaScript"];

// langs.map(function (x) {
//   console.log(x);
// });

// langs.map((x) => console.log(x));
// #endregion
