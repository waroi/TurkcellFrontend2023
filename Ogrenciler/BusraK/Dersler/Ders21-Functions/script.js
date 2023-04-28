// merhaba();
// function merhaba() {
//   console.log("marabayın");
// }
// merhaba(); //yukarida da olsa sorun yok calisir

// function user(name, yas) {
//   console.log(`İsim: ${name}  yaş: ${yas}`);
// }
// user("busbus", 22);
// user("kosnak", 23);

// function user(name = "bilgi yoook", age = "yas yoook") {
//   console.log(`İsim: ${name}  yaş: ${age}`);
// }
// user("busbus");
// user();

// function square(x) {
//   return x * x;
// }
// console.log(square(4));
// const sonuc = square(5) * 3;
// console.log(sonuc);

// const database = {
//   host: "localhost",
//   add: function () {
//     console.log("veri eklendi");
//   },
//   get: function () {
//     console.log("veri okundu");
//   },
//   update: function () {
//     console.log("veri güncellendi");
//   },
//   delete: function () {
//     console.log("veri silindi");
//   },
// };

// console.log(database.host);
// database.add();

// const kare = (x) => {
//   return x*x;
// }
// console.log(kare(5));

// const kare = (x) => x * x;
// console.log(kare(5));

//looooooops -döngüler

//while
// let i = 0;
// while (i < 10) {
//   console.log("merhabalaaar");
//   i++;
// }

// let i = 0;
// while (i < 10) {
//   if (i == 3 || i == 5) {
//     i++;
//     continue;
//   }
//   console.log(`deneme ${i}`);
//   i++;
// }

// let i = 0;
// do {
//   console.log(`deneme ${i}`);
//   i++;
// } while (i < 10);

//array map methodu

// const langs = ["python", "java", "c++", "php"];
// langs.map(function (x) {
//   console.log(x);
// });

// langs.map((x) => console.log(x)); for döngüsünden daha hızlı çalışır
const lengths = langs.map((x) => x.length);
console.log(lengths);

langs.map((x, i) => console.log(i, x));
