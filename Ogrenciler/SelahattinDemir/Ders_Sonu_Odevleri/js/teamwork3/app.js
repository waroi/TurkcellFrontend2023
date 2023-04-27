(function () {
  let screen = document.getElementById("screen");
  let buttons = document.querySelectorAll(".number");
  let plusBtn = document.getElementById("plus");
  let minusBtn = document.getElementById("minus");
  let multiplyBtn = document.getElementById("multiply");
  let divideBtn = document.getElementById("divide");
  let equalBtn = document.getElementById("equ");
  let clearBtn = document.querySelector(".btn-danger");

  let firstNumber = 0;
  let secondNumber = 0;
  let operator = "";
  let result = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      let number = this.dataset.num;
      screen.value += number;
    });
  });

  plusBtn.addEventListener("click", function () {
    firstNumber = screen.value;
    operator = "+";
    screen.value = `${firstNumber}${operator}`;
  });
  minusBtn.addEventListener("click", function () {
    firstNumber = screen.value;
    operator = "-";
    screen.value = `${firstNumber}${operator}`;
  });
  multiplyBtn.addEventListener("click", function () {
    firstNumber = screen.value;
    operator = "*";
    screen.value = `${firstNumber}${operator}`;
  });
  divideBtn.addEventListener("click", function () {
    firstNumber = screen.value;
    operator = "/";
    screen.value = `${firstNumber}${operator}`;
  });
  equalBtn.addEventListener("click", function () {
    screen.value = screen.value.split(operator)[1];
    console.log(screen.value);
    secondNumber = screen.value;
    console.log(secondNumber);

    if (operator === "+") {
      result = Number(firstNumber) + Number(secondNumber);
    } else if (operator === "-") {
      result = Number(firstNumber) - Number(secondNumber);
    } else if (operator === "*") {
      result = Number(firstNumber) * Number(secondNumber);
    } else if (operator === "/") {
      secondNumber = 0
        ? (screen.value = "Sıfıra bölünemez!")
        : (result = Number(firstNumber) / Number(secondNumber));
    }
    screen.value = result;
  });
  clearBtn.addEventListener("click", function () {
    if (screen.value === "") {
      alert("Lütfen bir işlem giriniz!");
    } else {
      screen.value = "";
    }
  });

})();


// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     let number = this.dataset.num;
//     screen.value += number;
//     console.log(firstNumber);
//   });
// });

// plusBtn.addEventListener("click", function () {
//   firstNumber = screen.value;
//   equalBtn.addEventListener("click", function () {
//     secondNumber = screen.value;
//     screen.value = Number(firstNumber) + Number(secondNumber);
//   });
// });
// minusBtn.addEventListener("click", function () {
//   firstNumber = screen.value;
//   screen.value = "";
//   equalBtn.addEventListener("click", function () {
//     secondNumber = screen.value;
//     screen.value = Number(firstNumber) - Number(secondNumber);
//   });
// });
// multiplyBtn.addEventListener("click", function () {
//   firstNumber = screen.value;
//   screen.value = "";
//   equalBtn.addEventListener("click", function () {
//     secondNumber = screen.value;
//     screen.value = Number(firstNumber) * Number(secondNumber);
//   });
// });
// divideBtn.addEventListener("click", function () {
//   firstNumber = screen.value;
//   screen.value = "";
//   equalBtn.addEventListener("click", function () {
//     secondNumber = screen.value;
//     screen.value = Number(firstNumber) / Number(secondNumber);
//   });
// });
// clearBtn.addEventListener("click", function () {
//   if (screen.value === "") {
//     alert("Lütfen bir işlem giriniz!");
//   } else {
//     screen.value = "";
//   }
// });
