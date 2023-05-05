const game = document.getElementById('game');
const board = Array(9).fill(null);
let currentPlayer = 'X';


for (let i = 0; i < 9; i++) {
    const kutu = document.createElement('div');
    kutu.className = 'kutu';
    game.appendChild(kutu);
}
  

game.addEventListener('click', (e) => {
  const kutu = e.target;
  const index = Array.from(game.children).indexOf(kutu);

  if (board[index] === null) {
    board[index] = currentPlayer;
    kutu.textContent = currentPlayer;

    if (degistir()) {
      alert(`${currentPlayer} Kazandı!`);
      location.reload();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
});

function degistir() {
  return false;
}
