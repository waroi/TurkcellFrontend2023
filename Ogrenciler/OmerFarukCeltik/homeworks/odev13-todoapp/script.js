let todo_value = document.querySelector("#add_todo");
let add_button = document.querySelector("#add_button");
let search_input = document.querySelector("#search_todo");
let todo_list = document.querySelector("#todo_list");
let clear_all = document.querySelector("#clear_all");
let list_item = document.querySelector("li");

// todo_value.addEventListener("keyup", (e) => {
//   let value = e.target.value;
//   console.log(value);
// })

add_button.addEventListener("click",() => {
  let value = todo_value.value;
  // console.log(value);
  let listItem = document.createElement("li");
  listItem.classList = "list-group-item";
  listItem.innerText = value;
  todo_list.appendChild(listItem);
  todo_value.value = " ";
})
todo_value.addEventListener("focus",() => {
  todo_value.value = " ";
})

search_input.addEventListener("keyup",(e) => {
  console.log(e);
  let search = e.target.value;

})
clear_all.addEventListener("click", () => {
  // todo_list.removeChild();
  todo_list.innerHTML= " ";
})