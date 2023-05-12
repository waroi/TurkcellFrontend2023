const board = document.querySelector('.table');
const infoLabel = document.querySelector('h1');
let flip = false; // false = X, true = O
let count = 0; // 9 = draw berabere

let startGame = () => {
  board.innerHTML = ''; // boardu temizliyoruz
  infoLabel.textContent = ''; // infoLabelı temizliyoruz
  count = 0; // countu sıfırlıyoruz
  board.style.pointerEvents = 'all'; // tıklamayı açıyoruz

    for (let i=1; i<=9; i++) {
      let square = document.createElement('div');
      square.classList.add('square');
      board.appendChild(square);
    }

    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(item => {
      item.addEventListener('click', (e) => {
        if (!flip){
          let sign= document.createElement('div');
          sign.classList.add('cross');
          e.target.style.pointerEvents = 'none'; // click eventini kapatıyoruz
          e.target.appendChild(sign); // e.target = tıklanan div
          check(); // kazanan var mı diye kontrol ediyoruz
          flip = true; // sıra O'ya geçti
        }
        else{
          let sign = document.createElement('div');
          sign.classList.add('circle');
          e.target.style.pointerEvents = 'none';
          e.target.appendChild(sign);
          check();
          flip = false; 
        }
      });
    }) 
};

const check = () => {
  const allSquares = document.querySelectorAll('.square');
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  count++; // her tıklamada count 1 artıyor
  winningCombinations.forEach(pair => {
    let crossWin = pair.every(item => allSquares[item].children[0]?.classList.contains('cross')); // every = her bir eleman için kontrol ediyoruz

    let circleWin = pair.every(item => allSquares[item].children[0]?.classList.contains('circle')); // every = her bir eleman için kontrol ediyoruz

    if (crossWin){
      infoLabel.textContent = 'CROSS WON THE GAME !!';
      board.style.pointerEvents = 'none'; // oyun bittiğinde tıklamayı kapatıyoruz
      setTimeout(() => {
        startGame();
      }, 2000);
    }
    else if (circleWin){
      infoLabel.textContent = 'CIRCLE WON THE GAME !!';
      board.style.pointerEvents = 'none';
      setTimeout(() => {
        startGame();
      }, 2000);
    }
    if  (count === 9 && !crossWin && !circleWin){
      infoLabel.textContent = 'DRAW, RESTART !!';
      setTimeout(() => {
        startGame();
      }, 2000);
    }
  });
};

startGame();