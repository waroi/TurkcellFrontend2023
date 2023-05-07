const cards = document.querySelectorAll("#card");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
const orderPlayer = document.getElementById("player");
let cardSpanX = `<span class="fa-solid fa-xmark fa-2xl"></span>`;
let cardSpanO = `<span class="fa-solid fa-o fa-2xl"></span>`;

let player = "X";
let checkXOXWin = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], //Yatay Durumların Kontrolü
  [0, 3, 6], [1, 4, 7], [2, 5, 8], //Dikey Durumların Kontrolü
  [0, 4, 8], [2, 4, 6] //Çapraz Durumların Kontrolü
];

startGame();
addEventListeners();

function startGame() {
  result.innerHTML = "";
  orderPlayer.innerHTML = `<span class="fs-5">Sıradaki Oyuncu:</span> ${player}`;
}

function addEventListeners() {
  cards.forEach(item => item.addEventListener("click", cardClick));
  reset.addEventListener("click", resetGame);
}

function cardClick(e) {
  if(e.target.id ==="card" && e.target.innerHTML === "") {
    if(player === "X") {
      e.target.innerHTML = cardSpanX;
    }
    else {
      e.target.innerHTML = cardSpanO;
    }
    winResult(e.target.innerHTML);
    changePlayer();
  }
  else if((e.target.id === "card" && e.target.innerHTML !== "") || e.target.className === "fa-solid fa-xmark fa-2xl" || e.target.className === "fa-solid fa-o fa-2xl") {
    alert("Lütfen boş bir alana tıklayınız!");
  }
  e.preventDefault();
}

function changePlayer() {
  if(player === "X") {
    player = "O";
  }
  else {
    player = "X";
  }
  orderPlayer.innerHTML = `<span class="fs-5">Sıradaki Oyuncu:</span> ${player}`;
}

function resetGame() {
  if(confirm("Oyunu yeniden başlatmak istediğinize emin misiniz?")) {
    player = "X";
    startGame();
    cards.forEach(item => {
      item.innerHTML = "";
      item.style.backgroundColor = "white";
      item.addEventListener("click", cardClick);
    });
  }
}

function winResult(cardInnerHTML) {

  for(let i = 0; i < checkXOXWin.length - 1; i++) {
    if(cards[checkXOXWin[i][0]].innerHTML === cardInnerHTML && cards[checkXOXWin[i][1]].innerHTML === cardInnerHTML && cards[checkXOXWin[i][2]].innerHTML === cardInnerHTML) {
      result.innerHTML = `<span class="fs-3 text-success">${player} Kazandı!</span>`;
      changeWinCardStyle(cards[checkXOXWin[i][0]], cards[checkXOXWin[i][1]], cards[checkXOXWin[i][2]]);
      removeEventListeners();
    }
    else if(cards[0].innerHTML !== "" &&
            cards[1].innerHTML !== "" &&
            cards[2].innerHTML !== "" &&
            cards[3].innerHTML !== "" &&
            cards[4].innerHTML !== "" &&
            cards[5].innerHTML !== "" &&
            cards[6].innerHTML !== "" &&
            cards[7].innerHTML !== "" &&
            cards[8].innerHTML !== "") {
      result.innerHTML = `<span class="fs-3 text-danger">Kazanan Yok.</span>`;
      removeEventListeners();
      cards.forEach(item => {
        item.style.backgroundColor = "red";
      });
    }
  }
}

function removeEventListeners() {
  cards.forEach(item => item.removeEventListener("click", cardClick));
}

function changeWinCardStyle(card1, card2, card3) {
  card1.style.backgroundColor = "green";
  card2.style.backgroundColor = "green";
  card3.style.backgroundColor = "green";
}