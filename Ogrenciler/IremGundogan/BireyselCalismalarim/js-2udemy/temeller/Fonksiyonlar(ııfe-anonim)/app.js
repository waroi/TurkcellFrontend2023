// //FONKSİYON TANIMLAMA

// function merhaba(name="Bilgi Yok", age="Bilgi Yok") {
// //   if (typeof name === "undefined") name = "Bilgi Yok";
// //   if (typeof age === "undefined") age = "Bilgi Yok";

//   console.log(`isim ${name} Yaş: ${age}`);
// }

// merhaba(Mahmut, 22); //Foksiyon Çağrısı (Function Call)
// merhaba(Irem, 21);

// merhaba();

// merhaba("Kadir");

// function square(x) {
//   return x * x;
// }
// function cube(x) {
//   return x * x * x;
// }

// // let a = square(12);
// // a = cube(a);

// let a = cube(square(12));
// console.log(a);

// function merhaba() {
//   return "Merhaba";
// }
// console.log(merhaba());

//Function Expression

// const merhaba = function (name) {
//   console.log("Merhaba" + name);
// };

// merhaba("Mahmut")

//ımmediatly ınvoked funciton expression (ııfe)
// (function(name){
//     console.log("Merhaba:"+name);
// })

// const database = {
//   host: "localhost",
//   add: function () {
//     console.log("Eklendi");
//   },
//   get: function () {
//     console.log("Elde edildi");
//   },
//   update: function (id) {
//     console.log(`Id:${id} Güncellendi`);
//   },
//   delete: function (id) {
//     console.log(`Id:${id} Silindi`);
//   },
// };
// console.log(database.host);
// database.add();

// database.delete(10);
