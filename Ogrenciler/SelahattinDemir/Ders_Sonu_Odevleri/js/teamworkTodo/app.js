const addToDoBtn = document.querySelector("#btn-add");
const clearToDos = document.querySelector("#btn-clr");

const addToDoInp = document.getElementById("inp-enter");
const searchToDo = document.getElementById("inp-search");

const toDoList = document.getElementById("items");

const toDos = [];

addToDoBtn.addEventListener("click", addToDo);
clearToDos.addEventListener("click", clearToDo);

// ToDo Ekleme
function addToDo() {
  const toDo = addToDoInp.value;
  toDos.push(toDo);
  addToDoInp.value = "";
  showToDo();
}
// ToDo Gösterme
function showToDo() {
  const listItem = document.createElement("li");
  const xCircle = document.createElement("i");
  const toDoText = document.createTextNode(toDos[toDos.length - 1]);
  listItem.className = "d-flex justify-content-between align-items-center";
  xCircle.className = "bi bi-x-circle-fill fs-3 text-danger";
  listItem.appendChild(toDoText);
  listItem.appendChild(xCircle);
  toDoList.appendChild(listItem);
  listItem.addEventListener("click", () => {
    deleteToDo(listItem);
  });
}
// ToDo Arama

// ToDo Silme
function deleteToDo(listItem) {
  listItem.remove();
}

// Tüm ToDo'ları Silme
function clearToDo() {
  toDoList.innerHTML = "";
}
