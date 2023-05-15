//console.log("merhaba");

//Değişken tanımlama

// var maasAli = 6000;
// var maasCan = 5000;
// var zam = 0.5;
// var zam2 = 0.1;
// console.log("Alinin maaşı:", maasAli + (maasAli * zam)) //maaş ali
// console.log("Canın maaşı:", maasCan + (maasCan * zam2)) //maaş can

// Degisken türleri: var, let, const

var urunAdi = "Elma"; //string
let urunFiyat = "10 TL"; //string
var urunAdet = 10; //number

console.log(typeof urunAdi, urunAdi);
console.log(typeof urunFiyat, urunFiyat);
console.log(typeof urunAdet, urunAdet);

var sayi = 10;
var sayi = "Sueda";
console.log(sayi);

// let sayi2 = 10;
//let sayi2 = "Sueda"; //hata verir

let sayiA = "10";
let sayiB = "20";
console.log(sayiA + sayiB); //1020

let sayiC = Number("10");
let sayiD = Number("20");
console.log(sayiC + sayiD); //30
//string to sayı
let sayiE = "50";
let sayiF = "70";
console.log(Number(sayiE) + Number(sayiF)); //1020
//sayı to string
let sayiG = 50;
let sayiH = 70;
console.log(String(sayiG) + String(sayiH)); //5070

let isim = "Sueda";
let soyIsim = "Cicekli";
console.log(isim + " " + soyIsim);

// basarilimi
let sınavNotu = 40;
let basarilimi = (sınavNotu >= 50);
console.log(basarilimi); //false yani basarisiz
console.log(typeof basarilimi); //boolean

// Uygulama
/* 1- İki öğrencinin bilgilerini değişkenler içinde sakla (isim , doğum tarihi , ders notları
  2- yaş bilgilerinide tut
  3- öğrencilerin ders ortalama notunu değişkende sakla
  öğrencilerin geçme 50 notuna  göre başarılı olup olmadığını değişkende sakla)
  */

let std1Name = "Sueda";
let std1Surname = "Cicekli";
let std1BirthYear = "1999";
let std1Math1 = 80;
let std1Math2 = 90;
let std1Math3 = 100;
let std1_average = (std1Math1 + std1Math2 + std1Math3) / 3;
console.log(std1Name + " 'nın Not ortalaması: " + parseInt(std1_average)); // parseInt tam sayıya çevirir
console.log(std1_average >= 50 ? "Geçti" : "Kaldı") // ? ise : değilse anlamına gelir


let std2Name = "Abdullah";
let std2Surname = "Cicekli";
let std2BirthYear = "1997";
let std2Math1 = 70;
let std2Math2 = 44;
let std2Math3 = 23;
let std2_average = (std2Math1 + std2Math2 + std2Math3) / 3;
console.log(std2Name + " 'ın Not ortalaması: " + parseInt(std2_average));

let nowYear = new Date().getFullYear(); //şu anki yılı al


let std1_birthYear = nowYear - std1BirthYear;
let std2_birthYear = nowYear - std2BirthYear;
console.log(typeof std1_birthYear); // doğum tarihi string olmasına rağmen number olarak çıktı verdi çünkü 2023 sayısı number
console.log(std1Name + " " + std1_birthYear + " yaşındadır.");
console.log(std2Name + " " + std2_birthYear + " yaşındadır.");
console.log(std2_average >= 50 ? "Geçti" : "Kaldı");


