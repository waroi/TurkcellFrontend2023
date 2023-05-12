const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector("#restartBtn");
const statusText = document.querySelector("#statusText");

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let winnerPlayer = "";
let gameActive = false;
let roundWon = false;

startGame();

function startGame() {
  gameActive = true;
  cells.forEach((cell) => {
    cell.addEventListener("click", cellClicked);
  });
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");
  if (options[cellIndex] !== "" || !gameActive) return;
  options[cellIndex] = currentPlayer;
  this.textContent = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s turn`;
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
    statusText.textContent = `${winnerPlayer} has won!`;
    gameActive = false;
  } else if (!options.includes("")) {
    statusText.textContent = `It's a draw!`;
    gameActive = false;
  }
}

function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  gameActive = true;
}
