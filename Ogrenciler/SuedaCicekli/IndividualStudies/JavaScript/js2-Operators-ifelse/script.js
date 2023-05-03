
let sonuc;
let a = 10, b = 5, c = 2, d = 10;
// Aritmetik operatorler
// +, -, *, /, %, ++, -- vb. 
sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = a % b;
sonuc = a++;
// console.log(a); ile a'nin degerini gorebiliriz.
sonuc = ++b; // direk console.log(sonuc) ile sonucu gorebiliriz.


// Atama Operatorleri
// =, +=, -=, *=, /=, %=, **= vb.

sonuc = a;
console.log("Son sonuç " + sonuc);
sonuc += c; // sonuc = sonuc + c; sonuç 13 olur
sonuc -= c; // sonuc = sonuc - c; 13 - 2 = 11 olur
sonuc *= c; // sonuc = sonuc * c; 11 * 2 = 22 olur
sonuc /= c; // sonuc = sonuc / c; 22 / 2 = 11 olur
sonuc %= c; // sonuc = sonuc % c; 11 % 2 = 1 olur


// Karsilastirma Operatorleri
// ==, ===, !=, !==, >, <, >=, <= vb.
sonuc = (a == b); // a b ye eşit mi sorusunu sormuş oluruz sonuç boolean döner
sonuc = (a === b); // a b ye eşit mi ve aynı tipte mi sorusunu sormuş oluruz sonuç boolean döner
sonuc = (a != b); // a b ye eşit değil mi sorusunu sormuş oluruz sonuç boolean döner
sonuc = (3 === "3"); // false döner çünkü aynı tipte değiller
sonuc = (a > b); // a b den büyük mü sorusunu sormuş oluruz sonuç boolean döner
sonuc = (a < b); // a b den küçük mü sorusunu sormuş oluruz sonuç boolean döner 
sonuc = (a >= b); // a b den büyük veya eşit mi sorusunu sormuş oluruz sonuç boolean döner

console.log(sonuc);

// Mantiksal Operatorler
// &&, ||, !

// if else koşullu ifadeleri
let deger1 = 10;
let deger2 = 20;
if (deger1 < deger2) {
  console.log("Değer1 değer 2 den küçüktür");
}

if (3 > 4) {
  console.log("3 4 ten büyüktür");
} console.log("3 4 ten büyük değildir");

// kullanıcı login mi


// let isLoggedin = true;
// //let isLoggedin = false;
// if (isLoggedin) {
//   console.log("Kullanıcı giriş yaptı");
// } else {
//   console.log("Kullanıcı giriş yapmadı");
// }

// if (!isLoggedin) {
//   console.log("Kullanıcı giriş yapmadı");
// } // !isLoggedin diyerek tersini  almış oluyoruz yani artık false için bakıyoruz

//kullanıcıdan alınan bilgiler ile login kontrolü
// let userName = "Sueda";
// let isLoggedin = (userName == "sdcckli"); // isloggein false olur çünkü userName sdcckli değil 

// if (isLoggedin) {
//   console.log("Başarılı giriş");
// } else {
//   console.log("Başarısız"); // false olduğu için başarısız olur
// }

//3. örnek 
// let userName = "sdcckli";
// let password = "123456";

// if (userName == "sdcckli") {
//   if (password == "123456") {
//     console.log("Başarılı giriş");
//   } else {
//     console.log("şifre hatalı");
//   }
// }
// else {
//   console.log("kullanıcı adı hatalı"); // false olduğu için başarısız olur
// }

//mantıksal operatorleri
//yas >= 18
// mezuniyet == "lise" yada mezuniyet == "üniversite"

// let mezuniyet = "üniversite";
// let yas = 23;

// if (yas >= 18 && mezuniyet == "lise") {
//   console.log("Ehliyet alabilir");
// }else {
//   console.log("Ehliyet alamaz");
// };

// and operatorü 
// true && true = true
// true && false = false

// || or operatorü

// let mezuniyet = "üniversite";
// let yas = 23;

// if (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")) {
//   console.log("Ehliyet alabilir");
// } else {
//   console.log("Ehliyet alamaz");
// }

// or operatorü
// true || true = true
// true || false = true
// false || false = false


/****************************************************************/
//if else uygulaması

//1. Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.
//2. Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
//3. x,y,z sayılarının büyüklük karşılaştırmasını yapınız. (else if araştırınız)

//1. soru
let sayi = 20;
if (sayi > 10 && sayi < 50) {
  console.log("Verilen sayı 10 ile 50 arasındadır.")
} else {
  console.log("Sayı 10 ile 50 arasında değildir.")
}

//2.soru
let tekSayi = -9;

if (tekSayi % 2 == 1 && tekSayi > 0) {
  console.log("Bu sayı pozitif tek sayıdır")
} else {
  console.log("Pozitif tek sayı değildir")
}

//3. soru else if yapısı ile 
let x = 10, y = 20, z = 30;

if (x > y && x > z) {
  console.log("X en büyük")
} else if (y > x && y > z) {
  console.log("Y en büyük")
} else if (z > x && z > y) {
  console.log("Z en büyük")
} else {
  console.log("Sayılar eşittir")
}
//4. 2 vize 1 final notuna göre hesaplanan ortalama için 
// a- eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazdırın
// b-Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
// c-Finalden 70 alındığında ortalamanın 50'nin altında olsa bile dersten geçilsin

let vize1 = 10;
let vize2 = 10;
let final = 70;
let ortalama = (vize1 + vize2) / 2 * 0.4 + final * 0.6 // vize notlarının ortalamasının yüzde kırkı ile finalin yüzde 60'ı
console.log(ortalama)

if (ortalama >= 50 && final >= 50) {
  console.log("Dersi geçtiniz")
} else if (final >= 70) {
  console.log("Final notunuz 70 ve üstü olduğu için dersi geçtiniz")
}
else {
  console.log("Dersten kaldınız")
}
