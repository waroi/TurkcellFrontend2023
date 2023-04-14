//Variables - Değişkenler
//Number - Sayısal Değerler

/* var number1 = 10;
console.log(number);
console.log(typeof number); */

//String - Metinsel Değerler

/* var name = "Burak";
var surname = "Coşkun";
var fullname = name + " " + surname;

console.log(fullname);
console.log(typeof fullname); */

//Boolean - Mantıksal Değerler

/* var isTrue = true;
var isFalse = false;

console.log(isTrue);
console.log(isFalse);
console.log(typeof isTrue); */

//Array - Dizi

/* 
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);
console.log(typeof array); */

//Object - Nesne

/* var object = {
  name: "Burak",
  surname: "Coşkun",
  age: 23,
};
console.log(object);
console.log(typeof object); */

//Undefined - Tanımsız

/* var number;
console.log(number);
console.log(typeof number); */

//Null - Boş

/* var number = null;
console.log(number);
console.log(typeof number); */

//Functions - Fonksiyonlar

/* 
function sum(a, b) {
  return a + b;
} */

//Scope - Kapsam

/* var number = 10;
let number2 = 20;
const number3 = 30;

function sum() {
  var number = 20;
  let number2 = 30;
  const number3 = 40;

  console.log(number);
  console.log(number2);
  console.log(number3);
}

sum();

console.log(number);
console.log(number2);
console.log(number3);

if (true) {
  var number = 40;
  let number2 = 50;
  const number3 = 60;

  console.log(number);
  console.log(number2);
  console.log(number3);
} */

//Tip Dönüşümleri

/* var a = "deneme";
console.log(a, typeof a);
a = 5;
console.log(a, typeof a); */

/* var a = 5;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a); */

/* var a = "5";
console.log(a, typeof a);
a = Number(a);
console.log(a, typeof a); */

//Operatörler
/* const a = 5;
const b = 10;
let s; */

//Aritmetik Operatörler

//Math Object
/* 
s = Math.PI;
s = Math.random() * 100;
s = Math.round(3.6);
s = Math.ceil(3.2);
s = Math.floor(3.6);
s = Math.pow(2, 3);
s = Math.sqrt(16);
s = Math.floor(Math.random() * 100); */

//Toplama
/* s = a + b;
console.log(s); */

//Çıkarma
/* s = a - b;
console.log(s); */

//Çarpma
/* s = a * b;
console.log(s); */

//Bölme
/* s = a / b;
console.log(s); */

//Mod Alma
/* s = a % b;
console.log(s); */

//Arttırma
/* s = a++;
console.log(s);
s = ++a;
console.log(s); */

//Azaltma
/* s = a--;
console.log(s);
s = --a;
console.log(s); */

//Atama Operatörleri
/* s = a;
console.log(s);
s += a;
console.log(s);
s -= a;
console.log(s);
s *= a;
console.log(s);
s /= a;
console.log(s);
s %= a;
console.log(s); */

//Karşılaştırma Operatörleri

//Eşitlik
/* s = a == b;
console.log(s); */

//Eşit Değil
/* s = a != b;
console.log(s); */

//Küçük
/* s = a < b;
console.log(s); */

//Küçük Eşit
/* s = a <= b;
console.log(s); */

//Büyük
/* s = a > b;
console.log(s); */

//Büyük Eşit
/* s = a >= b;
console.log(s); */

//Mantıksal Operatörler

//Ve
/* s = a < b && a > 0;
console.log(s); */

//Veya
/* s = a < b || a > 0;
console.log(s); */

//Değil
/* s = !(a < b);
console.log(s); */
