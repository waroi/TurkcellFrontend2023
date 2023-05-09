const game = document.getElementById("game");
const board = Array(9).fill(null);
const playerText = document.getElementById("player");
const restartButton = document.getElementById("restartBtn");
const startGame = document.getElementById("startgame");
const hintText = document.getElementById("hint");
const statusArea = document.getElementById("status");
const siraText = document.getElementById("siraText");
let player = "X";
let player1Name;
let player2Name;

startGame.addEventListener("click", startGamexox);

function startGamexox() {
  player1Name = document.getElementById("player1").value;
  player2Name = document.getElementById("player2").value;
  if (player1Name === "" || player2Name === "") {
    alert("Lütfen Oyuncu İsimlerini Giriniz");
    return;
  }
  hintText.textContent = "Oyun Başladı";
  statusArea.style.display = "block";
  document.getElementById("player").textContent = `${player1Name} (X)`;
  Array.from({ length: 9 }).map(() => {
    const kutu = document.createElement("div");
    kutu.className = "kutu";
    game.appendChild(kutu);
  });
  startGame.style.display = "none";
}

game.addEventListener("click", (e) => {
  const kutu = e.target;
  const index = Array.from(game.children).indexOf(kutu);
  if (board[index] === null) {
    board[index] = player;
    kutu.textContent = player;
    let color = player === "X" ? "rgb(175, 92, 128)" : "rgb(30, 74, 124)";
    kutu.style.color = color;

    playerText.textContent =
      player === "X" ? `${player2Name} (O)` : `${player1Name} (X)`;

    if (checkWin()) {
      siraText.textContent =
        player === "X" ? `${player1Name} Kazandı` : `${player2Name} Kazandı`;
      Array.from(game.children).map((kutu) => {
        kutu.style.pointerEvents = "none";
      });
      restartBtn();
    } else if (checkTie()) {
      siraText.textContent = "Berabere !";
      Array.from(game.children).map((kutu) => {
        kutu.style.pointerEvents = "none";
      });
      restartBtn();
    } else {
      player = player === "X" ? "O" : "X";
    }
  }
});

function checkWin() {
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

  return winConditions.some(([a, b, c]) => {
    return board[a] !== null && board[a] === board[b] && board[b] === board[c];
  });
}

function checkTie() {
  return board.every((cell) => cell !== null);
}

function restartBtn() {
  let restartBtn = document.createElement("button");
  restartBtn.textContent = "Tekrar Oyna!";
  restartBtn.className = "restartBtn";
  restartButton.appendChild(restartBtn);
  restartBtn.addEventListener("click", () => {
    window.location.reload();
  });
}
