// Function
// merhaba();
// function merhaba() {
//   console.log("Merhaba");
// }

//typcscriptte hangi tipte veri geldiğini de belirtmem gerekirdi ilerleyen süreçte göreceğiz

// function user(name, age) {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }
// user("Sueda", 24);
// user("Abdullah", 26);

// function user(name = 'Bilgi yok', age = 'Bilgi yok') {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }
// user("Sueda",);
// user();

// fonksiyonların dışarıya değer döndürmesi için return yaparız.
//ornek1
// function square(x) {
//   return x * x;
// }

// const sonuc = square(5) * 3;
// console.log("Kare alma", sonuc);

// //ornek2
// function cube(x) {
//   return x * x * x;
// }
// const sonuc2 = cube(5) + 10;
// console.log("Küpünü al 10 ekle", sonuc2);


// grup ödevi 1 yapıldı

//devam


// const database = {
//   host: "localhost",
//   add: function () {
//     console.log("Veri Eklendi");
//   },
//   get: function () {
//     console.log("Veri Okundu");
//   },
//   update: function (id) {
//     console.log(`Veri ${id} li veri güncellendi`);
//   },
//   delete: function (id) {
//     console.log(`Veri ${id} li veri silindi`);
//   },
// };


// console.log(database.host);
// database.add();
// database.get();
// database.delete();
// database.update(10);

// Arrow Functions
//normal fonksiyon
// const kare = function (x) {
//   return x * x;
// }

// const kare = (x) => {
//   return x * x;
// }
// console.log(kare(5));

// // tek satırlık bir işlem yapıyorsak
// const kare2 = (x) => x * x;
// console.log(kare2(6));

// // Loops - Döngüler
// // while döngüsü
// let i = 0;
// //true yazarsan sonsuza kadar döner

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

//do while döngüsü
// en az bir kere kullancağın bir döngü varsa kullanabilirsin
// let i = 0;
// do {
//   console.log(`Deneme ${i}`);
//   i++;
// } while (i < 10);

// Array map() methodu
//langs burda bir array 
const langs = ["Python", "Java", "C++", "C#", "Javascript"];

// langs.map(function (x) {
//   console.log(x.length);
// });

// arrow function ile kullanımı 

langs.map((x) => console.log(x.length));
const lengths = langs.map((x) => x.length);
console.log(lengths);

langs.map((x, i) => console.log(i, x));

// callback fonksiyonlar
// const add = function (a, b) {
//   return a + b;
// }
