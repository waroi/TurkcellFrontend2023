let todo_value = document.querySelector("#add_todo");
let add_button = document.querySelector("#add_button");
let search_input = document.querySelector("#search_todo");
let todo_list = document.querySelector("#todo_list");
let clear_all = document.querySelector("#clear_all");
let list_item = document.querySelectorAll("li");
let local_value =  localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
let todo_inner={};

add_button.addEventListener("click", addTodo);
todo_value.addEventListener("keypress",(e) => e.key == "Enter" ? addTodo(e) : "");
todo_list.addEventListener("click",removeTodo);
clear_all.addEventListener("click",clearAllTodos);
search_input.addEventListener("keyup", filterTodos)

function addTodo(e){
  let value = todo_value.value.trim();
  todo_inner = {
    id: Math.round(Math.random() *10000),
    value: value,
    isDone: false,
  }
  if(value !== ""){
    e.preventDefault();
    local_value.push(todo_inner);
    localStorage.setItem("todos",JSON.stringify(local_value));
    todo_value.value = "";
    createTodo(todo_inner);
  }else{
    alert("please enter a todo");
  }
}

 local_value.forEach(element => {
   createTodo(element);
  }
 );

function createTodo(todo) {
  let listItem = document.createElement("li");
  listItem.classList = `${todo.isDone == true ? "bg-success" : ""} list-group-item d-flex justify-content-between align-items-center`;
  listItem.innerText = todo.value;
  listItem.id = todo.id;
  let tag = document.createElement("span");
  tag.classList = "fa-solid fa-x fs-6 text-secondary"
  todo_list.appendChild(listItem);
  listItem.appendChild(tag);
}
function filterTodos(e){
  let search = e.target.value;
  for (let i = 0; i < todo_list.children.length; i++) {
    const text = todo_list.children[i].innerText;
    let include = text.toLowerCase().indexOf(search.toLowerCase());
    // console.log(include);
    // console.log(local_value[i]);
    if (include > -1) {
      console.log(todo_list.children[i]);
      todo_list.children[i].classList.add("d-block");
      todo_list.children[i].classList.remove("d-none");

    }else{
      todo_list.children[i].classList.add("d-none");
    }
  }
}
function removeTodo(e) {
  if(e.target.tagName == "SPAN"){
    // console.log(e.target.parentElement.id);
    e.target.parentElement.classList.add("d-none");
    let todo_id = e.target.parentElement.id;
    let inner_id = local_value.findIndex((e) => e.id == todo_id);
    local_value.splice(inner_id,1);
    localStorage.setItem("todos",JSON.stringify(local_value));
  }
  else if(e.target.tagName == "LI") {
    let todo_id = e.target.id;
    e.target.classList.toggle("bg-success");
    let inner_id = local_value.findIndex((e) => e.id == todo_id);
    local_value[inner_id].isDone == false ? local_value[inner_id].isDone = true : local_value[inner_id].isDone = false;
    // console.log(local_value[inner_id]);
    localStorage.setItem("todos",JSON.stringify(local_value));
  }
}
function clearAllTodos() {
  local_value.splice(0,local_value.length);
  localStorage.setItem("todos",JSON.stringify(local_value));
  todo_list.innerHTML="";
}