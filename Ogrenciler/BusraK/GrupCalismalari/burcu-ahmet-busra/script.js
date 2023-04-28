const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const clearButton = document.getElementById("todo-clear");
const addButton = document.getElementById("todo-add");
const cardBodyOne = document.querySelectorAll(".card-body")[0];
const cardBodyTwo = document.querySelectorAll(".card-body")[1];
const filter = document.getElementById("filter");
const secretInput = document.createElement("input");

//eventListener
addButton.addEventListener("click", addTodo);
clearButton.addEventListener("click", deleteAllTodo);
cardBodyTwo.addEventListener("click", deleteTodo);
filter.addEventListener("keyup", filterTodos);

function addTodo(e) {
  let listGroup = document.createElement("ul");
  const todoInputText = todoInput.value.trim();
  if (todoInputText == "") {
    alert("todo gir güzel kardeşim");
  } else {
    todoInput.value = "";
    listGroup.className = "list-group";
    let listItem = document.createElement("li");
    let removeBtn = document.createElement("span");
    removeBtn.href = "#";
    removeBtn.className = "delete-item";
    removeBtn.innerHTML =
      "<a> <i class='m-2 bi bi-calendar2-check todo-check'></i></a> <a> <i class='bi bi-x'></i></a> ";
    const textSpan = document.createElement("span");
    secretInput.classList.add("d-none");
    textSpan.className = "text-span";
    textSpan.appendChild(document.createTextNode(todoInputText));
    listItem.appendChild(textSpan);
    listItem.appendChild(secretInput);
    listItem.appendChild(removeBtn);
    listItem.className =
      "list-group-item mb-2 border border-1 d-flex justify-content-between";
    todoList.appendChild(listItem);
  }
  e.preventDefault();
}

function deleteAllTodo() {
  while (todoList.firstChild != null) {
    todoList.removeChild(todoList.firstChild);
  }
}

function deleteTodo(e) {
  if (e.target.className === "bi bi-x") {
    e.target.closest(".list-group-item").remove();
  }
}

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("bi-calendar2-check")) {
    e.target.closest(".list-group-item").classList.toggle("checked");
  }
});

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
