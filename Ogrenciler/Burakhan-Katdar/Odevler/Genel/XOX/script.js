td = document.getElementsByTagName("td");

currentState = "X";

let XOX = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let count = 0;
let winner = false;
let isBoardFull = true;

document.querySelectorAll("td").forEach((td) => {
  td.addEventListener("click", (e) => {
    if (!e.target.classList.contains("checked")) {
      e.target.innerHTML = currentState;

      e.target.classList.add("checked");

      let row = e.target.id[0];
      let col = e.target.id[2];
      XOX[row][col] = currentState;
      console.table(XOX);
      currentState = currentState == "X" ? "O" : "X";
      count++;
      for (let i = 0; i < 3; i++) {
        checkWinner(XOX[i][0], XOX[i][1], XOX[i][2]);
        checkWinner(XOX[0][i], XOX[1][i], XOX[2][i]);
        
      }
      
      checkWinner(XOX[0][0], XOX[1][1], XOX[2][2]);
      checkWinner(XOX[0][2], XOX[1][1], XOX[2][0]);
      
    }
  });
});

function checkWinner(a, b, c) {
  if (a !== "" && a === b && b === c) {
    winner = true;
    console.log("Kazanan " + a);
  }
  
  // for (let i = 0; i < XOX.length-1; i++) {

  //     for (let j = 0; j < XOX[i].length-1; j++){
  //         if(XOX[i][j] == XOX[i+1][j+1] && XOX[i][j] != ''){
  //             winner = true
  //             console.log("Kazanan" +XOX[i][j])
  //         }
  //     }

  //     if( XOX[i][0] != '' && XOX[i][0] == XOX[i][1] && XOX[i][0] == XOX[i][2]   ){
  //         winner = true
  //         console.log("Kazanan " + XOX[i][0])

  //     }
  //     if( XOX[0][i] != '' && XOX[0][i] == XOX[1][i] && XOX[0][i] == XOX[2][i]   ){
  //         winner = true
  //         console.log("Kazanan " + XOX[0][i])
  //     }

  //     if( XOX[0][0] != '' && XOX[0][0] == XOX[1][1] && XOX[0][0] == XOX[2][2]   ){
  //         winner = true
  //         console.log("Kazanan " + XOX[0][0])
  //     }
  //     if( XOX[0][0] != '' && XOX[0][2] == XOX[1][1] && XOX[0][2] == XOX[2][0]   ){
  //         winner = true
  //         console.log("Kazanan " + XOX[0][2])
  //     }

  // }
  // if(count == 9 && winner == false){
  //     console.log("DRAW")
  // }
}
