// Function
// merhaba();
// function merhaba() {
//   console.log("Merhaba");
// }

//typcscriptte hangi tipte veri geldiğini de belirtmem gerekirdi ilerleyen süreçte göreceğiz

// function user(name, age) {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }
// user("Sueda", 24);
// user("Abdullah", 26);

// function user(name = 'Bilgi yok', age = 'Bilgi yok') {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }
// user("Sueda",);
// user();

// fonksiyonların dışarıya değer döndürmesi için return yaparız.
//ornek1
function square(x) {
  return x * x;
}

const sonuc = square(5) * 3;
console.log("Kare alma", sonuc);

//ornek2
function cube(x) {
  return x * x * x;
}
const sonuc2 = cube(5) + 10;
console.log("Küpünü al 10 ekle", sonuc2);


//
