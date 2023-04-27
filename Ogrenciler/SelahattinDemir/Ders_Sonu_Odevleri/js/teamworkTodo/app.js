const addToDoBtn = document.querySelector("#btn-add");
const clearToDos = document.querySelector("#btn-clr");
const addToDoInp = document.getElementById("inp-enter");
const searchToDo = document.getElementById("inp-search");
const toDoList = document.getElementById("items");
const toDos = [];
addToDoBtn.addEventListener("click", addToDo);
clearToDos.addEventListener("click", clearToDo);

// ToDo Ekleme
function addToDo(e) {
  e.preventDefault();
  const toDo = addToDoInp.value;
  const toDoCheck = toDo.replace(/ /g, "");

  if (toDoCheck === "") {
    alert("Lütfen boş");
  } else {
    toDos.push(toDo);
    addToDoInp.value = "";
    showToDo(toDos);
  }
}
// ToDo Gösterme
function showToDo(toDos) {
  const listItem = document.createElement("li");
  const xCircle = document.createElement("i");
  const toDoText = document.createTextNode(toDos[toDos.length - 1]);
  listItem.className = "d-flex justify-content-between align-items-center";
  xCircle.className = "bi bi-x-circle-fill fs-3 text-danger";
  listItem.appendChild(toDoText);
  listItem.appendChild(xCircle);
  toDoList.appendChild(listItem);
  xCircle.addEventListener("click", () => {
    deleteToDo(listItem);
  });
}
// ToDo Arama
searchToDo.addEventListener("keyup", searchToDos);
function searchToDos() {
  const toDoSearch = searchToDo.value.toLowerCase();
  console.log(toDoSearch);
  Array.from(toDoList.children).forEach((y) => {
    console.log(y);
    if (!y.textContent.includes(toDoSearch)) {
      y.className = "d-none";
    } else {
      y.className = "d-flex justify-content-between align-items-center";
    }
  });
}

// ToDo Silme
function deleteToDo(listItem) {
  listItem.remove();
}

// Tüm ToDo'ları Silme
function clearToDo() {
  toDoList.innerHTML = "";
}
