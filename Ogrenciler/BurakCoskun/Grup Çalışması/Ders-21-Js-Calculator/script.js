let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
let operators = Array.from(document.getElementsByClassName("operator"));
const equals = document.getElementById("equal");
const cleans = document.querySelector(".clean");

let calculate = true;
let firstNumber = "";
let secondNumber = "";
let operator1 = "";
let result = "";

calculation();

function calculation() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (calculate == false) {
        display.innerText = "";
        calculate = true;
      }
      display.innerText += button.innerText;
    });
  });

  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      if (operator1 == "") {
        firstNumber = display.innerText;
        display.innerText = "";
        operator1 = operator.innerText;
      } else {
        secondNumber = display.innerText;
      }
    });
  });

  equals.addEventListener("click", () => {
    if (operator1 == "+") {
      result = Number(firstNumber) + Number(secondNumber);
    } else if (operator1 == "-") {
      result = Number(firstNumber) - Number(secondNumber);
    } else if (operator1 == "*") {
      result = Number(firstNumber) * Number(secondNumber);
    } else if (operator1 == "/") {
      result = Number(firstNumber) / Number(secondNumber);
    }
    display.innerText = result;
    setTimeout(() => {
      let input = prompt("Do you want to continue? (y/n)");
      if (input == "y") {
        display.innerText = "";
        firstNumber = "";
        secondNumber = "";
        operator1 = "";
        result = "";
      } else {
        calculate = false;
        display.innerText = "";
        firstNumber = "";
        secondNumber = "";
        operator1 = "";
        result = "";
        display.innerText = "Thank you for using our calculator";
      }
    }, 500);
  });

  cleans.addEventListener("click", () => {
    display.innerText = "";
    firstNumber = "";
    secondNumber = "";
    operator1 = "";
    result = "";
  });
}
