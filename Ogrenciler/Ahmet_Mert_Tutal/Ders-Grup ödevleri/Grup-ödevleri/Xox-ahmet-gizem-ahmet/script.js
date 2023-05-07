const playerText = document.querySelector('.player');
const box = document.querySelectorAll('#box');
const reset = document.getElementById('reset');
const winner = document.getElementById('winner');

let player = 'X';
let iconX = '<span class="bi bi-x fs-1"></span>';
let iconO = '<span class="bi bi-circle fs-1"></span>';

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

function checkWinner(winIcon) {
  for (let i=0; i<winningConditions.length-1; i++) {
    if (box[winningConditions[i][0]].innerHTML === winIcon &&
      box[winningConditions[i][1]].innerHTML === winIcon &&
      box[winningConditions[i][2]].innerHTML === winIcon) {
      winner.innerHTML = `<span>${winIcon}</span> Kazandı!`;
      winner.classList.add('text-success');
      box.forEach((item) => {
        item.removeEventListener('click', cardClick);
      });
    }
    else if (box[0].innerHTML !== '' && box[1].innerHTML !== '' && box[2].innerHTML !== '' && box[3].innerHTML !== '' && box[4].innerHTML !== '' && box[5].innerHTML !== '' && box[6].innerHTML !== '' && box[7].innerHTML !== '' && box[8].innerHTML !== '') {winner.innerHTML = `<span>Beraberlik</span>`;
    winner.classList.add('text-danger')
    box.forEach((item) => {
      item.removeEventListener('click', cardClick);
      item.classList.add('bg-danger');
    });}
  }
}


