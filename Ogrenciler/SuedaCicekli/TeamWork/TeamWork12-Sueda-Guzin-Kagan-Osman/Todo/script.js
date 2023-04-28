let form = document.getElementById("todoForm");
let deletedItem = document.getElementById("deleteAll");
let search = document.getElementById("search");

eventListener();

window.addEventListener("DOMContentLoaded", render);

function eventListener() {
  form.addEventListener("submit", addTodo);
  deletedItem.addEventListener("click", () => {
    deleteAllItem();
    delStorage();
  });
  search.addEventListener("keyup", searchTodo);
}

function addTodo(e) {
  let todo
  let input = document.getElementById("entryTodo").value;
  document.getElementById("entryTodo").value = '';
  e.preventDefault();
  getStorage() != null ? todo = getStorage() : todo = [];
  todo.push(input);
  addStorage(todo);
  console.log(getStorage());
  render();
}

function render() {
  deleteAllItem();
  let todos = getStorage();
  todos.map((todo, index) => {
    const item = document.createElement("li");
    item.className = "todoItem d-flex justify-content-between my-1";
    const deleteButton = document.createElement("button");
    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-solid fa-trash");
    deleteButton.appendChild(deleteIcon);
    deleteButton.className = "deleteItemButton btn btn-danger";
    deleteButton.addEventListener("click", function () {
      item.remove();
      console.log(index, todos[index]);
      todos.splice(index, 1);
      addStorage(todos);
      render();
    })
    const text = document.createTextNode(todo);
    item.appendChild(text);
    item.appendChild(deleteButton);
    document.getElementById("todoItems").appendChild(item);
  })
}

function deleteAllItem() {
  let value = document.querySelectorAll(".todoItem");
  value.forEach((item) => {
    item.remove();
  })
}

function searchTodo(e) {
  const filterValue = e.target.value.toLowerCase();
  console.log(filterValue);

  let todoItems = document.querySelectorAll(".todoItem");

  todoItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      listItem.setAttribute("style", "display : none !important");
    } else {
      listItem.setAttribute("style", "display : block ");
    }
  });
}

function addStorage(storageArray) {
  localStorage.setItem("data", JSON.stringify(storageArray));

}

function getStorage() {
  return JSON.parse(localStorage.getItem("data"));

}

function delStorage() {
  localStorage.clear();
}

