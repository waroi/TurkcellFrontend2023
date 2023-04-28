let todo_value = document.querySelector("#add_todo");
let add_button = document.querySelector("#add_button");
let search_input = document.querySelector("#search_todo");
let todo_list = document.querySelector("#todo_list");
let clear_all = document.querySelector("#clear_all");
let list_item = document.querySelectorAll("li");

let item = todo_list.children;
let list_array = [];
let local_value = JSON.parse(localStorage.getItem("todos"));
// console.log(local_value);
function local_list() {
if(local_value){
  for (let i = 0; i < local_value.length; i++) {
    let listItem = document.createElement("li");
    listItem.classList = "list-group-item";
    listItem.innerText = local_value[i];
    todo_list.appendChild(listItem);
  }
 }
}
local_list();

function addfunc(e){
  let value = todo_value.value;
  if(value !== " "){
    list_array.push(value);
    let listItem = document.createElement("li");
    listItem.classList = "list-group-item";
    listItem.innerText = value;
    todo_list.appendChild(listItem);
  todo_value.value = "";
  saveTodo();
}else{ 
  alert("please add todo");
}
}


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
  for (let i = 0; i < item.length; i++) {
    const text = item[i].textContent;
    let include = text.toLowerCase().indexOf(search.toLowerCase());
    if (include > -1) {
      item[i].style.display = "";
    }
    else {
      item[i].style.display = "none";
    }
  }
  // list_array.forEach((item) => {
  //   // console.log(text);
  //   let include = item.toLowerCase().indexOf(search.toLowerCase());
  //   console.log(include);
  //   if(include > -1){
      
  //   }
  //   else{
  //     item.style.display ="none";
  //   }
  // })

})
clear_all.addEventListener("click", () => {
  todo_list.innerHTML= " ";
  // for (let i = 0; i < item.length; i++) {
  //   item[i].remove();
  // }
 localStorage.removeItem("todos");
})

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(list_array));
}