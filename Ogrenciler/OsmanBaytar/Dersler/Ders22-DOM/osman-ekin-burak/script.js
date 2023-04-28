const value = document.getElementById("input-data");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-li");
const filter = document.getElementById("filter");

addButton.addEventListener("click", addtoDo);

function addtoDo() {
    const newToDo = { name: value.value.trim(), state: false };
    if (newToDo == "") {
        alert("Boş değer girdiniz.");
    }
    else {
        addtoDoUI(newToDo);
        addStorage(newToDo);
    }
}

function addtoDoUI(newToDo) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#"
    link.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    listItem.className = "listItem";
    if (newToDo.state) {
        listItem.setAttribute("style", "text-decoration:line-through");
    }
    else {
        listItem.setAttribute("style", "text-decoration:none");
    }
    listItem.appendChild(document.createTextNode(newToDo.name));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    value.value = "";
}

function deleteToDo(e) {
    if (e.target.className == "fa-solid fa-xmark") {
        e.target.parentElement.parentElement.remove()
        removesSingleStorage(e.target.parentElement.parentElement.textContent);
    }
}

todoList.addEventListener("click", deleteToDo);

function deleteAll() {
    todoList.innerHTML = "";
    localStorage.removeItem("todos");
}

clearButton.addEventListener("click", deleteAll);

function filterToDo(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".listItem");
    listItems.forEach((listItem) => {
        const text = listItem.textContent.toLowerCase();
        if (text.includes(filterValue)) {
            listItem.classList.add("d-block");
            listItem.classList.remove("d-none");
        }
        else {
            listItem.classList.remove("d-block");
            listItem.classList.add("d-none");
        }
    }
    )
}

filter.addEventListener("input", filterToDo);

function getStorage() {
    let todos;
    if (localStorage.getItem("todos") == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addStorage(newToDo) {
    let todos = getStorage();
    todos.push(newToDo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function laodTodosUI() {
    let todos = getStorage();
    todos.forEach((todo) => (addtoDoUI(todo)));

}

document.addEventListener("DOMContentLoaded", laodTodosUI);

function removesSingleStorage(deletedTodo) {
    let todos = getStorage();
    for (let i = 0; i < todos.length; i++) {
        if (deletedTodo == todos[i].name) {
            todos.splice(i, 1);
        }
    }
    if (todos.length == 0) {
        localStorage.removeItem("todos");
    }
    else {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

function changeState(e) {
    let todos = getStorage();
    if (e.target.className == "listItem") {
        todos.forEach((todo) => {
            if (todo.name == e.target.textContent) {
                todo.state = !todo.state;
            }
        })

    }
    localStorage.setItem("todos", JSON.stringify(todos));
}

todoList.addEventListener("click", changeState);

function changeStyle(e) {
    let todos = getStorage();
    if (e.target.className == "listItem") {
        todos.forEach((todo) => {
            if (todo.name == e.target.textContent) {
                if (todo.state) {
                    e.target.setAttribute("style", "text-decoration:line-through");
                }
                else {
                    e.target.setAttribute("style", "text-decoration:none");
                }
            }
        })
    }
}

todoList.addEventListener("click", changeStyle);