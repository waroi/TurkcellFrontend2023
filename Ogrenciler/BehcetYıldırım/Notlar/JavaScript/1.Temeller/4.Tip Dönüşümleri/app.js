let value;
let deger;

// veri tiplerini stringe çevirme


value= String (123);
value= String (3.14);
value= String ([1,2,3,4]);

value= (10).toString();

console.log(value);
console.log(typeof value)

console.log("---------------------------------------")
// veri tiplerini sayılara çevirme

deger= Number("123");
deger=Number(null);
deger=Number(undefined);// undefined number'a çevrilmez. NaN uyarısı verir.
deger= Number("merhaba")// numbera çevirlmez.
deger=Number([1,2,3,4])// numbera çevrilmez.

// sadece string içerisinde sayı var ise ve null Number'a çevrilebilir.

deger= Number("3.14")
deger= parseFloat("3.14") // aynı işlemi yapar. number'a çevirir.


console.log(deger);
console.log(typeof deger)


console.log("---------------------------------------")

const a ="hello" +34;
console.log(a);
console.log(typeof a);