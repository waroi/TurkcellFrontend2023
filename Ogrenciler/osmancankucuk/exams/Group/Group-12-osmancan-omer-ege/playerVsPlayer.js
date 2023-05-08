let curPlayer = document.querySelector(".currentPlayer");
let gameArea = document.querySelector("gameArea");
let box = document.querySelectorAll(".box");
let chooseType = document.querySelector("#chooseType");
import { winControl } from "./app.js";

export let player = "X";

curPlayer.textContent = `${player} Start`;

export function playerVsPlayer() {
  box.forEach((item) => {
    item.addEventListener("click", () => paintArea(item));
  });
}
export function setPlayerX() {
  player = "X";
}
function paintArea(area) {
  console.log(area);
  if (area.textContent === "") {
    area.textContent = player;
    player === "X" ? (player = "O") : (player = "X");
    winControl(player);
    curPlayer.textContent = `Player ${player}`;
  } else {
    area.style.border = "1px solid red";
    setTimeout(() => {
      console.log("asd");
      area.style.border = "1px solid gray";
    }, 1500);
  }
}
