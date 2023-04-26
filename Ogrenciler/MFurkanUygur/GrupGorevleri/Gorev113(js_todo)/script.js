
let todoAddBtn = document.getElementById("addBtn");
todoAddBtn.addEventListener("click", addFunc);

function addFunc() {
    let todoInput = document.getElementById("todoInput").value;
    if (todoInput == "") {
        alert("Lütfen bir todo gir.")
    }
    else {
        console.log(todoInput);
        document.getElementById("todoInput").value = "";
    }

}


