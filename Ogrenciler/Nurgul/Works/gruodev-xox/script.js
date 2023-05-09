const boxs = document.querySelectorAll(".box");
const playerText = document.getElementById("player");
const errorText = document.getElementById("error");
const resetButton = document.getElementById("reset");

let player = "X";
let gameOver = false;
let winner;

function playGame() {
    playerText.textContent = `${player} Oyuncusu Sıra Sende !`

    boxs.forEach(box => box.addEventListener("click", () => chooseBox(box)))
}

function chooseBox(box) {
    if (box.textContent === "") {
        box.textContent = player;
        if (player === "O") {
            box.style.color = "orange"
        }
        turnPlayer();
    } else {
        errorText.textContent = "Buraya hamle Yapamazsın ! "
        box.style.border = "10px solid red"
        setTimeout(() => {
            errorText.textContent = ""
            box.style.border = "5px solid #4b5d63"
        }, 1000)
    }

    checkWin();
    checkTie();

    if (gameOver) {
        playerText.textContent = `${winner} Oyuncusu Kazandı!`;
        boxs.forEach(box => box.style.pointerEvents = 'none');
    }
}

function turnPlayer() {
    if (player === "X") {
        player = "O";
        playerText.textContent = `${player} Oyuncusu Sıra Sende !`
        return;
    } else if (player === "O") {
        player = "X";
        playerText.textContent = `${player} Oyuncusu Sıra Sende !`

    }
}

function checkWin() {
    const winningConditions = [   
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (boxs[a].textContent !== "" &&
                boxs[a].textContent === boxs[b].textContent &&
                boxs[b].textContent === boxs[c].textContent) {
            gameOver = true;
            winner = boxs[a].textContent;
        }
    }
}

function checkTie() {
    const values = [];
    boxs.forEach(box => values.push(box.textContent))
    if (!values.includes("")) {
        playerText.textContent = "Beraber !";
        boxs.forEach(box => box.style.pointerEvents = 'none');
    }
}

function resetGame() {
    // Oyun değişkenlerini ve durumunu sıfırla
    player = "X";
    gameOver = false;
    winner = null;

    // Blokları temizle ve etkinlikleri kaldır
    boxs.forEach(box => {
        box.textContent = "";
        box.style.color = "black";
        // box.style.border = "1px solid black";
        box.style.pointerEvents = 'auto';
    });

    // Hata mesajını temizle
    errorText.textContent = "";

    // Oyun başlama metnini güncelle
    playerText.textContent = `${player} Oyuncusu Sıra Sende !`;
}

resetButton.addEventListener("click", resetGame);

playGame();