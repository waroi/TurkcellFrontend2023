let add_todo = document.querySelector("#add-todo");
let add_button = document.querySelector("#add-button");
let search_input = document.querySelector("#search-todo");
let list_todo = document.querySelector("#list-todo");
let list_item_todo = document.querySelector("li");
let clear_all = document.querySelector("#clear-all");

add_todo.addEventListener("focus", function () {
    add_todo.value = " ";
});
add_button.addEventListener("click", () => {
    let value = add_todo.value;
    let list_item_todo = document.createElement("li");
    list_item_todo.classList = "list-group-item";
    list_item_todo.innerText = value;
    list_todo.appendChild(list_item_todo);
    add_todo.value = " ";
})
search_input.addEventListener("keyup", (e) => {
    let current_search = e.target.value.toLowerCase();
    let list_items = list_todo.querySelectorAll("li");
    list_items.forEach((item) => {
        let item_text = item.textContent.toLowerCase();
        if (item_text.includes(current_search)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
clear_all.addEventListener("click", () => {
    list_todo.innerHTML = "";
  });