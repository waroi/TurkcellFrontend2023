const value = document.getElementById("input-data");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-li");
const filter = document.getElementById("filter");

addButton.addEventListener("click", addtoDo);

function addtoDo() {
    const newToDo = value.value.trim();

    if (newToDo == "") {
        alert("Boş değer girdiniz.");
    }
    else {
        addtoDoUI(newToDo);

    }
}

function addtoDoUI(newToDo) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#"
    link.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    listItem.className = "listItem";
    listItem.appendChild(document.createTextNode(newToDo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    value.value = "";
}

function deleteToDo(e) {
    if (e.target.className == "fa-solid fa-xmark") {
        e.target.parentElement.parentElement.remove()
    }
}

todoList.addEventListener("click", deleteToDo);

function deleteAll() {
    todoList.innerHTML = "";
}

clearButton.addEventListener("click", deleteAll);

function filterToDo(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".listItem");
    listItems.forEach((listItem) => {
        const text = listItem.textContent.toLowerCase();
        if (text.includes(filterValue)) {
            listItem.setAttribute("style", "display:block")
        }
        else {
            listItem.setAttribute("style", "display:none")
        }
    }
    )
}

filter.addEventListener("input", filterToDo);