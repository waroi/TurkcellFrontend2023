const playerText = document.querySelector('.player');
const box = document.querySelectorAll('#box');
const reset = document.getElementById('reset');
const winner = document.getElementById('winner');

let player = 'X';
let iconX = '<span class="bi bi-x text-warning"></span>';
let iconO = '<span class="bi bi-circle text-primary"></span>';

startGame();

function startGame() {
  winner.innerHTML = '';
  playerText.innerHTML = `<span>Sıradaki oyuncu: </span> ${player}`; 
}

eventListeners();

function eventListeners() {
  box.forEach((item) => {
    item.addEventListener('click', cardClick);
  });
  reset.addEventListener('click', resetGame);
}

function cardClick(e) {
  if (e.target.id==='box'&& e.target.innerHTML === '') {
    if (player === 'X') {
      e.target.innerHTML = iconX;
    } else {
      e.target.innerHTML = iconO;
    }
    checkWinner(e.target.innerHTML);
    changePlayer();

  
  }
}

function changePlayer() {
  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
  playerText.innerHTML = `<span>Sıradaki oyuncu: </span> ${player}`;
}

function resetGame() {
  if (confirm('Oyunu yeniden başlatmak istediğinize emin misiniz?')) {
    box.forEach((item) => {
      item.innerHTML = '';
      item.addEventListener('click', cardClick);
      item.classList.remove('bg-danger');
      item.classList.remove('bg-success');
    });
    player = 'X';
    startGame();
  }
}
let winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function changePlayerText(win, draw) {
  winner.classList.remove(draw);
  winner.classList.add(win);
}

function checkWinner(winIcon) {
  let allBoxesFilled = true;

  for (let i = 0; i < winningConditions.length; i++) {
    if (
      box[winningConditions[i][0]].innerHTML === winIcon &&
      box[winningConditions[i][1]].innerHTML === winIcon &&
      box[winningConditions[i][2]].innerHTML === winIcon
    ) {
      winner.innerHTML = `<span>${winIcon}</span> Kazandı!`;
      changePlayerText("text-success","text-danger");
      box[winningConditions[i][0]].classList.add("bg-success");
      box[winningConditions[i][1]].classList.add("bg-success");
      box[winningConditions[i][2]].classList.add("bg-success");
      box.forEach((item) => {
        item.removeEventListener("click", cardClick);
              });
      return;
    }
  }

  for (let i = 0; i < box.length; i++) {
    if (box[i].innerHTML === "") {
      allBoxesFilled = false;
      break;
    }
  }

  if (allBoxesFilled) {
    winner.innerHTML = `<span>Beraberlik</span>`;
    changePlayerText("text-danger","text-success");
    box.forEach((item) => {
      item.removeEventListener("click", cardClick);
      item.classList.add("bg-danger");
    });
  }
}





