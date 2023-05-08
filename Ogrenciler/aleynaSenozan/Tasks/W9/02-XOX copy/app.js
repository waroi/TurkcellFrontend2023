const game = document.getElementById('game');
const board = Array(9).fill(null);
const playerText = document.getElementById('player');
const restartButton = document.getElementById('restartBtn');
const startBtn = document.getElementById('startBtn');
let player = 'X';
let playerXName = '';
let playerOName = '';

startBtn.addEventListener('click', () => {
  playerXName = document.getElementById('playerX').value || 'X';
  playerOName = document.getElementById('playerO').value || 'O';
  player = 'X';
  playerText.textContent = `${playerXName}'nin sırası`;
  game.style.display = 'grid';
  document.querySelector('.player-info').style.display = 'none';

  Array.from({ length: 9 }).forEach(() => {
    const kutu = document.createElement('div');
    kutu.className = 'kutu';
    game.appendChild(kutu);
  });
});

game.addEventListener('click', (e) => {
  const kutu = e.target;
  const index = Array.from(game.children).indexOf(kutu);

  if (board[index] === null) {
    board[index] = player;
    kutu.textContent = player;
    let color = player === 'X' ? 'lightcoral' : 'aqua';
    kutu.style.color = color;

    if (player === 'X') {
      playerText.textContent = `${playerOName}'nin sırası`;
    } else {
      playerText.textContent = `${playerXName}'nin sırası`;
    }

    if (checkWin()) {
      playerText.textContent = player === 'X' ? `${playerXName} KAZANDI!` : `${playerOName} KAZANDI!`;
      Array.from(game.children).forEach((kutu) => {
        kutu.style.pointerEvents = 'none';
      });
      restartBtn();
    } else if (checkTie()) {
      playerText.textContent = "Berabere!";
      Array.from(game.children).forEach((kutu) => {
        kutu.style.pointerEvents = 'none';
      });
      restartBtn();
    } else {
      player = player === 'X' ? 'O' : 'X';
    }
  }
});


function checkWin() {
  //yatay
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== null) {
    return true;
  }
  if (board[3] === board[4] && board[4] === board[5] && board[3] !== null) {
    return true;
  }
  if (board[6] === board[7] && board[7] === board[8] && board[6] !== null) {
    return true;
  }
  //dikey
  if (board[0] === board[3] && board[3] === board[6] && board[0] !== null) {
    return true;
  }
  if (board[1] === board[4] && board[4] === board[7] && board[1] !== null) {
    return true;
  }
  if (board[2] === board[5] && board[5] === board[8] && board[2] !== null) {
    return true;
  }
  //çapraz
  if (board[0] === board[4] && board[4] === board[8] && board[0] !== null) {
    return true;
  }
  if (board[2] === board[4] && board[4] === board[6] && board[2] !== null) {
    return true;
  }
  return false;
}

function checkTie() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      return false;
    }
  }
  return true;
}

function restartBtn() {
  let restartBtn = document.createElement('button');
  restartBtn.textContent = 'Tekrar Oyna!';
  restartBtn.className = 'restartBtn';

  restartButton.appendChild(restartBtn);
  restartBtn.addEventListener('click', () => {
    window.location.reload();
  });
}
