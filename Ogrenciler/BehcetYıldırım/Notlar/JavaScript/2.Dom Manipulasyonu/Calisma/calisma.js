let value;

value = document.getElementById("todo-form");
value = document.getElementById("tasks-title");



value = document.getElementsByClassName("card-header");
value = document.getElementsByClassName("list-group-item");


value = document.getElementsByTagName("div");



value = document.querySelector("#todo-form");
value = document.querySelector("#tasks-title");
value = document.querySelector(".list-group-item");
// !---------------------------------------------------------------------

value = document.querySelector("#clear-todos");

// console.log(value.id)
// console.log(value.className)
// console.log(value.classList[1])
// console.log(value.textContent)


// !---------------------------------------------------------------------
value = document.querySelector("#clear-todos");


value.className= "btn btn-primary";
value.style.color = "black"

//!----------------------------------------------------------------------

value = document.querySelector("li:nth-child(2)");
value = document.querySelectorAll("li:nth-child(odd)");
value = document.querySelectorAll("li:nth-child(even)");

value.forEach(function(el){
    el.style.background = "gray"
    el.style.color = "red"
})




console.log(value);