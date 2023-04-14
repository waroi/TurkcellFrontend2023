// Js Giriş
console.log("merhaba dünya");

// Değişkenler
// Değişken tanımlama

// genelde camelCase kullanılır

// secondNumber =20;
// firstNumber =18;

// console.log(firstNumber);
// console.log(secondNumber);

// console.log(firstNumber+secondNumber);

// var ile bloklar arasına hapsetme durumu olması
var secondNumber = 20;

a();
function a() {
  firstNumber = 12;
}

console.log(firstNumber);
console.log(secondNumber);

console.log(firstNumber + secondNumber);

// Variables
// Number-sayısal değer

var firstNumber = 12;
console.log(firstNumber + 10);
console.log(typeof firstNumber);

// String -metinsel değer

var userName = "10";
console.log(userName + 10);
console.log(typeof userName);

// Boolean- mantıksal değer(true/false)
var isOnline = true;

console.log(isOnline);
console.log(typeof isOnline);

// Undefined -tanımsız değer

var isUndefined;
console.log(isUndefined);
console.log(typeof isUndefined);

// Null - boş değer

var isNull = null;
console.log(isNull);
console.log(typeof isNull);

// Object -nesne
var user = {
  name: "selim",
  age: 23,
};

console.log(user);
console.log(typeof user);

console.log(user.name);

// Array- dizi

var isArray = ["selim", "yavuz", 10];

console.log(isArray);
console.log(typeof isArray);

console.log(isArray[1]);

// Date -tarih
var date = new Date();

console.log(date);
console.log(typeof date);

// Function -fonksiyonlar

merhaba("yavuz"); //hoisting

// Diğer yazılış için

function merhaba(name) {
  console.log("merhaba", name);
}

// burada atama şeklinde fonksiyon tanımı var
// js'in execute aşamasından önce okuma aşamasında her değişkeni okuyor, eğer ilk anda değer ataması olursa alıyor
// ama fonksiyon için ilk tanımda varsa okuyor yoksa fonksiyon aşağıdaki türde çıktı vermeyecektir.

// var merhaba= function(){
//     console.log("merhaba");
// };

merhaba("selim");

// Scope-kapsam

var a = 10; //function scope
let b = 20; //block scope
const c = 30; //block scope

function test() {
  var a = 40; //fonk içerisinde tanımlı kalıyor
  let b = 50;
  const c = 60;
  console.log("function scope", a, b, c);
}

// block scope herhangi bir parantez arası kalıyor
{
  var a = 70; // a değişir,block scope olmadığı için
  let b = 80; // bunlar block scope olduğu için dışarı çıkmaz
  const c = 90; // let değişebilir ama const değişemez değerler için
}

test();
console.log("global scope", a, b, c);

// Tip dönüşümleri
var a = "selim";
console.log(a, typeof a);
a = 5;
console.log(a, typeof a);

var a = 5;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = Number(a);

var a = "deneme";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a);

var a = 5 + "2";
console.log(a, typeof a);

var a = 5 - "2";
console.log(a, typeof a);

// Operatörler
const a = 10;
const b = 5;
let s;

// Aritmetik operatörler
console.log(a + b); //toplama operatörü
console.log(a - b); //çıkarma
console.log(a / b); //bölme
console.log(a * b); //çarpma
console.log(a % b); //mod alma
console.log(a ** b); //üs alma operatörü

// Atama operatörleri

s = Math.PI;
s = Math.random() * 100; //0-100 arası rastgele değer
s = Math.round(3.4); // sayı yuvarlama
s = Math.ceil(3.2); // hep yukarı yuvarlama
s = Math.floor(3.6); // hep aşağı yuvarlama
s = Math.pow(2, 3); // kuvvet için
s = Math.floor(Math.random() * 100);
console.log(s, typeof s);
