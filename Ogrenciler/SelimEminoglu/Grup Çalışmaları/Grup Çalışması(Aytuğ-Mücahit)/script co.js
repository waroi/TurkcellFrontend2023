const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-todo");
const todolist = document.querySelector("#todo-list");
const removeBtn = document.querySelector("#delete-all");
const errorText = document.querySelector("#error-text");
const searchTodo = document.querySelector("#search-todo");

addBtn.addEventListener("click", inputCheck);
removeBtn.addEventListener("click", removeLocal);
searchTodo.addEventListener("input", searchTodos);

let list = document.getElementById("todo-list");

function inputCheck(e) {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    errorText.textContent = "Please enter a task.";
  } else if (todoInput.value.length > 50) {
    (errorText.textContent = "Lütfen 50 Karakteri Aşmayınız");
  }
  else {
    errorText.textContent = "";
    addTodo();
  }
}

function addTodo() {
  const todo = {
    id: Date.now(),
    text: todoInput.value.trim(),
    completed: false
  };
  
  saveToLocalStorage(todo);
  renderTodo(todo);
  todoInput.value = "";
}

function renderTodo(todo) {
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
    newTodo.innerText = todo.text;
    newButton.classList.add("bi", "bi-x-square-fill", "text-white");
    const updateButton=document.createElement("button");
    updateButton.classList.add("text-white","bg-primary");
    const updateBtnText=document.createTextNode("Güncelle");
    updateButton.appendChild(updateBtnText);
    list.appendChild(newTodo);
    newTodo.appendChild(updateButton);
    newTodo.appendChild(newButton);
		newTodo.querySelector(".delete-todo").addEventListener("click", deleteTodo);
    todoInput.value = "";
}



function searchTodos(e) {
  const searchTerm = e.target.value.toLowerCase();
  const todos = list.getElementsByTagName("li");
  Array.from(todos).forEach(todo => {
    const todoText = todo.innerText.toLowerCase();
    if (todoText.includes(searchTerm)) {
      todo.style.display = "block";
    } else {
      todo.style.cssText = "display:none !important";
    }
  });
}


function saveToLocalStorage(todo) {
  let todos = getTodosFromLocalStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosFromLocalStorage() {
  let todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function toggleCompleted(e) {
  const li = e.target.parentElement;
  const id = li.getAttribute("data-id");
  let todos = getTodosFromLocalStorage();

  todos = todos.map(todo => {
    if (todo.id.toString() === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.closest("li");
  const text = li.innerText;

  const textNum=[];
  for(let i=0;i<=text.length;i++) {
    if(text[i]=="\n"){
      break;
    }
    else{
      textNum.push(text[i]);
    }
  }
 
  let todos = getTodosFromLocalStorage();
  todos = todos.filter(todo => todo.text !== textNum.toString().split(",").join(""));
  localStorage.setItem("todos", JSON.stringify(todos));

  li.remove();
}


 function removeLocal() {
  list.innerHTML = "";
 	todos = [];
 	localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodosFromLocalStorage() {
  const todos = getTodosFromLocalStorage();
  todos.forEach(todo => renderTodo(todo));
}

loadTodosFromLocalStorage();

const clockTodo = document.querySelector("#date");

function clock() {
    let date = new Date().toString().slice(16, 25);
    clockTodo.innerText = date;
}

clockTodo.addEventListener("change", clock);

setInterval(clock, 1000);
