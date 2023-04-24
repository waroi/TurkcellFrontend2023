// //Array Özellikleri

// let value;
// const numbers = [43, 56, 33, 23, 44, 35, 5];
// const langs = ["Python", "Java", "C++", "Php"];

// value = numbers.length; // Array uzunluğu
// value = numbers[0]; // Array 0. index
// value = numbers[numbers.length - 1]; // Array son index
// numbers.push(200); // Array sonuna eleman ekleme
// /* numbers.pop(); // Array sonundaki elemanı silme
// numbers.shift(); // Array başındaki elemanı silme */
// value = numbers;
// value = numbers.indexOf(44); // Array içindeki elemanın indexini bulma
// value = numbers.includes(44); // Array içindeki elemanın varlığını kontrol etme
// numbers[2] = 1000; // Array içindeki elemanı değiştirme
// value = numbers;

// value = langs.sort(); // Array içindeki elemanları alfabetik sıraya göre sıralama
// value = numbers.sort(); // Array içindeki elemanları küçükten büyüğe sıralama
// value = numbers.reverse(); // Array içindeki elemanları büyükten küçüğe sıralama
// value = numbers.sort(function (x, y) {
//   return x - y;
// }); // Array içindeki elemanları küçükten büyüğe sıralama
// value = numbers.sort(function (x, y) {
//   return y - x;
// }); // Array içindeki elemanları büyükten küçüğe sıralama
// /*
// console.log(value);
// console.log(typeof value); */

// // //Object Özellikleri

// let value;

// const programmer = {
//   name: "Burak Coşkun",
//   age: 23,
//   email: "burakcoskun832@gmail.com",
//   langs: ["Python", "Java", "C++", "Php"],
//   address: {
//     city: "İstanbul",
//     street: "Kadıköy",
//   },
//   work: function () {
//     console.log("Programcı çalışıyor...");
//   },
// };

// value = programmer;
// value = programmer.work(); // Object içindeki fonksiyonu çağırma

// console.log(value);

// Zaman Objesi

// let value;

// let date = new Date();

// value = date.getFullYear();
// value = date.getMonth() + 1;
// value = date.getDate();
// value = date.getDay();
// value = date.getHours();
// value = ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
// value = `${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()} `;

// console.log(value);

// Karşılaştırma Operatörleri

// == eşittir operatörü

// a = 10;
// b = 20;

// console.log(a == b);

// === eşittir ve aynı türde mi operatörü

// a = 10;
// b = "10";

// console.log(a === b);

// != eşit değildir operatörü

// a = 10;
// b = 20;

// console.log(a != b);

// !== eşit değildir ve aynı türde değil mi operatörü

// a = 10;
// b = "10";

// console.log(a !== b);

// > büyüktür operatörü

// a = 10;
// b = 20;

// console.log(a > b);

// < küçüktür operatörü

// a = 10;
// b = 20;

// console.log(a < b);

// >= büyük eşittir operatörü

// a = 10;
// b = 20;

// console.log(a >= b);

// <= küçük eşittir operatörü

// a = 10;
// b = 20;

// console.log(a <= b);

// And (&&) Operatörü

// a = 10;
// b = 20;

// console.log(a < b && a > 5);

// Or (||) Operatörü

// a = 10;
// b = 20;

// console.log(a < b || a > 5);

// Koşul İfadeleri

/* a = 10;
b = 20;

if (a < b) {
  console.log("a, b'den küçüktür.");
} else {
  console.log("a, b'den büyüktür.");
}
 */

// Döngüler (Loops)

// For Döngüsü

// const langs = ["Python", "Java", "C++", "Php"];

// for (let i = 0; i < langs.length; i++) {
//   console.log(langs[i]);
// }
