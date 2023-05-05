const game = document.getElementById('game');
const board = Array(9).fill(null);
let player = 'X';


Array.from({ length: 9 }).forEach(() => {
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

    if (degistir()) {
      player = player === 'X' ? 'O' : 'X';
    } else {
      alert(`${player} Kazandı!`);
      location.reload();
    }
  }
});

//burada aslında kazandı kontrolü yapılması lazım ???
const degistir = () => true;

