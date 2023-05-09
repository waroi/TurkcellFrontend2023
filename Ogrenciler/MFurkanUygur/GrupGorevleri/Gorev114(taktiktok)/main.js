//O true
//X false
//başlangıç x
info.innerText = "X is first place";

let xoState = false;
let count = 0;
let cross = [];
let circle = [];
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function findMatchingArray(test, warray) {
    return warray.some(subArray => {
      return subArray.every(elem => test.includes(elem));
    });
  }
  

info.innerText = "X is first place";

document.querySelectorAll("span").forEach((span) => {
    span.addEventListener("click", xox);
});

//contains => Nodelist
function xox(e) {
    if (!e.target.classList.contains("checked")) {
        if (xoState) {
            e.target.classList.add("circle");
            e.target.parentElement.style.backgroundColor = "rgb(122, 122, 255)";
            circle.push(e.target.id[1] - 1)
            xoState = !xoState;
            info.innerText = "X's turn";
            e.target.classList.add("checked");
        } else {
            e.target.classList.add("cross");
            cross.push(e.target.id[1] - 1)
            e.target.parentElement.style.backgroundColor = "rgb(294, 94, 94)";
            xoState = !xoState;
            info.innerText = "O's turn";
            e.target.classList.add("checked");
        }
        count += 1;
        count >= 5 ? controller() : null;
    }
}

function controller() {
    if (findMatchingArray(cross, winningCombos)) {
        info.innerText = "X Win";
        info.classList.add("xwin");
        removeClick();
    }
    else if (findMatchingArray(circle, winningCombos)) {
        info.innerText = "O Win";
        info.classList.add("owin");
        removeClick();
    }
    else if (count == 9 && info.innerText.includes("turn")) {
        info.innerText = "Draw";
        info.classList.add("draw");
        gameboard.style.backgroundColor = "black";
        removeClick();
    }
}

function removeClick() {
    document.querySelectorAll("span").forEach((span) => {
        span.removeEventListener("click", xox);
    });
}

function findMatchingArray(ourCondition, winningConditions) {
    return winningConditions.some(subArray => {
        return subArray.every(elem => ourCondition.includes(elem));
    });
}

// function findMatchingArray(ourCondition, winningConditions) {
//     let ourConditionx = new Set(ourCondition);
//     let ol = ourConditionx.size;
//     // console.log(ol)
//     winningConditions.forEach(wc => {
//         ourConditionx.add(wc)
//     })
//     if (ol == ourCondition.length && ourCondition == Array.from(ourConditionx)) {
//         console.log("var")
//     }
// }

document.querySelector("button").addEventListener("click", () => {
    document.body.setAttribute("onload", window.location.reload());
});
