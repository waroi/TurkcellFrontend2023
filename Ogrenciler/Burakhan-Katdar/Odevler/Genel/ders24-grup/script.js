const form1 = document.querySelector("#addForm");

let items = document.getElementById("items");
let submit = document.getElementById("submit");

let textInputItem = document.getElementById("textInputItem");
form1.addEventListener("submit", addItem);
items.addEventListener("click", deleteItem);

function addItem (){
    const listItem = document.createElement("li");
    listItem.id = "listItem";
    listItem.className = "text-black";
    listItem.appendChild(textInputItem);
    items.appendChild(listItem);
    console.log("Gönderildi")
    
}

function deleteItem (){

}

