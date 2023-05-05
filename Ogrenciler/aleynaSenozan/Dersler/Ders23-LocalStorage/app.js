// let userName = "Varol";

// // Local Storage'a kaydetme
// localStorage.setItem("Kullanıcı Adı", userName);

// // Local Storage'dan okuma
// let name = localStorage.getItem("Kullanıcı Adı");

// console.log(name);

// let userName = 44;

// // Local Storage'a kaydetme
// localStorage.setItem("Kullanıcı Adı", userName);

// // Local Storage'dan okuma
// let name = Number(localStorage.getItem("Kullanıcı Adı"))

// console.log(name);
// console.log(typeof name);

// let user={
//     name:"Varol",
//     age:44
// }

// // Local Storage'a kaydetme
// localStorage.setItem("Kullanıcı", JSON.stringify(user));

// // Local Storage'dan okuma
// let userLocal = JSON.parse(localStorage.getItem("Kullanıcı"))

// console.log(userLocal);

let users= ["Varol","Yusuf","Mehmet"]

// Local Storage'a kaydetme
localStorage.setItem("Kullanıcı", JSON.stringify(users));

// Local Storage'dan okuma
let usersLocal = JSON.parse(localStorage.getItem("Kullanıcı"))

console.log(usersLocal);
