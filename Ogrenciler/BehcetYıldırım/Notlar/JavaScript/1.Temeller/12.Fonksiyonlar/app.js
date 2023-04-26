// Fonksiyon tanımlama

function merhaba(name,age){
    if(typeof name =="undefined") name = "bilgi yok"; 
    if(typeof age =="undefined")  age="bilgi yok";

    console.log(`isim: ${name} yaş:${age}`);
}
merhaba("behcet",23);
merhaba();
console.log("------------------------------------------------")
// merhaba fonksiyonunun daha kısa hali
function merhaba(name = "Bilgi yok",age="Bilgi yok"){

    console.log(`isim: ${name} yaş:${age}`);
}
merhaba("behcet",23);
merhaba("sait");
merhaba();

console.log("------------------------------------------------")

// Return 

function square(x){
    console.log(x*x);
}
function cube(x){
    console.log(x*x*x)
}
let a = square(12);
a = cube(a);
// burada square fonk.dan herhangi bir değer çıkmaz. yanlızca consolda 
// karesini yazdırır fakat yeni bir değer üretmez. Bu yüzden cube fonk.una
// gönderdiğimiz a değeri aslında undifined'dır.

console.log("------------------------------------------------")

function square2(x){
    console.log(x*x);
    return x*x;
}
function cube2(x){
    console.log(x*x*x)
}
let b = square2(12);
b = cube2(b);




