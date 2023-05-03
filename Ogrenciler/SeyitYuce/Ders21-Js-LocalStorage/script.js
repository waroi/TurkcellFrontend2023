// let userName = "123";

// // localStorage'a kaydetme

// userName = "Mahmure";
// localStorage.setItem("Kullanıcı Adı", userName);

// //LocalStrage'dan okuma
// let na_me = Number(localStorage.getItem("Kullanıcı Adı"));
// let name = localStorage.getItem("Kullanıcı Adı");

// console.log(name);

// let user = {
//   name: "Kazım",
//   age: 14,
// };

// localStorage.setItem("Kullanıcı", JSON.stringify(user));

// let userLocal = JSON.parse(localStorage.getItem("Kullanıcı"));
// console.log(userLocal);

let users=["Kazım","Ali","Veli"]

localStorage.setItem("Kullanıcılar",JSON.stringify(users))

let userslocal = JSON.parse(localStorage.getItem("Kullanıcılar"))

console.log(userslocal)