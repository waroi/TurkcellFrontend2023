// Array Özellikleri

let value;
const numbers = [43, 56, 33, 23, 44, 35, 5];
const langs = ["Python", "Java", "C++", "Php"];

length = numbers.length; // Array uzunluğu
console.log("length", length);

firstValue = numbers[0]; // Array ilk elemanı
console.log("firstValue", firstValue);

lastValue = numbers[numbers.length - 1]; // Array son elemanı
console.log("lastValue", lastValue);

thirdValue = numbers[2]; // Array üçüncü elemanı
console.log("thirdValue", thirdValue);

push = numbers.push(77); // Array sonuna eleman ekleme
console.log("push", push);

unshift = numbers.unshift(100); // Array başına eleman ekleme
console.log("unshift", unshift);

pop = numbers.pop(); // Array sonundaki elemanı silme
console.log("pop", pop);

shift = numbers.shift(); // Array başındaki elemanı silme
console.log("shift", shift);

indexOf = numbers.indexOf(33); // 33 değerinin index değeri
console.log("indexOf", indexOf);

includes = numbers.includes(33); // 33 değeri var mı?
console.log("includes", includes);

change = numbers[1] = 100; // Array elemanı değiştirme
console.log("change", change);

alphabetical = langs.sort(); // Array elemanlarını alfabetik sıraya göre sıralama
console.log("alphabetical", alphabetical);

small_big = numbers.sort(function (a, b) {
  return a - b;
}); // Array elemanlarını küçükten büyüğe sıralama  (a-b)
console.log("small_big", small_big);

big_small = numbers.sort(function (a, b) {
  return b - a;
}); // Array elemanlarını büyükten küçüğe sıralama (b-a)
console.log("big_small", big_small);

reverse = numbers.reverse(); // Array elemanlarını ters çevirme
console.log("reverse", reverse);

// ===============================================================
// Object Özellikleri
let Value;
const user = {
  name: "Varol Maksutoğlu",
  age: 37,
  email: "varol.maksutoğlu@yandex.com",
  langs: ["Python", "Java", "C++", "Php"],
  address: {
    city: "Giresun",
    street: "Kurtuluş",
  },
  work: function () {
    console.log("Çalışıyor");
  },
};

ObjValue = user.address.city;
console.log("ObjValue", ObjValue);

ObjFunction = user.work();
console.log("ObjFunction", ObjFunction);

// // ===============================================================
// // Zaman Objesi
let dateValue;
let date = new Date();

dateValue = date.getFullYear();
console.log("dateValue", dateValue);

getdate = date.getDate();
console.log("getdate", getdate);

getday = date.getDay();
console.log("getday", getday);

getmonth = date.getMonth() + 1;
console.log("getmonth", getmonth);

getfullYear = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
console.log("getfullYear", getfullYear);

console.log("date", date);

// // ===============================================================
// Karşılaştırma Operatörleri

// == eşittir (iki eşittir) (değerler eşitse true değilse false döner)
a1 = 10;
b1 = 20;
console.log("a1 == b1", a1 == b1);

a = "20";
b = 20;
console.log("a == b", a == b);

// === eşittir (üç eşittir) (değerler ve veri tipleri eşitse true değilse false döner)
a2 = 10;
b2 = 20;
console.log("a === b", a2 === b2);

a3 = 20;
b3 = 20;
console.log("a === b", a3 === b3);

// != eşit değildir (değerler eşit değilse true değilse false döner)
a4 = 10;
b4 = 20;
console.log("a != b", a4 != b4);

a5 = "20";
b5 = 20;
console.log("a != b", a5 != b5);

// !== eşit değildir (değerler ve veri tipleri eşit değilse true değilse false döner)
a6 = 10;
b6 = 20;
console.log("a !== b", a6 !== b6);

a7 = 20;
b7 = 20;
console.log("a !== b", a7 !== b7);

// > büyüktür (değer büyükse true değilse false döner)
a8 = 30;
b8 = 20;
console.log("a > b", a8 > b8);

// < küçüktür (değer küçükse true değilse false döner)
a9 = 10;
b9 = 20;
console.log("a < b", a9 < b9);

// >= büyük eşittir (değer büyük veya eşitse true değilse false döner)
a10 = 20;
b10 = 20;
console.log("a >= b", a10 >= b10);

// <= küçük eşittir (değer küçük veya eşitse true değilse false döner)
a11 = 20;
b11 = 20;
console.log("a <= b", a11 <= b11);

// And (&&) Operatörü (iki değer true ise true değilse false döner)
console.log("And (&&)", 2 == 2 && 3 == 2);

// Or (||) Operatörü (iki değerden biri true ise true değilse false döner)
console.log("Or (||)", 2 == 2 || 3 == 2);

// Not (!) Operatörü (değer true ise false değilse true döner)
console.log("Not (!)", !(2 == 2));

const numbers1 = [43, 56, 33, 23, 44, 35, 5];
console.log("!!numbers1", !!numbers1);

const users = {
  name: "Varol Maksutoğlu",
  age: 37,
  email: "varol.maksutoğlu@yandex.com",
  langs: ["Python", "Java", "C++", "Php"],
  address: {
    city: "Giresun",
    street: "Kurtuluş",
  },
  work: function () {
    console.log("Çalışıyor");
  },
};

console.log("user?.address?.street", user?.address?.street);

// Koşul İfadeleri

if (true) a15 = 20;
b15 = 20;
if (a15 === b15) {
  console.log("Eşit");
} else {
  console.log("Eşit değil");
}

let a16 = 20;
let b16 = 20;
if (a16 < b16) {
  console.log("A B'den küçük");
} else if (a16 > b16) {
  console.log("A B'den büyük");
} else {
  console.log("A B'ye eşit");
}

// Switch Case:

const islem = 1;

switch (islem) {
  case 1:
    console.log("İşlem 1 Seçildi");
    break;
  case 2:
    console.log("İşlem 2 Seçildi");
    break;
  case 3:
    console.log("İşlem 3 Seçildi");
    break;
  default:
    console.log("Geçersiz İşlem");
}

// Döngüler

// For Döngüsü

const langs12 = ["Python", "Java", "C++", "Php"];

for (let i = 0; i < langs12.length; i++) {
  console.log("langs12[i]", langs12[i]);
}
