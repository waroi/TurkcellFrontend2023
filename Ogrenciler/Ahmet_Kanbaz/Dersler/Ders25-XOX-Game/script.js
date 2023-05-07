const cards = document.querySelectorAll("#card");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
const orderPlayer = document.getElementById("player");
let cardSpanX = `<span class="fa-solid fa-xmark fa-2xl"></span>`;
let cardSpanO = `<span class="fa-solid fa-o fa-2xl"></span>`;

let player = "X";
let checkXOXWin = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], //Yatay Durumların Kontrolü
  [1, 4, 7], [2, 5, 8], [3, 6, 9], //Dikey Durumların Kontrolü
  [1, 5, 9], [3, 5, 7] //Çapraz Durumların Kontrolü
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
  winResult();
}

function resetGame() {
  if(confirm("Oyunu yeniden başlatmak istediğinize emin misiniz?")) {
    player = "X";
    startGame();
    cards.forEach(item => item.innerHTML = "");
  }
}

function winResult() {
  for(let i = 0; i < checkXOXWin.length; i++) {
    
  }
}
