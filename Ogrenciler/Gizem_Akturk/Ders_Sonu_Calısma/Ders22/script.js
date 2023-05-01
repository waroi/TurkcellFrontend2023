const todoitems =[];



function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("todos").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if(inputValue === ""){
        alert("Boş bırakmayınız");
    }else{
        todoitems.push(li);
    }
    document.getElementById("todos").value = "";
    displaytodos(todoitems);
   
}

function displaytodos(listofitems){
    for(var i=0; i<listofitems.length; i++){
        document.getElementById("myUl").appendChild(listofitems[i]);
    }
}
document.getElementById("searchtodo").addEventListener("keyup", filtertodoitem);

function filtertodoitem(){
    var filterValue = document.getElementById("searchtodo").value;

    var filteredlist = todoitems.filter(function(item){
    return item.innerText.includes(filterValue);
    });
    document.getElementById("myUl").innerHTML = "";
    displaytodos(filteredlist);

}

function deleteall(){
    document.getElementById("myUl").innerHTML = "";
    todoitems.length = 0;
}