const boxValue1 = document.getElementById("1");
const boxValue2 = document.getElementById("2");
const boxValue3 = document.getElementById("3");
const boxValue4 = document.getElementById("4");
const boxValue5 = document.getElementById("5");
const boxValue6 = document.getElementById("6");
const boxValue7 = document.getElementById("7");
const boxValue8 = document.getElementById("8");
const boxValue9 = document.getElementById("9");
const winnerBox = document.getElementById("winner");
const playerTurn = document.getElementById("playerTurn");

const versusPlayer = document.getElementById("versusPlayer");
const versusAI = document.getElementById("versusAI");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const reset = document.getElementById("reset");

let player = "x";
let count = 0;
let isEasyBot = false;

function isPlayer() {
	versusAI.classList.add("d-none");
	startGame();
}

function isAI() {
	versusPlayer.classList.add("d-none");
	versusAI.classList.add("d-none");
	easy.classList.replace("d-none", "initial");
	hard.classList.replace("d-none", "initial");
}

function isEasy() {
	hard.classList.replace("initial", "d-none");
	isEasyBot = true;
	startGame();
}

function isHard() {
	easy.classList.replace("initial", "d-none");
	isHardBot = true;
	startGame();
}

versusPlayer.addEventListener("click", isPlayer);
versusAI.addEventListener("click", isAI);
easy.addEventListener("click", isEasy);
hard.addEventListener("click", isHard);

function write(e) {
	if (player == "x") {
		e.target.innerText = "X";
		count = count + 1;
		switchPlayer();
		switchPlayerDisplay();
		checkForWin();
		checkForTile();
		document.getElementById(e.target.id).removeEventListener("click", write);
		isEasyBot ? write() : null;
	} else {
		if (isEasyBot) {
			random = easyAI();
			document.getElementById(random).removeEventListener("click", write);
		} else {
			e.target.innerText = "O";
			document.getElementById(e.target.id).removeEventListener("click", write);
		}
		count = count + 1;
		switchPlayer();
		switchPlayerDisplay();
		checkForWin();
		checkForTile();
	}
}

function easyAI() {
	let random = Math.floor(Math.random() * 9) + 1;
	while (count < 9) {
		if (document.getElementById(random).innerText == "") {
			document.getElementById(random).innerText = "O";
			return random;
		}
		random = Math.floor(Math.random() * 9) + 1;
	}
}

function switchPlayerDisplay() {
	if (player == "x") {
		playerTurn.innerText = "Next Player is X";
	} else if (isEasyBot) {
		playerTurn.innerText = "Next Player is AI";
	} else {
		playerTurn.innerText = "Next Player is O";
	}
}

function switchPlayer() {
	if (player == "x") {
		player = "o";
	} else {
		player = "x";
	}
}

function checkForWin() {
	let winner = checkForRoW() || checkForColumn() || checkForDiagonal();
	if (winner) {
		playerTurn.innerText = "GAME IS FINISHED";
		if (isEasyBot && winner == "O") {
			winnerBox.innerText = "Winner = AI";
			return finishGame();
		}
		winnerBox.innerText = `Winner = Player ${winner}`;
		finishGame();
	}
	return winner;
}

function checkForRoW() {
	if (boxValue1.innerText == boxValue2.innerText && boxValue2.innerText == boxValue3.innerText) {
		return boxValue1.innerText;
	}
	if (boxValue4.innerText == boxValue5.innerText && boxValue5.innerText == boxValue6.innerText) {
		return boxValue4.innerText;
	}
	if (boxValue7.innerText == boxValue8.innerText && boxValue8.innerText == boxValue9.innerText) {
		return boxValue7.innerText;
	}
}

function checkForColumn() {
	if (boxValue1.innerText == boxValue4.innerText && boxValue4.innerText == boxValue7.innerText) {
		return boxValue1.innerText;
	}
	if (boxValue2.innerText == boxValue5.innerText && boxValue5.innerText == boxValue8.innerText) {
		return boxValue2.innerText;
	}
	if (boxValue3.innerText == boxValue6.innerText && boxValue6.innerText == boxValue9.innerText) {
		return boxValue3.innerText;
	}
}

function checkForDiagonal() {
	if (boxValue1.innerText == boxValue5.innerText && boxValue5.innerText == boxValue9.innerText) {
		return boxValue1.innerText;
	}
	if (boxValue3.innerText == boxValue5.innerText && boxValue5.innerText == boxValue7.innerText) {
		return boxValue3.innerText;
	}
}

function checkForTile() {
	if (count == 9 && !checkForWin()) {
		playerTurn.innerText = "GAME IS FINISHED";
		winnerBox.innerText = "The game is Tile";
	}
}

function resetGame() {
	window.location.reload();
}

reset.addEventListener("click", resetGame);

function startGame() {
	boxValue1.addEventListener("click", write);
	boxValue2.addEventListener("click", write);
	boxValue3.addEventListener("click", write);
	boxValue4.addEventListener("click", write);
	boxValue5.addEventListener("click", write);
	boxValue6.addEventListener("click", write);
	boxValue7.addEventListener("click", write);
	boxValue8.addEventListener("click", write);
	boxValue9.addEventListener("click", write);
}

function finishGame() {
	boxValue1.removeEventListener("click", write);
	boxValue2.removeEventListener("click", write);
	boxValue3.removeEventListener("click", write);
	boxValue4.removeEventListener("click", write);
	boxValue5.removeEventListener("click", write);
	boxValue6.removeEventListener("click", write);
	boxValue7.removeEventListener("click", write);
	boxValue8.removeEventListener("click", write);
	boxValue9.removeEventListener("click", write);
}