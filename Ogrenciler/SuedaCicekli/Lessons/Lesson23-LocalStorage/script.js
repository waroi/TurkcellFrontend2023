let userName = "Sueda";

// Local Storage'a kaydetme
localStorage.setItem("Kullanıcı Adı", userName);

// Local Storage'dan okuma
let name = localStorage.getItem("Kullanıcı Adı");
console.log(name);

