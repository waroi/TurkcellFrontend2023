let todo_value = document.querySelector("#add_todo");
let add_button = document.querySelector("#add_button");
let search_input = document.querySelector("#search_todo");
let todo_list = document.querySelector("#todo_list");
let clear_all = document.querySelector("#clear_all");
let list_item = document.querySelectorAll("li");
let local_value = JSON.parse(localStorage.getItem("todos")) || [];
let list_array = [];
if (local_value !== null) {
  list_array = [...local_value];
}else{
  list_array =[];
}

function local_list() {
if(local_value){
  for (let i = 0; i < local_value.length; i++) 
  {
    let listItem = document.createElement("li");
    listItem.classList = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = local_value[i].value;
    todo_list.appendChild(listItem);
    let tag = document.createElement("span");
    tag.classList = "fa-solid fa-x fs-6 text-secondary"
    listItem.appendChild(tag);
   }
  }
}
local_list();

function addfunc(e){
  let value = todo_value.value.trim();
  if(value !== " "){
    list_array = [...list_array,{value:value,isDone: false}];
    let listItem = document.createElement("li");
    listItem.classList = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = value;
    todo_list.appendChild(listItem);
    let tag = document.createElement("span");
    tag.classList = "fa-solid fa-x fs-6 text-secondary"
    listItem.appendChild(tag);
  todo_value.value = "";
}else{ 
  alert("please add todo");
}
saveTodo();
}
todo_list.addEventListener("click", (e) => {
  let item_inner = e.target.innerText;
  let local = local_value.find((e)=> e.value == item_inner);
  if(e.target.tagName == "LI"){
    e.target.classList.toggle("bg-success");
    // console.log(item_inner);
    // console.log(local_value);
    // if(e.target.classList.contains("bg-success")){
      //   local.isDone == true;
      //   console.log(local);
      // }else{
//   local.isDone == false;
// }
// if (local.isDone == false) {
  //   e.target.classList.remove("bg-success");
  // }else{
    //   e.target.classList.add("bg-success");
    //  }
  }
  if(e.target.tagName =='SPAN'){
    e.target.classList.remove("bg-success");
    e.target.parentElement.remove();
    saveTodo();
  }
}
)

add_button.addEventListener("click", addfunc);
todo_value.addEventListener("keypress",(e) => {
  e.key == "Enter" ? addfunc() : " ";
});

todo_value.addEventListener("focus", () => {
  todo_value.value = " ";
})

search_input.addEventListener("keyup", (e) => {
  let search = e.target.value;
  console.log(list_item);
  for (let i = 0; i < local_value.length; i++) {
    const text = local_value[i].value.textContent;
    let include = text.toLowerCase().indexOf(search.toLowerCase());
    if (include > -1) {
      local_value[i].style.display = "";
    }
    else {
      local_value[i].style.display = "none";
    }
  }
})
clear_all.addEventListener("click", () => {
  todo_list.innerHTML= " ";
 localStorage.removeItem("todos");
})

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(list_array));
}