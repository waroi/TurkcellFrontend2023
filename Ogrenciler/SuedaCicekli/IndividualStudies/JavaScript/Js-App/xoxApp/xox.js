// Oyuncu Oluşturuldu. Sonradan değişeceği için let ile tanımlandı.
let player = "X";
let isFinish = false;

// kareleri aldık.
const selectBoxes = document.querySelectorAll(".select-box");
const messageArea = document.getElementById("message");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");

//localsorage'dan skorları çekiyoruz.
scores = getScoreFromLS();

console.log(scores);

// Oyunun başlaması için fonksiyonu çağırdık.
startXoX();

function startXoX() {
  scoreO.innerHTML = scores[1];
  scoreX.innerHTML = scores[0];
  console.log("XoX Oyunu Başladı");
  selectBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      setBoxAndSwitchPlayer(box);
    });
  });
  console.log("çipler yerleştirildi");
}

function setBoxAndSwitchPlayer(selectBox) {
  // Aşağıdaki if tıklanan butonun daha önce dolup dolmadığına bakar. Dolu ise hiç birşey yapmaz. Boş ise hem dğer atayıp oyuncuyu değiştirir hemde storage'a değer kaydeder.
  console.log("Çalıştı");
  if (selectBox.innerHTML == "") {
    selectBox.innerHTML = player;
    if (player == "X") {
      player = "O";
      selectBox.classList.add("x");
    } else {
      player = "X";
      selectBox.classList.add("o");
    }
    whoWin();
  }
}

function whoWin() {
  // YATAY SORGULAMA
  //   if (
  //     selectBoxes[0].innerHTML == selectBoxes[1].innerHTML &&
  //     selectBoxes[1].innerHTML == selectBoxes[2].innerHTML &&
  //     selectBoxes[0].innerHTML != ""
  //   ) {
  //     console.log(selectBoxes[0].innerHTML, " KAZANDI");
  //   } else if (
  //     selectBoxes[3].innerHTML == selectBoxes[4].innerHTML &&
  //     selectBoxes[4].innerHTML == selectBoxes[5].innerHTML &&
  //     selectBoxes[3].innerHTML != ""
  //   ) {
  //     console.log(selectBoxes[3].innerHTML, " kazandı");
  //   } else if (
  //     selectBoxes[6].innerHTML == selectBoxes[7].innerHTML &&
  //     selectBoxes[7].innerHTML == selectBoxes[8].innerHTML &&
  //     selectBoxes[6].innerHTML != ""
  //   ) {
  //     console.log(selectBoxes[6].innerHTML, " kazandı");
  //   }
  // DİKEY SORGULAMA
  //   if (
  //     selectBoxes[0].innerHTML == selectBoxes[3].innerHTML &&
  //     selectBoxes[3].innerHTML == selectBoxes[6].innerHTML &&
  //     selectBoxes[0].innerHTML != ""
  //   ) {
  //     console.log(selectBoxes[0].innerHTML, " KAZANDI");
  //   } else if (
  //     selectBoxes[1].innerHTML == selectBoxes[4].innerHTML &&
  //     selectBoxes[4].innerHTML == selectBoxes[7].innerHTML &&
  //     selectBoxes[1].innerHTML != ""
  //   ) {
  //     console.log(selectBoxes[1].innerHTML, " kazandı");
  //   } else if (
  //     selectBoxes[2].innerHTML == selectBoxes[5].innerHTML &&
  //     selectBoxes[5].innerHTML == selectBoxes[8].innerHTML &&
  //     selectBoxes[2].innerHTML != ""
  //   ) {
  //     console.log(selectBoxes[2].innerHTML, " kazandı");
  //   }

  // Satıların kazanma durumları hesaplanır. For ile 9'a kadar giden (0,1,2,..7,8) ve 3'er 3'er artan bir döngü ile satır değerlerini kontrol ediyhoruz.
  //   for (i = 0; i < 7; i += 3) {
  //     if (
  //       selectBoxes[i].innerHTML == selectBoxes[i + 1].innerHTML &&
  //       selectBoxes[i + 1].innerHTML == selectBoxes[i + 2].innerHTML &&
  //       selectBoxes[i].innerHTML != ""
  //     ) {
  //       console.log(selectBoxes[i].innerHTML, " kazandı");
  //     }
  //   }

  //   for (i = 0; i < 3; i++) {
  //     if (
  //       selectBoxes[i].innerHTML == selectBoxes[i + 3].innerHTML &&
  //       selectBoxes[i + 3].innerHTML == selectBoxes[i + 6].innerHTML &&
  //       selectBoxes[i].innerHTML != ""
  //     ) {
  //       console.log(selectBoxes[i].innerHTML, " KAZANDI");
  //     }
  //   }

  //   if (
  //     selectBoxes[0].innerHTML == selectBoxes[4].innerHTML &&
  //     selectBoxes[4].innerHTML == selectBoxes[8].innerHTML &&
  //     selectBoxes[0].innerHTML != ""
  //   ) {
  //     console.log(selectBoxes[0].innerHTML, " KAZANDI");
  //   } else if (
  //     selectBoxes[2].innerHTML == selectBoxes[4].innerHTML &&
  //     selectBoxes[4].innerHTML == selectBoxes[6].innerHTML &&
  //     selectBoxes[2].innerHTML != ""
  //   ) {
  //     console.log(selectBoxes[2].innerHTML, " kazandı");
  //   }
  checkForWinner(selectBoxes[0], selectBoxes[1], selectBoxes[2]);
  checkForWinner(selectBoxes[3], selectBoxes[4], selectBoxes[5]);
  checkForWinner(selectBoxes[6], selectBoxes[7], selectBoxes[8]);
  checkForWinner(selectBoxes[0], selectBoxes[3], selectBoxes[6]);
  checkForWinner(selectBoxes[1], selectBoxes[4], selectBoxes[7]);
  checkForWinner(selectBoxes[2], selectBoxes[5], selectBoxes[8]);
  checkForWinner(selectBoxes[0], selectBoxes[4], selectBoxes[8]);
  checkForWinner(selectBoxes[2], selectBoxes[4], selectBoxes[6]);
}

function checkForWinner(box1, box2, box3) {
  if (
    box1.innerHTML == box2.innerHTML &&
    box2.innerHTML == box3.innerHTML &&
    box1.innerHTML != ""
  ) {
    if (box1.innerHTML == "X") {
      messageArea.innerHTML = "X Kazandı.!";
      messageArea.classList.add("x", "fw-bold");
      setScoreToLS("X");
    } else {
      messageArea.innerHTML = "O Kazandı.!";
      messageArea.classList.add("o", "fw-bold");
      setScoreToLS("O");
    }
    selectBoxes.forEach((box) => {
      box.classList.add("disabled");
    });

    scores = getScoreFromLS();
    scoreO.innerHTML = scores[1];
    scoreX.innerHTML = scores[0];
  }
}

function getScoreFromLS() {
  let scores;
  if (localStorage.getItem("userScores") == null) {
    scores = [0, 0];
  } else {
    scores = JSON.parse(localStorage.getItem("userScores"));
  }
  return scores;
}

function setScoreToLS(winner) {
  let scores = getScoreFromLS();
  if (winner == "X") {
    scores[0] += 1;
  } else if (winner == "O") {
    scores[1] += 1;
  }
  localStorage.setItem("userScores", JSON.stringify(scores));
}