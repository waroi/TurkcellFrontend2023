const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

const scissors = document.createElement("i");
scissors.classList = "fa-solid fa-hand-scissors";
const rock = document.createElement("i");
rock.classList = "fa-regular fa-hand-back-fist";

const winConditions = [
  //Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //Diagonal
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = rock;
let winnerPlayer;
let gameActive = false;
let roundWon = false;

startGame();

function startGame() {
  gameActive = true;
  cells.forEach((cell) => {
    cell.addEventListener("click", cellClicked);
  });
  restartBtn.addEventListener("click", restartGame);
  statusText.appendChild(currentPlayer);
  statusText.appendChild(document.createTextNode(`'s turn`));
}
function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  if (options[cellIndex] !== "" || !gameActive) return;
  options[cellIndex] = currentPlayer;

  console.log(this);
  // console.log(this.innerHTML);
  // console.log(currentPlayer);
  // console.log(currentPlayer.outerHTML);

  this.innerHTML = currentPlayer.outerHTML;
  currentPlayer = currentPlayer === rock ? scissors : rock;
  statusText.textContent = "";
  statusText.appendChild(currentPlayer);
  statusText.appendChild(document.createTextNode(`'s turn`));
  checkWin(roundWon);
}

function checkWin(roundWon) {
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA === "" || cellB === "" || cellC === "") continue;

    if (cellA === cellB && cellB === cellC) {
      roundWon = true;
      winnerPlayer = cellA;
      break;
    }
  }
  if (roundWon) {
    statusText.innerHTML = `${winnerPlayer.outerHTML} has won!`;
    gameActive = false;
  } else if (!options.includes("")) {
    statusText.textContent = `It's a draw!`;
    gameActive = false;
  }
}

function restartGame() {
  currentPlayer = rock;
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = "";
  statusText.appendChild(currentPlayer);
  statusText.appendChild(document.createTextNode(`'s turn`));
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  gameActive = true;
}
