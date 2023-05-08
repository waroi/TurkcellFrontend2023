let curPlayer = document.querySelector(".currentPlayer");
let gameArea = document.querySelector("gameArea");
let box = document.querySelectorAll(".box");
let chooseType = document.querySelector("#chooseType");
import { winControl } from "./app.js";

export let player = "X";

let elementRankArray = [0,0,0,0,0,0,0,0,0];


// export function playerVsComp() {
//   Array.from(box).every((item) => {
//   item.addEventListener("click", (e) => {
//     if (item.textContent == "") {
//     item.textContent = player;
//     computerTurn();
//   }
//   })
//   })
// }
//
curPlayer.textContent = `${player} Start`;

export function playerVsComp() {
  box.forEach((item,index) => {
    item.addEventListener("click", (e) => paintArea(item,index));
  });
}
export function setPlayerX() {
  player = "X";
}
function paintArea(area,i) {
  if (area.textContent === "") {
    area.textContent = player;
    player === "X" ? (player = "O") : (player = "X");
    computerTurn(player);
    elementRankArray[i] = -1;
    console.log(elementRankArray);
    winControl();
    // console.log(area);
    curPlayer.textContent = `Player ${player}`;
  } else {
    area.style.border = "1px solid red";
    setTimeout(() => {
      // console.log("asd");
      area.style.border = "1px solid gray";
    }, 1500);
  }
}
function computerTurn(player) {
  if(player == "O"){
    let x = getNumber();
    box[x].click();
  }
  }

function getNumber(){
  let sorted = Array.from(elementRankArray);
  sorted.sort((a,b) => b-a);
  console.log(sorted);
  let findBoxIndex = elementRankArray.findIndex((element) => element === sorted[0]);
  return findBoxIndex;
  }

