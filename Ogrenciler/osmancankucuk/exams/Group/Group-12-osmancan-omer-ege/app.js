let curPlayer = document.querySelector(".currentPlayer");
let gameArea = document.querySelector("gameArea");
let box = document.querySelectorAll(".box");
let chooseType = document.querySelector("#chooseType");
let formButton = document.querySelector(".btn.btn-success");

import { playerVsPlayer, player, setPlayerX } from "./playerVsPlayer.js";
import { playerVsComp} from "./playerVsComp.js";

formButton.addEventListener("click", () => {
  chooseType.classList.toggle("hidden");
});

chooseType.addEventListener("submit", (e) => {
  console.log(e);
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  e.preventDefault();
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      if (radioButton.value === "player-computer") {
        playerVsComp();
      } else {
        playerVsPlayer();
      }
      return;
    }
  }
});
export function winControl() {
  if (hasWon()) {
    alert(`${player === "X" ? "O" : "X"} kazandi`);
    restartGame();
  } else {
    checkTie();
  }
}

function checkTie() {
  let isDone = false;
  isDone = Array.from(box).every((item) => {
    if (item.textContent === "") {
      return false;
    }
    return true;
  });
  if (isDone) {
    alert("tie");
    restartGame();
  }
}

function hasWon() {
  let row1 =
    box[0].textContent === box[1].textContent &&
    box[1].textContent === box[2].textContent &&
    box[0].textContent !== "";

  let row2 =
    box[3].textContent === box[4].textContent &&
    box[4].textContent === box[5].textContent &&
    box[3].textContent !== "";

  let row3 =
    box[6].textContent === box[7].textContent &&
    box[7].textContent === box[8].textContent &&
    box[6].textContent !== "";

  let column1 =
    box[0].textContent === box[3].textContent &&
    box[3].textContent === box[6].textContent &&
    box[0].textContent !== "";

  let column2 =
    box[1].textContent === box[4].textContent &&
    box[4].textContent === box[7].textContent &&
    box[1].textContent !== "";

  let column3 =
    box[2].textContent === box[5].textContent &&
    box[5].textContent === box[8].textContent &&
    box[2].textContent !== "";

  let diag1 =
    box[0].textContent === box[4].textContent &&
    box[4].textContent === box[8].textContent &&
    box[0].textContent !== "";

  let diag2 =
    box[2].textContent === box[4].textContent &&
    box[4].textContent === box[6].textContent &&
    box[2].textContent !== "";
  console.log(row1, row2, row3, column1, column2, column3, diag1, diag2);

  return (
    row1 || row2 || row3 || column1 || column2 || column3 || diag1 || diag2
  );
}

export function restartGame() {
  setPlayerX();
  box.forEach((item) => {
    item.classList.toggle("unclickable");
    console.log(player);

    setTimeout(() => {
      item.textContent = "";
      item.classList.toggle("unclickable");
    }, 3000);
  });
}
