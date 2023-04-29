// Variables - Değişkenler

// Number - Sayısal Değer
var firstNumber = 10;
console.log(firstNumber + 10);
console.log(typeof firstNumber);

// String - Metinsel Değer
var userName = "Varol";
console.log(userName);
console.log(typeof userName);

// Boolean - Mantıksal Değer(true/false)
var isOnline = true;
console.log(isOnline);
console.log(typeof isOnline);

// Undefined - Tanımsız Değer
var isUndefined;
console.log(isUndefined);
console.log(typeof isUndefined);

// Null - Boş Değer
var isNull = null;
console.log(isNull);
console.log(typeof isNull);

// Object - Nesne
var user = { name: "Varol", age: 25 };
console.log(user);
console.log(typeof user);
console.log(user.age);

// Array - Dizi
var students = ["Varol", "Ali", "Veli", 10];
console.log(students);
console.log(typeof students);
console.log(students[1]);

// Date - Tarih
var date = new Date();
console.log(date);
console.log(typeof date);

var a = 10;
var b = a;
console.log("1- ", a, b); // 10 10
a = 20;
console.log("2- ", a, b); // 20 10

var a = [10];
var b = a;
console.log("1- ", a, b); // 10 10
a = [20];
console.log("2- ", a, b); // 20 10

var a = [10, 20, 30, 40, 50];
var b = a;
console.log("1- ", a, b); // 10 10
a = [20, 30, 40, 50, 60];
console.log("2- ", a, b); // 20 10

var c = [10, 20];
var d = c;
console.log("1- ", c, d); // 10 10
c = [30, 40];
console.log("2- ", c, d); // 20 10

let sayi4 = [10];
let sayi5 = sayi4;
console.log("1", sayi4, sayi5);
sayi4.push(20);
console.log("2", sayi4, sayi5);

// function - Fonksiyonlar
merhaba();
var merhaba = function () {
  console.log("Merhaba");
};
function merhaba(name) {
  console.log("Merhaba ", name);
}
merhaba("Varol");
merhaba("Oğulcan");

// Scope - Kapsam
var sayi = 10; // function scope
let sayi1 = 20; // block scope
const sayi2 = 30; // block scope
function test() {
  var sayi = 40;
  let sayi1 = 50;
  const sayi2 = 60;
  console.log("Function Scope: ", sayi, sayi1, sayi2);
}
// {
//   var a = 70;
//   let b = 80;
//   const c = 90;
// }
if (true) {
  var sayi = 80;
  let sayi1 = 90;
  const sayi2 = 100;
  console.log("Block Scope: ", sayi, sayi1, sayi2);
}
test();
console.log("Global Scope: ", sayi, sayi1, sayi2);

// Tip Dönüşümleri
var tip = "deneme";
console.log(tip, typeof tip);
tip = 5;
console.log(tip, typeof tip);

var tip = 5;
console.log("Number", tip, typeof tip);
tip = String(tip);
console.log("String", tip, typeof tip);

var tip = "5";
console.log("String", tip, typeof tip);
tip = Number(tip);
console.log("Number", tip, typeof tip);

var tip = "Deneme";
console.log("String", tip, typeof tip);
tip = Number(tip);
console.log("Number", tip, typeof tip);

console.log("NaN", typeof NaN);

var sayi3 = 5 + "2";
console.log(sayi3, typeof sayi3);

var sayi3 = 5 - "2";
console.log(sayi3, typeof sayi3);

// Operatorler
const opra = 10;
const oprb = 4;
let s;

// Aritmetik Operatorler
console.log(opra + oprb); // Toplama Operatorü
console.log(opra - oprb); // Çıkarma Operatorü
console.log(opra * oprb); // Çarpma Operatorü
console.log(opra / oprb); // Bölme Operatorü
console.log(opra % oprb); // Mod Alma Operatorü
console.log(opra ** oprb); // Üs Alma Operatorü

// Math Fonksiyonları
s = Math.PI;
s = Math.random() * 100;
s = Math.round(3.5);
s = Math.ceil(3.2);
s = Math.floor(3.9);
s = Math.pow(2, 3);
s = Math.floor(Math.random() * 100);

console.log(s, typeof s);
