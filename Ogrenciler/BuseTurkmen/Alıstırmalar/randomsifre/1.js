const charates = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-="
}
const getKey = [
    function upperCase() {
      return charates.upperCase[Math.floor(Math.random() * charates.upperCase.length)];
    },
    function lowerCase() {
      return charates.lowerCase[Math.floor(Math.random() * charates.lowerCase.length)];
    },
    function number() {
      return charates.number[Math.floor(Math.random() * charates.number.length)];
    },
    function symbol() {
      return charates.symbol[Math.floor(Math.random() * charates.symbol.length)];
    }
];
function generatePassword(){
    let passwordBox = document.getElementById("password");
    let length = document.getElementById("length").value;
    let symbol = document.getElementById("symbol").checked;
    let number = document.getElementById("number").checked;
    let upperCase = document.getElementById("upperCase").checked;
    let lowerCase = document.getElementById("lowerCase").checked;
    
    if(!symbol && !number && !upperCase && !lowerCase){
        alert("Kriterleri belirtiniz.");
        return;
    }

    if(!length){
        alert("Karakter sayısı belirtiniz.");
        return;
    }

    if(length < 1 ){
      alert("Karakter sayısı 0'dan büyük seçilmelidir.");
      return;
  }
    // if (length && symbol && number && upperCase && lowerCase === ""){
    //     alert("Kriterlerden birini seçiniz.");
    //     return;
    // }

    let password = "";
    while (length > password.length) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        let isChecked = document.getElementById(keyToAdd.name).checked;
        if (isChecked) {
            password += keyToAdd();
        }
    }
    passwordBox.innerHTML = password;
}
