currentState = "X";

let XOX = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let count = 0;
let winner = false;

document.querySelectorAll("td").forEach((td) => {
  td.addEventListener("click", (e) => {
    if (!e.target.classList.contains("checked")) {
      e.target.innerHTML = currentState;

      e.target.classList.add("checked");

      let row = e.target.id[0];
      let col = e.target.id[2];
      XOX[row][col] = currentState;
      currentState = currentState == "X" ? "O" : "X";
      count++;
      let draw;
      for (let i = 0; i < 3; i++) {
        draw = checkWinner(XOX[i][0], XOX[i][1], XOX[i][2]);

        draw = checkWinner(XOX[0][i], XOX[1][i], XOX[2][i]);
      }

      draw = checkWinner(XOX[0][0], XOX[1][1], XOX[2][2]);
      draw = checkWinner(XOX[0][2], XOX[1][1], XOX[2][0]);

      draw == true ? alert("DRAW"): console.log("")
    }
  });
});

function checkWinner(a, b, c) {
  if (a !== "" && a === b && b === c) {
    winner = true;
    console.log("Kazanan " + a);
    alert("Kazanan " + a)
    table.classList.add("nonClick");
    return false
  } else if (count == 9 && winner == false ) {
    
   
    return true
  }
  
}
