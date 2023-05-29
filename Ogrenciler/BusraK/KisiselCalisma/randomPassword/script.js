const inputPassword = document.getElementById("password");
const generateButton = document.getElementsByClassName("btn1")[0];
const checkboxs = document.querySelectorAll(".checkbox");
const select = document.getElementById("select");

for (let i = 8; i < 21; i++) {
  select.innerHTML += `<option value=${i}>${i}</option>`;
}

console.log(select);
const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  "'",
  '"',
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
];

//event
generateButton.addEventListener("click", getRandomPassword);

function getRandomPassword() {
  let passwordLength = parseInt(select.value);

  inputPassword.value = "";
  let password = "";
  let selectedArrays = [];
  checkboxs.forEach((checkbox) => {
    if (checkbox.checked) {
      switch (checkbox.name) {
        case "lowercase":
          selectedArrays.push(lowercase);
          passwordLength -= 1;
          password += lowercase[Math.floor(Math.random() * lowercase.length)];
          break;
        case "uppercase":
          selectedArrays.push(uppercase);
          passwordLength -= 1;
          password += uppercase[Math.floor(Math.random() * uppercase.length)];
          break;
        case "numbers":
          selectedArrays.push(numbers);
          passwordLength -= 1;
          password += numbers[Math.floor(Math.random() * numbers.length)];
          break;
        case "symbols":
          selectedArrays.push(symbols);
          passwordLength -= 1;
          password += symbols[Math.floor(Math.random() * symbols.length)];
          break;
        default:
          throw new Error("Invalid input");
      }
    }
  });

  const combinedArray = selectedArrays.flat();
  if (combinedArray.length === 0) {
    return setTimeout(() => alert("en az bir tane checkbox seçiniz"), 300);
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * combinedArray.length);
    password += combinedArray[randomNumber];
  }

  inputPassword.value = shuffle(password);
}

const shuffle = (str) => [...str].sort(() => Math.random()).join("");
