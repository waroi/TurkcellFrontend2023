const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-todo");
const todolist = document.querySelector("#todo-list");
const removeBtn = document.querySelector("#delete-all");
const errorText = document.querySelector("#error-text");
const searchTodo = document.querySelector("#search-todo");

addBtn.addEventListener("click", inputCheck);
removeBtn.addEventListener("click", clearTodoList);
searchTodo.addEventListener("input", searchTodos);

let list = document.getElementById("todo-list");
let toDoLocalList = [];

if (localStorage.getItem("todolist")) {
	toDoLocalList = JSON.parse(localStorage.getItem("todolist"));
} else {
	localStorage.setItem("todolist", JSON.stringify(toDoLocalList));
}

function removeLocal() {
	toDoLocalList = [];
	localStorage.setItem("todolist", JSON.stringify(toDoLocalList));
}

function inputCheck() {
	if (todoInput.value.trim("") == "") {
		return (errorText.innerText = "Lütfen Bir Todo Giriniz.");
	} else if (todoInput.value.length > 50) {
		return (errorText.innerText = "Lütfen 50 Karakteri Aşmayınız");
	}
	errorText.innerText = "";

	addTodo(todoInput.value);
}

function addTodo(input) {
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
	newTodo.innerText = input;
	toDoLocalList.push(newTodo.innerText);
	localStorage.setItem("todolist", JSON.stringify(toDoLocalList));
	newButton.classList.add("bi", "bi-x-square-fill", "text-white");
	list.appendChild(newTodo);
	newTodo.appendChild(newButton);
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
	removeLocal();
	ListTodos();
}

let newLocal = [];

function clearTodo() {
	newLocal = JSON.parse(localStorage.getItem("todolist"));
	let den = document.querySelector("li").innerText;
	toDoLocalList = newLocal.filter((number) => number != den);

	localStorage.setItem("todolist", JSON.stringify(toDoLocalList));
	ListTodos();
	return document.querySelector("li").remove();
}

function ListTodos() {
	toDoLocalList = JSON.parse(localStorage.getItem("todolist"));
	toDoLocalList.map((item) => {
		console.log(item);
		addTodo(item);
	});
}

const clockTodo = document.querySelector("#date");

function clock() {
	let date = new Date().toString().slice(16, 25);
	clockTodo.innerText = date;
}

ListTodos();

clockTodo.addEventListener("change", clock);

setInterval(clock, 1000);

// SAYFA YENİLENDİĞİNDE LOCAL STOGRAGEYE AYNI VERİLEREİ EKLEME SORUNU
