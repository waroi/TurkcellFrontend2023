var todoInput = document.getElementById("todoInput");
let addTodo = document.getElementById("addTodo");
var todoList = document.getElementById("todoList");
var clearAll = document.getElementById("clearAll");

function addTodoFunc(){
    var context = todoInput.innerText;
    var liElement = document.createElement("li");
    liElement.appendChild(document.createTextNode(context));
    console.log(context);
    console.log("buradayım");
    todoList.appendChild(liElement);
}

addTodo.addEventListener("click", addTodoFunc);
