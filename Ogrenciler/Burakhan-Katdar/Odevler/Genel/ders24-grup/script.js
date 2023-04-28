const form1 = document.querySelector("#addForm");

let items = document.getElementById("items");
let submit = document.getElementById("submit");
let textInputItem = document.getElementById("textInputItem");

form1.addEventListener("submit", addItem);


let todoItems = [];


function addItem (e){
    e.preventDefault();

    itemID = todoItems;
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.innerText = "Delete";
    deleteButton.id = `${itemID}`;
    deleteButton.addEventListener("click", deleteItem);

    const listItem = document.createElement("li");
    listItem.id = deleteButton.id;
   
    listItem.className = "text-black";
    listItem.innerText = textInputItem.value;
    listItem.appendChild(deleteButton)
    
    console.log("listItem ID " + listItem.id);
    console.log("deleteButton ID " + deleteButton.id);


    items.appendChild(listItem);

    todoItems.push(textInputItem.value);


    localStorage.setItem("todoItems", JSON.stringify(todoItems));
    console.log("Gönderildi")
    let usersLocal = JSON.parse(localStorage.getItem("todoItems"))

    console.log(usersLocal);

    function deleteItem (e){
        e.preventDefault();

        console.log(todoItems.find(checkItem));
        

        function checkItem (item){
            item === listItem.value;
        }
    //    listItem.remove(e.target);
     
       
    }
}





