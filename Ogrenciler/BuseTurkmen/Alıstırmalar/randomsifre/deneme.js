const characters = { 
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "^!$%&|[](){}:;.,*+-#@<>~"
};

const getKey = [
    function lowercase(){
        return characters.lowerCase[Math.floor(Math.random() * characters.lowerCase.length)];
    }
    function uppercase(){
        return characters.upperCase[Math.floor(Math.random() * characters.upperCase.length)];
    }
    function number(){
        return characters.number[Math.floor(Math.random() * characters.number.length)];
    }
    function symbol(){
        return characters.symbol[Math.floor(Math.random() * characters.symbol.length)];
    }
];

function createPassword(){
    const uppercase = document.getElementById('uppercasecheck').checked;
    const lowercase = document.getElementById('lowercascheck').checked;
    const numbers = document.getElementById('numbercheck').checked;
    const special = document.getElementById('specialcheck').checked;
    if (lenght && numbers && lowercase && uppercase && special === ""){
        alert("Kriterlerden birini seçiniz.");
        return;
    }
    const passwordBox = document.getElementById("addBtn");
    const lenght = document.getElementById('passwordlength');
    let password = "";
    while (length.value > password.length) {
        let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
        let isChecked = document.getElementById(keyToAdd.name).checked;
        if (isChecked) {
            password += keyToAdd();
        }
    newpassw.innerHTML = password;
    }
}