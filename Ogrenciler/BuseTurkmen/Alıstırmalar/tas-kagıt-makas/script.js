// Oyun sayfasını gizle, karşılama ekranını göster
document.getElementById ('game-screen').style.display = 'none';
document.getElementById('welcome-screen').style.display = 'block';

// Skorları sıfırla
let computerScore = 0;
let playerScore = 0;
updateScores();

// Oyun başlatma butonuna tıklandığında
document.getElementById('play-button').addEventListener('click', function() {
  // Karşılama ekranını gizle, oyun sayfasını göster
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
});

// Taş, kağıt, makas butonlarına tıklandığında
const handButtons = document.getElementsByClassName('hand-button');
for (let i = 0; i < handButtons.length; i++) {
  handButtons[i].addEventListener('click', function() {
    const playerChoice = this.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    animateHands(playerChoice, computerChoice);
    const result = getResult(playerChoice, computerChoice);
    updateResult(result);
    updateScores();
    checkEndGame();
  });
}

// Çıkış butonuna tıklandığında
document.getElementById('exit-button').addEventListener('click', function() {
  resetGame();
});

// Tekrar oyna butonuna tıklandığında
document.getElementById('play-again-button').addEventListener('click', function() {
  resetGame();
  document.getElementById('result-modal').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
});

// Bilgisayarın rastgele seçim yapması
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Ellerin animasyonlu olarak gösterilmesi
function animateHands(playerChoice, computerChoice) {
  const playerHand = document.getElementById('player-hand');
  const computerHand = document.getElementById('computer-hand');
  playerHand.src = playerChoice + '.png';
  computerHand.src = computerChoice + '.png';
  playerHand.classList.add('animate');
  computerHand.classList.add('animate');
  setTimeout(function() {
    playerHand.classList.remove('animate');
    computerHand.classList.remove('animate');
  }, 1000);
}

// Sonucun hesaplanması
function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

// Sonucun güncellenmesi
function updateResult(result) {
  const resultElement = document.getElementById('result');
  if (result === 'draw') {
    resultElement.innerHTML = 'Berabere!';
  } else if (result === 'win') {
    resultElement.innerHTML = 'Kazandın!';
  } else {
    resultElement.innerHTML = 'Kaybettin!';
  }
}

// Skorların güncellenmesi
function updateScores() {
  document.getElementById('computer-score').innerHTML = 'Computer: ' + computerScore;
  document.getElementById('player-score').innerHTML = 'Player: ' + playerScore;
}

// Oyunun sonunu kontrol etme
function checkEndGame() {
  if (computerScore === 10 || playerScore === 10) {
    let modalMessage = '';
    if (playerScore > computerScore) {
      modalMessage = 'Kazandınız!';
    } else if (playerScore < computerScore) {
      modalMessage = 'Kaybettiniz!';
    } else {
      modalMessage = 'Berabere!';
    }
    document.getElementById('modal-message').innerHTML = modalMessage;
    document.getElementById('result-modal').style.display = 'block';
    document.getElementById('game-screen').style.display = 'none';
  }
}

// Oyunu sıfırlama
function resetGame() {
  computerScore = 0;
  playerScore = 0;
  updateScores();
}

