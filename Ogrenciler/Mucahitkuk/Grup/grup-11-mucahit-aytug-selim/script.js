const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-list");
const removeBtn = document.querySelector("#delete-all");
const errorText = document.querySelector("#error-text");
const searchTodo = document.querySelector("#search-todo");
addBtn.addEventListener("click", addTodo);
removeBtn.addEventListener("click", clearTodoList);
searchTodo.addEventListener("input", searchTodos);

let list = document.getElementById("todo-list");

function addTodo() {
  if (todoInput.value == "") {
    return (errorText.innerText = "Lütfen Bir Todo Giriniz.");
  }
  errorText.innerText = "";
  const newTodo = document.createElement("li");
  const newButton = document.createElement("button");
  newTodo.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "relative",
    "l-0",
    "bg-danger",
    "p-2",
    "rounded",
    "outline-0",
    "mb-2",
    "text-white"
  );
  newButton.classList.add("bg-transparent", "me-3", "border-0", "delete-todo");
  newTodo.innerText = todoInput.value;
  newButton.innerText = "X";
  newTodo.appendChild(newButton);
  list.appendChild(newTodo);
  const deleteTodos = document.querySelectorAll(".delete-todo");
  deleteTodos.forEach((deleteTodo) => {
    deleteTodo.addEventListener("click", clearTodo);
  });
  todoInput.value = "";
}

function searchTodos(searchTodo) {
  example = document.querySelectorAll("li");
  example.forEach((i) => {
    if (i.innerText.includes(searchTodo.target.value)) {
      i.classList.remove("d-none");
    } else {
      i.classList.add("d-none");
    }
  });
}

function clearTodoList() {
  list.innerHTML = "";
}

function clearTodo() {
  return document.querySelector("li").remove();
}
