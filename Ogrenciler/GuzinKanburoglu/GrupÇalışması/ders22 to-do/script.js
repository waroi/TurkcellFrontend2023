let form = document.getElementById("todoForm");
let todos = [];
form.addEventListener("submit", addTodo);

function addTodo(e){
    let input = document.getElementById("entryTodo").value;
    console.log(e);
    e.preventDefault();
    addItem(input);
}

function addItem(input){
const item = document.createElement("li");
item.className = "d-flex justify-content-between todoItem";
const deleteButton = document.createElement("button");
deleteButton.appendChild(document.createTextNode("X"));
deleteButton.className = "deleteItemButton btn btn-primary";
const text = document.createTextNode(input);
item.appendChild(text);
item.appendChild(deleteButton);
document.getElementById("todoItems").appendChild(item);
}

let deletedItem = document.getElementById("deleteAll");
deletedItem.addEventListener("click", deleteAllItem);

function deleteAllItem(){
  let value = document.querySelectorAll(".todoItem");
  value.forEach((item)=>{
    item.remove();
  })
}

// let deleteItemButton = document.getElementsByClassName("deleteItemButton");
// console.log(deleteItemButton);
// deleteItemButton.addEventListener("click",deleteItem);

function deleteItem(){

    // let value = document.querySelector(".todoItem");
    // value.remove();

console.log("dkfjdkfsldf");
}