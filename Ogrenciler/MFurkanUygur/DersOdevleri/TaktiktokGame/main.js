const gameboard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = [
    "a", "", "", "", "", "", "", "", ""
];

let condition = "cross";
infoDisplay.textContent = `${condition.charAt(0).toUpperCase() + condition.slice(1)} is first place`;


function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("square");
        cellElement.id = index + " crossOrCircle";
        cellElement.addEventListener("click", xox);
        gameboard.appendChild(cellElement);
    })
}
createBoard();

function xox() {
    //X ve O elemanı basma
    const displayCircle = document.createElement("div");
    displayCircle.classList.add(condition);
    this.appendChild(displayCircle);
    this.removeEventListener("click", xox)
    condition = condition === "cross" ? "circle" : "cross"
    infoDisplay.textContent = `${condition.charAt(0).toUpperCase() + condition.slice(1)}'s turn`;
    // console.log(this.hasChildNodes())
    // console.log(this)
    // console.log(this.children)
    
    checkScore();
    const squareID=document.querySelectorAll("#crossOrCircle");
    console.log(squareID)
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square");
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    winningCombos.forEach(arr=>{
        arr.forEach(cell=>{
            if(allSquares[cell].children){
                console.log("asd")
            }
        })
    })
    winningCombos.forEach((array) => {
        const crossWins = array.every(cell => {
            allSquares[cell].firstChild?.classList.contains("cross");
        })
        if (crossWins) {
            infoDisplay.textContent = "Win Cross";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
    });
    winningCombos.forEach((array) => {
        const circleWins = array.every(cell => {
            allSquares[cell].firstChild?.classList.contains("circle");
        })
        if (circleWins) {
            infoDisplay.textContent = "Win circle";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
    });
}