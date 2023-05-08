//O true
//X false
//başlangıç x
let controlState = false;
let count = 0;
let square = [];
let circle = [];
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function findMatchingArray(test, warray) {
    for (let i = 0; i < warray.length; i++) {
        const subArray = warray[i];
        let matchCount = 0;
        for (let j = 0; j < subArray.length; j++) {
            if (test.includes(subArray[j])) {
                matchCount++;
            } else {
                break;
            }
        }
        if (matchCount === subArray.length) {
            return true;
        }
    }
    return false;
}

info.innerText = "X is first place";

document.querySelectorAll("span").forEach((span) => {
    span.addEventListener("click", xox);
});
//contains => Nodelist
function xox(e) {
    if (!e.target.parentElement.children[0].classList.contains("checked")) {
        if (controlState) {
            e.target.classList.add("circle");
            e.target.parentElement.style.backgroundColor = "rgb(122, 122, 255)";
            circle.push(e.target.id[1] - 1)
            controlState = !controlState;
            info.innerText = "X's turn";
            e.target.parentElement.children[0].classList.add("checked");
        } else {
            e.target.classList.add("cross");
            square.push(e.target.id[1] - 1)
            e.target.parentElement.style.backgroundColor = "rgb(294, 94, 94)";
            controlState = !controlState;
            info.innerText = "O's turn";
            e.target.parentElement.children[0].classList.add("checked");
        }
        count += 1;
        count >= 5 ? controller() : null;
    }
}

function removeClick() {
    document.querySelectorAll("span").forEach((span) => {
        span.removeEventListener("click", xox);
    });
}

function controller() {
    if (findMatchingArray(square, winningCombos)) {
        info.innerText = "X Win";
        info.classList.add("xwin");
        removeClick();
    }
    if (findMatchingArray(circle, winningCombos)) {
        info.innerText = "O Win";
        info.classList.add("owin");
        removeClick();
    }
    if (count == 9 && info.innerText.includes("turn")) {
        info.innerText = "Draw";
        info.classList.add("draw");
        gameboard.style.backgroundColor = "black";
        removeClick();
    }
}

document.getElementsByTagName("button")[0].addEventListener("click", () => {
    document.body.setAttribute("onload", window.location.reload());
});
