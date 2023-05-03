const todoAddBtn = document.getElementById("addTodo");
const listGroup = document.getElementById("listGrup");
const clearTodo = document.getElementById("clearTodo");
const filterTodoInput = document.getElementById("filterTodo");

let ourArray = [];

todoAddBtn.addEventListener("click", addTodoFunc);
function addTodoFunc() {
    let todoInput = document.getElementById("todoInput").value;
    if (todoInput == "") {
        alert("Lütfen bir todo gir.");
    }
    else {
        ourArray = [...ourArray, { todo: todoInput, isDone: false }];
        createTag(todoInput);
        localStorage.setItem("ourArray", JSON.stringify(ourArray));
    }
}

window.addEventListener("DOMContentLoaded", () => {
    getItem = JSON.parse(localStorage.getItem("ourArray"));
    ourArray = [...getItem];
    localStorage.setItem("ourArray", JSON.stringify(ourArray));
    for (let i = 0; i < getItem.length; i++) {
        createTag(getItem[i].todo);
    }
});

filterTodoInput.addEventListener("keyup", filterItem);
function filterItem(e) {
    const listItem = document.querySelectorAll(".list-group-item");
    const filterValue = e.target.value.toLowerCase();
    listItem.forEach((listTodo) => {
        const listText = listTodo.textContent.toLowerCase();
        if (listText.indexOf(filterValue) == -1) {
            listTodo.setAttribute("style", "display:none !important");
        }
        else {
            listTodo.setAttribute("style", "display:block !important");
        }
    })
}
filterTodoInput.addEventListener("focus", () => { filterTodoInput.value = "" })

const listGroupItem = document.querySelector(".list-group");
listGroupItem.addEventListener("click", (e) => {
    console.log(e.target)
    let findItem;
    ourArray.forEach((arr) => {
        if (arr.todo === e.target.parentElement.parentElement.innerText) {
            findItem = ourArray.indexOf(arr);
        }
    });
    if (e.target.className === "bi bi-x") {
        e.target.parentElement.parentElement.remove();
        ourArray.splice(findItem, 1);
        localStorage.setItem("ourArray", JSON.stringify(ourArray));
        console.log(ourArray);
        console.log("todo başarıyla silindi");
    }
});

clearTodo.addEventListener("click", clearMen);
function clearMen() {
    localStorage.clear();
    let clearList = document.getElementsByClassName("list-group-item");
    while (clearList.length > 0) {
        listGroup.removeChild(clearList[0]);
    }
}

function createTag(todoInput) {
    let iTag = document.createElement("i");
    iTag.setAttribute("class", "bi bi-x");
    let aTag = document.createElement("a");
    aTag.setAttribute("href", "#");
    let liTag = document.createElement("li");
    liTag.setAttribute("class", "list-group-item mb-2 border border-1 d-flex justify-content-between checked")
    liTag.innerText = todoInput;
    aTag.appendChild(iTag);
    liTag.appendChild(aTag);
    listGroup.appendChild(liTag);
    document.getElementById("todoInput").value = "";
}