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
		errorText.textContent = "Lütfen 50 Karakteri Aşmayınız";
	} else {
		errorText.textContent = "";
		addTodo();
	}
}

function addTodo() {
	const todo = {
		id: Date.now(),
		text: todoInput.value.trim(),
		completed: false,
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
		"p-2",
		"rounded",
		"outline-0",
		"mb-2",
		"text-white",
	);
	newButton.classList.add("bg-transparent", "me-3", "border-0", "delete-todo");
	newTodo.innerText = todo.text;
	newButton.classList.add("bi", "bi-x-square-fill", "text-white");
	list.appendChild(newTodo);
	newTodo.appendChild(newButton);
	if (todo.completed) {
		newTodo.classList.add("bg-success");
	} else {
		newTodo.classList.add("bg-danger");
	}
	newTodo.addEventListener("click", toggleCompleted);
	newTodo.querySelector(".delete-todo").addEventListener("click", deleteTodo);
	todoInput.value = "";
}

function searchTodos(e) {
	const searchTerm = e.target.value.toLowerCase();
	const todos = list.getElementsByTagName("li");
	Array.from(todos).forEach((todo) => {
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
	const li = e.target;
	const text = li.innerText;
	let todos = getTodosFromLocalStorage();

	todos = todos.map((todo) => {
		if (todo.text.toString() == text) {
			return { ...todo, completed: !todo.completed };
		}
		return todo;
	});

	todos=todos.map((todo)=>{
		console.log(li.classList);
		if(todo.completed==false){
			li.classList.add("bg-danger");
			li.classList.remove("bg-success");
			return todo;
		}
		else{
			li.classList.add("bg-success");
			li.classList.remove("bg-danger");
			return todo;
		}
	});

	localStorage.setItem("todos", JSON.stringify(todos));
	// Toggle completed class on the todo item
	li.classList.toggle("completed");
}

function deleteTodo(e) {
	const li = e.target.closest("li");
	const text = li.innerText;

	let todos = getTodosFromLocalStorage();
	todos = todos.filter((todo) => todo.text !== text);
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
	todos.forEach((todo) => renderTodo(todo));
}

loadTodosFromLocalStorage();

const clockTodo = document.querySelector("#date");

function clock() {
	let date = new Date().toString().slice(16, 25);
	clockTodo.innerText = date;
}

clockTodo.addEventListener("change", clock);

setInterval(clock, 1000);
