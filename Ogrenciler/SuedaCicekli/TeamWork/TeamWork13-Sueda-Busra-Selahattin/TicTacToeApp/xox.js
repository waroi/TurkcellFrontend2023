(function () {
  //local function
  const btns = document.querySelectorAll(".button");
  const result = document.querySelector("#result");
  const reset = document.querySelector("#reset");
  let nowPlayer = "X";
  let controlWin = false;
  let play = ["", "", "", "", "", "", "", "", ""];
  let winOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  reset.addEventListener("click", resetAll);
  function resetAll() {
    console.log("resett");
    play = ["", "", "", "", "", "", "", "", ""];
    btns.forEach((btn) => {
      btn.innerHTML = "";
      result.innerHTML = "";
      btn.value = "";
      btn.disabled = false;
      btn.classList.remove("bg-danger");
      btn.classList.remove("bg-primary");
    });
    nowPlayer = "X";
    result.innerHTML = `player x sırası`;
    // play.map((i) => {
    //   i = "";
    // });
    // console.log(play);
  }
  XOX();
  function XOX() {
    btns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        selectPlayer(btn, index);
      });
    });
  }

  function selectPlayer(btn, index) {
    if (btn.innerHTML == "") {
      btn.innerHTML = nowPlayer;
      play[index] = nowPlayer;
      //nowPlayer = nowPlayer == "X" ? "O" : "X"; //ternary operator
      if (nowPlayer == "X") {
        nowPlayer = "O";
        btn.classList.add("bg-danger");
      } else {
        nowPlayer = "X";
        btn.classList.add("bg-primary");
      }

      result.innerHTML = `Sıra ${nowPlayer} da`;

      isWinner();
    }
  }

  function isWinner() {
    for (let i = 0; i < winOptions.length; i++) {
      let winOption = winOptions[i];
      let first = play[winOption[0]];
      let second = play[winOption[1]];
      let third = play[winOption[2]];
      if (first == "" || second == "" || third == "") {
        continue;
      }
      if (first == second && second == third) {
        result.innerHTML = `${first} kazandı`;
        btns.forEach((btn) => {
          btn.disabled = true;
        });
      }
    }
  }
})();
