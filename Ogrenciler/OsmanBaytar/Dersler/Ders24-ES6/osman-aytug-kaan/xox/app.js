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


let player = "x";

function write(e) {
    if (player == "x") {
        e.target.innerText = "X";
        switchPlayer();
        checkForWin();
        disable(e);
    }
    else {
        e.target.innerText = "O";
        switchPlayer();
        checkForWin();
        disable(e);
    }
}

function switchPlayer() {
    if (player == "x") {
        player = "o";
    }
    else {
        player = "x";
    }
}

function disable(e) {
    e.target.disabled = true;
}

function checkForWin() {
    let winner = checkForRoW() || checkForColumn() || checkForDiagonal()
    if (winner) {
        winnerBox.innerText = `Winner = Player ${winner}`;
    }
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


boxValue1.addEventListener("click", write);
boxValue2.addEventListener("click", write);
boxValue3.addEventListener("click", write);
boxValue4.addEventListener("click", write);
boxValue5.addEventListener("click", write);
boxValue6.addEventListener("click", write);
boxValue7.addEventListener("click", write);
boxValue8.addEventListener("click", write);
boxValue9.addEventListener("click", write);
