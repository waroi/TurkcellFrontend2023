//O true
//X false
//başlangıç x
let controlState = false;
let count = 0;
let square = "";
let circle = "";
const winningCombos = [
    "012", "021", "102", "120", "201", "210",
    "345", "354", "435", "453", "534", "543",
    "678", "687", "768", "786", "876", "867",
    "036", "063", "360", "306", "603", "630",
    "147", "174", "471", "417", "714", "741",
    "258", "285", "528", "582", "825", "852",
    "048", "084", "408", "480", "804", "840",
    "246", "264", "462", "426", "624", "642"
];
document.querySelectorAll("label").forEach((label) => {
    label.addEventListener("click", function (e) {
        if (controlState) {
            e.target.classList.add("circle");
            circle += String(e.target.id[1] - 1)
            controlState = !controlState
        }
        else {
            e.target.classList.add("cross");
            square += String(e.target.id[1] - 1)
            controlState = !controlState
        }
        count += 1
        count >= 5 ? controller() : null
    })
})
function controller() {
    winningCombos.forEach(wc => {
        if (square.includes(wc)) {
            console.log("X kazandı")
        }
        if (circle.includes(wc)) {
            console.log("O kazandı")
        }
    })
    if (count == 9) {
        console.log("draw")
    }
}