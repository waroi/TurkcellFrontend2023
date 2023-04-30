const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const clearButton = document.getElementById("todo-clear");
const addButton = document.getElementById("todo-add");
const cardBodyOne = document.querySelectorAll(".card-body")[0];
const filter = document.getElementById("filter");


//eventListener
addButton.addEventListener("click", addTodo);
clearButton.addEventListener("click", deleteAllTodo);
filter.addEventListener("keyup", filterTodos);
document.addEventListener("DOMContentLoaded", loadTodosUI);
form.addEventListener("keypress", handleKeyPress);
function todoUI(todo) {
  todoInput.value = "";
  let listItem = document.createElement("li");
  let removeBtn = document.createElement("span");
  removeBtn.href = "#";
  removeBtn.className = "delete-item";
  removeBtn.innerHTML =
    "<a> <i onclick='checkedbutton(event)' class='m-2 bi bi-calendar2-check todo-check'></i></a> <a> <i onclick='editbutton(event)' class='m-2 bi bi-pencil-square'></i> </a> <a> <i onclick='deleteTodo2(event)' class='bi bi-x'></i></a> ";
  const textSpan = document.createElement("span");
  textSpan.className = "text-span";
  textSpan.appendChild(document.createTextNode(todo.name));
  listItem.appendChild(textSpan);
  const textinput = document.createElement("input");
  textinput.value = todo.name;
  textinput.className = "textinput d-none";
  listItem.appendChild(textinput);
  listItem.appendChild(removeBtn);
  listItem.className =
    "list-group-item mb-2 border border-1 d-flex justify-content-between";
  if (todo.state) {
    listItem.classList.add("checked");
  }
  todoList.appendChild(listItem);
}
function loadTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}
function addLocalTodo(todoInputText) {
  let todos = loadTodos();
  todos.push(todoInputText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodosUI() {
  let todos = loadTodos();
  todos.forEach(function (todo) {
    todoUI(todo);
  });
}
function addTodo(e) {
  let found = false;
  let todos = loadTodos();
  todos.forEach((todo) => {
    if (todo.name == todoInput.value.trim()) {
      found = true;
      alert("bu todo zaten var");
    }
  });
  if (!found) {
    const newTodo = {
      state: false,
      name: todoInput.value.trim(),
    };

    if (newTodo.name == "") {
      alert("todo gir güzel kardeşim");
    } else {
      addLocalTodo(newTodo);
      todoUI(newTodo);
    }
  }
}
function handleKeyPress(e) {
  if (e.keyCode === 13 ) {
    e.preventDefault();
    addTodo();
  }
}
function deleteAllTodo() {
  while (todoList.firstChild != null) {
    todoList.removeChild(todoList.firstChild);
  }
  localStorage.removeItem("todos");
}
function deleteTodo2(e) {
  const listItem = e.target.closest(".list-group-item");
  const todoText = listItem.querySelector(".text-span").textContent;
  deleteStorage(todoText);

  let todos = loadTodos();
  todos = todos.filter((todo) => todo.name !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));

  listItem.remove();
}
function deleteStorage(willDeleted) {
  let todos = loadTodos();
  todos = todos.filter((todo) => todo !== willDeleted);
  if (todos.length == 0) {
  localStorage.removeItem("todos");
  } else {
  localStorage.setItem("todos", JSON.stringify(todos));
  }
  }
function checkedbutton(e) {
  let todos = loadTodos();
    e.target.closest(".list-group-item").classList.toggle("checked");
    todos.forEach((todo) => {
      if (
        e.target.closest(".list-group-item").firstChild.textContent == todo.name
      ) {
        todo.state = !todo.state;
        console.log(todo);
      }
    });
  localStorage.setItem("todos", JSON.stringify(todos));
}
function editbutton(e) {
  let todos = loadTodos();
  let editedValue = e.target.closest(".list-group-item").firstChild.nextSibling.value;
  e.target.closest(".list-group-item").firstChild.style.display = "none";
  e.target.closest(".list-group-item").firstChild.nextSibling.classList.remove("d-none");
  e.target.closest(".list-group-item").firstChild.nextSibling.focus();
  e.target.closest(".list-group-item").firstChild.nextSibling.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.closest(".list-group-item").firstChild.nextSibling.classList.add("d-none");
      e.target.closest(".list-group-item").firstChild.nextSibling.previousSibling.style.display = "block";
      todos.forEach((todo) => {
        if (editedValue == todo.name && e.target.closest(".list-group-item").firstChild.nextSibling.value !== "") {
          todo.name = e.target.closest(".list-group-item").firstChild.nextSibling.value;

          localStorage.setItem("todos", JSON.stringify(todos)); // değişiklikler burada kaydediliyor
          while (todoList.firstChild != null) {
            todoList.removeChild(todoList.firstChild);
          }
          loadTodosUI();
        }
      });
    }
  });
  
}
function filterTodos(e) {

  const filterValue = e.target.value.toLowerCase();
  const listItems = Array.from(document.querySelectorAll(".list-group-item"));
  listItems.map((listItem) => {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      listItem.setAttribute("style", "display:none !important");
    } else {
      listItem.setAttribute(
        "style",
        "display:block !important d-flex justify-content-between"
      );
    }
  });
}
