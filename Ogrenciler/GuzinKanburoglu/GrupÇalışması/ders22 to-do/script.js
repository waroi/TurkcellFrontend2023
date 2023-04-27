let form = document.getElementById("todoForm");
form.addEventListener("submit", addTodo);

function addTodo(e){
    let input = document.getElementById("entryTodo").value;
    e.preventDefault();
    addItem(input);
}

function addItem(input){
const item = document.createElement("li");
item.className = "d-flex justify-content-between todoItem my-1";
const deleteButton = document.createElement("button");
deleteButton.appendChild(document.createTextNode("X"));
deleteButton.className = "deleteItemButton btn btn-primary";
deleteButton.addEventListener("click", function () {item.remove();})
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