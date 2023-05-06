const game = document.getElementById('game');
const board = Array(9).fill(null);
const playerText = document.getElementById('player');
const restratButton = document.getElementById('restartBtn');
let player = 'X';


// Oyuna Başlarken Kullanıcıdan Oyuncu İsimleri alınabilir. X ve O yerine isimler yazılabilir.


Array.from({ length: 9 }).map(() => {
  const kutu = document.createElement('div');
  kutu.className = 'kutu';
  game.appendChild(kutu);
});

game.addEventListener('click', (e) => {
  const kutu = e.target;
  const index = Array.from(game.children).indexOf(kutu);

  if (board[index] === null) {
    board[index] = player;
    kutu.textContent = player;
    let color = player === 'X' ? 'lightcoral' : 'aqua';
    kutu.style.color = color;

    playerText.textContent = player === 'X' ? "O'nun sırası" : "X'in sırası";


    if (checkWin()) {
      playerText.textContent = player === 'X' ? "X KAZANDI !" : "O KAZANDI !";
      Array.from(game.children).map((kutu) => {
        kutu.style.pointerEvents = 'none';
      });
      restartBtn();
    } else if (checkTie()) {
      playerText.textContent = "Berabere !";
      Array.from(game.children).map((kutu) => {
        kutu.style.pointerEvents = 'none';
      });
      restartBtn();
    }
    else {
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

  restratButton.appendChild(restartBtn);
  restartBtn.addEventListener('click', () => {
    window.location.reload();
  });
}