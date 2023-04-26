const value = document.getElementById("input-data");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-li");


addButton.addEventListener("click", addtoDo);

function addtoDo() {
    const newToDo = value.value.trim();
    if (newToDo == "") {
        alert("Boş değer girdiniz.");
    }
    else {
        addtoDoUI(newToDo);
        alert("Değer başarıyla eklendi.");
    }
}

function addtoDoUI(newToDo) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#"
    link.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    listItem.appendChild(document.createTextNode(newToDo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    value.value = "";
}