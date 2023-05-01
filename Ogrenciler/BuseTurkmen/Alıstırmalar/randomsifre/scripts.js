const lenght = document.getElementById('passwordlength').value;
const uppercase = document.getElementById('uppercasecheck').checked;
const lowercase = document.getElementById('lowercascheck').checked;
const numbers = document.getElementById('numbercheck').checked;
const special = document.getElementById('specialcheck').checked;

document.getElementById("addbtn").innerHTML = password

generatePassword();

function generatePassword(lenght, uppercase, lowercase, number, special){
    let characters = "";
    addbtn.addEventListener('submit', addbtn);
    if (numbers){
        characters = "0123456789";
    }
    if (lowercase){
        characters = "abcdefghijklmnopqrstuvyzwx";
    }
    if (uppercase){
        characters = "ABCDEFGHIJKLNOPQRSTUVYZWX";
    }
    if (special){
        characters = "*/+-?()[]{}=&%$";
    }
    if (lenght && numbers && lowercase && uppercase && special === ""){
        alert("Kriterlerden birini seçiniz.")
    }
    while(lenght || numbers || lowercase || uppercase || special === "$checked"){
        const characters = characters[Math.floor(Math.random()*characters.lenght)];
        password.push(characters)
    }
}