const btns = document.querySelectorAll(".button");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");
let nowPlayer = "X";
let winnerPlayer = "";
let play = ["", "", "", "", "", "", "", "", ""];
let winOptions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

reset.addEventListener("click", resetAll);
function resetAll() {
  console.log("resett");
  play = ["", "", "", "", "", "", "", "", ""];
  btns.forEach((btn) => {
    btn.innerHTML = "";
    result.innerHTML = "";
    btn.value = "";
    btn.disabled = false;
    btn.classList.remove("bg-danger");
    btn.classList.remove("bg-primary");
  });
  nowPlayer = "X";
  result.innerHTML = `player x sırası`;
}
XOX();
function XOX() {
  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      selectPlayer(btn, index);
    });
  });
}

function selectPlayer(btn, index) {
  if (btn.innerHTML == "") {
    btn.innerHTML = nowPlayer;
    play[index] = nowPlayer;
    if (nowPlayer == "X") {
      nowPlayer = "O";
      btn.classList.add("bg-danger");
    } else {
      nowPlayer = "X";
      btn.classList.add("bg-primary");
    }

    result.innerHTML = `Sıra ${nowPlayer} da`;

    isWinner();
  }
}

function isWinner() {
  let winControl = false;
  for (let i = 0; i < winOptions.length; i++) {
    let winOption = winOptions[i]; //3,4,5
    let first = play[winOption[0]]; //X
    let second = play[winOption[1]]; //X
    let third = play[winOption[2]]; //X
    if (first == "" || second == "" || third == "") {
      continue;
    }
    if (first == second && second == third) {
      winControl = true;
      winnerPlayer = first;
      break;
    }
  }
  if (winControl) {
    result.innerHTML = `${winnerPlayer} kazandı`;
    btns.forEach((btn) => {
      btn.disabled = true;
    });
  } else if (!play.includes("")) {
    result.innerHTML = `berabere`;
    btns.forEach((btn) => {
      btn.disabled = true;
    });
  }
}
