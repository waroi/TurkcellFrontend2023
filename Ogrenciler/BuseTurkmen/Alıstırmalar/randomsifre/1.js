const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-="
}
const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
];
function generatePassword(){
    let passwordBox = document.getElementById("password");
    let length = document.getElementById("length").value;
    let symbol = document.getElementById("symbol").checked;
    let number = document.getElementById("number").checked;
    let upperCase = document.getElementById("upperCase").checked;
    let lowerCase = document.getElementById("lowerCase").checked;
    
    if(!length && !symbol && !number && !upperCase && !lowerCase){
        alert("Kriterleri belirtiniz.");
        return;
    }

    if(!length){
        alert("Karakter sayısı belirtiniz.");
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
