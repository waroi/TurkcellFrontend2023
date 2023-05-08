let curPlayer = document.querySelector(".currentPlayer");
let gameArea = document.querySelector("gameArea");
let box = document.querySelectorAll(".box");
let chooseType = document.querySelector("#chooseType");
let formButton = document.querySelector(".btn.btn-success");
let gameMode;
let buttonValue;

import { winControl } from "./app.js";

export let player = "X";

curPlayer.textContent = `${player} Start`;

export function playerVsComp(btnVal) {
  buttonValue = btnVal;
  box.forEach((item) => {
    item.addEventListener("click", () => paintArea(item));
  });
}

function paintArea(area) {
  console.log(area);
  if (area.textContent === "") {
    area.textContent = player;
    player === "X" ? (player = "O") : (player = "X");
    winControl();
    curPlayer.textContent = `Player ${player}`;
    if (player === "O" && buttonValue === "player-computer") {
      let emptyBoxes = Array.from(box).filter(
        (item) => item.textContent === ""
      );
      if (emptyBoxes.length > 0)
        paintArea(emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)]);
      // emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)].textContent =
      //   "O";
    }
  } else {
    area.style.border = "1px solid red";
    setTimeout(() => {
      console.log("asd");
      area.style.border = "1px solid gray";
    }, 1500);
  }
}
