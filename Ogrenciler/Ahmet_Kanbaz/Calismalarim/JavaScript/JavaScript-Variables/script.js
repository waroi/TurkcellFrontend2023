//Variables - Değişkenler

//Primitive Types

//String Değişkenleri
let firstName = "Ahmet KANBAZ";
console.log(firstName);
console.log(typeof firstName);

//Number Değişkenler - Sayısal
let age = 24;
console.log(age);
console.log(typeof age);

//Boolen Değişkenler - Mantıksal Değişkenler -> Sadece true/false değerler almaktadır.
let krediKullanımı = false;
console.log(krediKullanımı);
console.log(typeof krediKullanımı);

//undefined Değişkenler - Tanımsız
let phone;
console.log(phone);
console.log(typeof phone);

//null - Boş Değer
let isNull = null;
console.log(isNull);
console.log(typeof isNull);

//References Types -> Objects

//Array - Dizi
let liste = ["Ahmet", "Kanbaz", 24];
console.log(liste);
console.log(typeof liste);

//Object Literals
let address = {
  city: "Mersin",
  country: "Türkiye",
}

console.log(address);
console.log(typeof address);

//Functions - Fonksiyonlar
var hesapla = function() {
  return 0;
}

console.log(hesapla);
console.log(typeof hesapla);