// merhaba()
// function merhaba(){
//     console.log("Hiii")
// }

// function user(name = "Bilgi Yok", age = "Bilgi Yok") {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }
// function user(name, age) {
//   console.log(`İsim: ${name} Yaş: ${age}`);
// }

// user("Kazım", 13);
// user(); //name = "Bilgi Yok", age = "Bilgi Yok"
// user("", 15); // "",15

// function square(x) {
//   return x * x;
// }
// const result = square(3) * 7;
// console.log(result); //63

// ------------------------------------------- //

// const factorial = document.getElementById("factorial");
// const prime = document.getElementById("prime");
// const odd = document.getElementById("odd");
// const perfect = document.getElementById("perfect");
// const button = document.getElementById("buton");

// button.addEventListener("click", () => {
//     const inputValue = document.getElementById("sayi").value;

//   if (factorial.checked) {
//     factorialOp();
//   } else if (prime.checked) {
//     primeinputValue();
//   } else if (odd.checked) {
//     oddEven();
//   } else if (perfect.checked) {
//     perfectOp();
//   }

//   function factorialOp() {
//     let factor = 1;
//     let no = inputValue;
//     if (no < 0) {
//       console.log("Lütfen pozitif sayı giriniz");
//     } else {
//       for (let i = 1; i <= no; i++) {
//         factor = factor * i;
//       }
//     }
//     console.log("Faktöriyel : " + factor);
//   }
//   function primeinputValue() {}
//   function oddEven() {
//     if (inputValue % 2 == 0) {
//       console.log("Çift Sayı");
//     } else {
//       console.log("Tek Sayı");
//     }
//   }
//   function perfectOp() {}
// });

// --------------------------------------------------------------------------------------------------- //

// const database = {
//   host: "localhost",
//   add: function () {
//     console.log("added");
//   },
//   get: function () {
//     console.log("get");
//   },
//   update: function () {
//     console.log("updated");
//   },
//   delete: function () {
//     console.log("deleted");
//   },
// };

// console.log(database.host);
// database.add();
// database.get();
// database.update();
// database.delete(10);

//Arrow Fxn

const square = (x) => x * x;
console.log(square(5));
