
const todolist = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// Remove metodu

todos[1].remove();


// Remove Child

todolist.removeChild(todolist.lastElementChild);
// todolist.removeChild(todos[3]);



console.log(todos);
console.log(todolist);


