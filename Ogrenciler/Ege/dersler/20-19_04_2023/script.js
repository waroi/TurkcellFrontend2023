// #region Array Özellikleri

// let value;
// const nums = [43, 56, 33, 23, 44, 35, 5];
// const langs = ["Python", "Java", "C++", "Php"];

// value = nums.length; // Array uzunluğu
// value = nums[0]; // Array 1. elemanı
// value = nums[2]; // Array 2. elemenı
// value = nums[nums.length - 1]; // Array son elemanı
// nums.push(332); // Array sonuna eleman ekleme
// // nums.pop(); // Array sonundan eleman çıkarma
// // nums.shift(); // Array başından eleman çıkarma
// value = nums;
// value = nums.indexOf(33); // 33 değerinin index değeri
// value = nums.indexOf(9); // Eğer yoksa -1 döner
// value = nums.includes(33); // 33 değeri var mı?
// nums[1] = 100;
// value = nums;

// value = langs.sort();
// value = nums.sort();

// value = nums.sort((a, b) => a - b); // Array elemanlarını küçükten büyüğe sıralama
// value = nums.sort(function (a, b) {
//   return a - b;
// }); // Arrow function kullanmadan küçükten büyüğe sıralama
// value = nums.sort((a, b) => b - a); // Array elemanlarını büyükten küçüğe sıralama

// console.log(value);
// console.log(typeof value);

// #endregion

// #region Object Özellikleri

// let value;
// const user = {
//   name: "Ege KARA",
//   age: 25,
//   email: "ege.kara@egemail.com",
//   langs: ["JavaScript", "Java", "Python", "C#"],
//   address: {
//     city: "Aydın",
//     street: "Kurtuluş",
//   },
//   work: function () {
//     console.log("Çalışıyor");
//   },
// };

// value = user.address.city;
// value = user.work();

// console.log(value);

// const user = new Object();
// console.log(user);

// #endregion

// #region Zaman Objesi

// let value;
// let date = new Date();

// value = date.getFullYear();
// value = date.getMonth() + 1;
// value = date.getDate(); // From Sunday(0) to Saturday(6)
// value = date.getDay();
// value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

// console.log(date);
// console.log(value);

// #endregion

// #region Karşılaştırma Operatörleri
// == Double Equals (değerler eşitse true değilse false döner)
// a = 10;
// b = 20;
// a = "20";
// b = 20;

// console.log(a == b);

// === Triple Equals (değerler ve veri tipleri eşitse true değilse false döner)
// a = 10;
// b = 20;
// a = 20;
// b = 20;

// console.log(a === b);

// != Not Equals (değerler eşit değilse true değilse false döner)
// a = 10;
// b = 20;
// a = "20";
// b = 20;

// console.log(a != b);

// !== Not Equals Big (değerler ve veri tipleri eşit değilse true değilse false döner)
// a = 10;
// b = 10;
// a = "20";
// b = 20;

// console.log(a !== b);

// > Greater (değer büyükse true değilse false döner)
// a = 30;
// b = 20;
// a = 20;
// b = 30;

// console.log(a > b);

// < Lesser (değer büyükse true değilse false döner)
// a = 30;
// b = 20;
// a = 20;
// b = 30;

// console.log(a < b);

// >= Greater or Equal (değer büyük veya eşitse true değilse false döner)
// a = 20;
// b = 20;

// console.log(a >= b);

// <= Lesser or Equal (değer büyük veya eşitse true değilse false döner)
// a = 20;
// b = 20;

// console.log(a <= b);

// AND (&&) (iki değer de true ise true değilse false döner)

// console.log(2 == 2 && 3 == 2);

// OR (||) (iki değerden en az biri true ise true değilse false döner)
// console.log(2 == 2 || 3 == 2);

// NOT (!) (değer true ise false değilse true döner)
// console.log(!(2 == 2));
// const nums = [1, 2, 3, 4, 5, 6, 7];
// console.log(!!nums);
// #endregion

// #region Koşul İfadeleri

// if-else

// a = "20";
// b = 20;

// if (a === b) console.log("Eşit");
// else console.log("Eşit değil");

// let a = 30;
// let b = 20;
// if (a < b) console.log("A, B'den küçük");
// else if (a > b) console.log("A, B'den büyük");
// else console.log("A, B'ye eşit");
// #endregion

// #region Döngüler

// for Döngüsü
// const langs = ["Python", "Java", "C++", "Php"];

// for (let i = 0; i < langs.length; i++) {
//   console.log(i, langs[i]);
// }

//#endregion

// #region Kullanıcıdan değer almak

// let value = prompt("Bir değer giriniz");
// console.log(value);

// #endregion

let myNum = Math.floor(Math.random() * 100);
let userNum;
console.log(myNum);

for (let i = 0; i <= 9; i++) {
  userNum = prompt(`
  İpucu: ${myNum}
  1 - 100 arası sayı tut`);
  if (userNum == myNum) {
    alert(`${i + 1}. denemede buldun. ${100 - i * 10} puan kazandın.`);
    break;
  } else if (userNum > myNum) alert(`${userNum} asıl sayıdan yüksek. Düş`);
  else if (userNum < myNum) alert(`${userNum} asıl sayıdan düşük. Çık `);
  if (i == 9) alert(`10 denemede bulamadın.`);
}
