// Functions
// merhaba();
// function merhaba() {
//   console.log("Merhaba");
// }

// function user(name, age) {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }

// user("Varol", 37);
// user("Maksutoğlu", 38);

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }

// user("Varol");
// user();

// Return ile dışarı değer döndürme
// function square(x) {
//   return x * x;
// }
// const sonuc = square(5) * 3;
// console.log(sonuc);

// function cube(x) {
//   return x * x * x;
// }
// const sonuc = cube(5) + 10;
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
//     console.log("Veri Eklendi");
//   },
//   get: function () {
//     console.log("Veli Okundu");
//   },
//   update: function (id) {
//     console.log(`${id} id'li Veri güncellendi`);
//   },
//   delete: function () {
//     console.log(`Veri silindi`);
//   },
// };

// console.log(database.host);
// database.add();
// database.get();
// database.delete();
// database.update(10);

// Arrow functions

// const kare = function (x) {
//   return x * x;
// }

// const kare = (x) => {
// .....
//   return x * x;
// };

// console.log(kare(5));

// const kare = (x) => x * x;
// console.log(kare(5));

// Loops - Döngüler
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
//   console.log(`Deneme ${i}`);
//   i++;
// }

// do while döngüsü

// let i = 0;
// do {
//   console.log(`Deneme ${i}`);
//   i++;
// } while (i > 10);

// Array map() methodu

const langs = ["Python", "Java", "C++", "C#"];

// langs.map(function (x) {
//   console.log(x);
// });

langs.map((x) => console.log(x));
const lengths = langs.map((x) => x.length);
console.log(lengths);

langs.map((x, i) => console.log(i, x));
