const form1 = document.querySelector("#addForm");

let items = document.getElementById("items");
let submit = document.getElementById("submit");
let textInputItem = document.getElementById("textInputItem");

form1.addEventListener("submit", addItem);
textInputItem.addEventListener("click", clearText);

let todoItems = [];

function addItem(e) {
  e.preventDefault();

  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger";
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", deleteItem);

  const listP = document.createElement("p");
  listP.innerHTML = textInputItem.value;

  const listItem = document.createElement("li");
  listItem.className = "text-black";
  listItem.appendChild(deleteButton);
  listItem.appendChild(listP);

  items.appendChild(listItem);

  todoItems.push(textInputItem.value);

  localStorage.setItem("todoItems", JSON.stringify(todoItems));
  console.log("Gönderildi");
  let usersLocal = JSON.parse(localStorage.getItem("todoItems"));

  console.log("Local Storage before deleting:\n" + usersLocal);

  function deleteItem(e) {
    e.preventDefault();
    let check = todoItems.find(checkItem);

    function checkItem(item) {
      return item == listP.innerText;
    }
    let deletingItem = todoItems.indexOf(check);

    todoItems.splice(deletingItem, 1);

    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    let usersLocal = JSON.parse(localStorage.getItem("todoItems"));

    console.log("Local Storage after deleting\n" + usersLocal);
    listItem.remove(e.target);
  }


}

function clearText(e){
    e.preventDefault();

    textInputItem.value = ''
  }