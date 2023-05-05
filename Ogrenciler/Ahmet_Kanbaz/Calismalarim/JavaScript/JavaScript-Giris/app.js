console.log("Hello JavaScript");
console.log(140299);
console.error("Bu bir hata mesajıdır.");
console.warn("Bu bir uyarı mesajıdır.");
alert("Sayfa bulunamadı.");

document.write("JavaScript'den gelen deneme yazısı...");
document.write("<br>Br tag'ı ile yeni satır");
document.write("<h1>Horizontal rule tag'ı ile yeni satır</h1>");

Değişkenler
var password;

console.log(password);

password = "ahmetkanbaz";
console.log(password);

yas = 24;
console.log(yas);

//Değişken Tanımlama Kuralları
//var 1yas; //Yanlış tanımlama. Değişken isimleri rakam ile başlayamaz.
var yas1; //Doğru tanımlama

//var while; //Yanlış tanımlama. Değişken isimleri keyword (komutlar) olamaz.

//var ad soyad; //Yanlış tanımlama. Değişken isimleri boşluk içeremez.
var adSoyad; //Doğru tanımlama

var diğerAd; //Yanlış tanımlama. Değişken isimleri Türkçe karakter içeremez.
var digerAd; //Doğru tanımlama

const emailAdress = "ahmetkanbaz@gmail.com";
console.log(emailAdress);
emailAdress = "kanba@gmail.com"; //Yanlış tanımlama. const ile tanımlanan değişkenlerin değeri değiştirilemez.
console.log(emailAdress);