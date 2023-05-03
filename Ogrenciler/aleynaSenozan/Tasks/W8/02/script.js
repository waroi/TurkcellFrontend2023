const add_todo = document.querySelector("#add-todo");
const add_button = document.querySelector("#add-button");
const search_todo = document.querySelector("#search-todo");
const list_todo = document.querySelector("#list-todo");
const clear_all = document.querySelector("#clear-all");

const list_items = Array.from(list_todo.querySelectorAll("li"));

function updateEventListeners(item) {
    const delete_button = item.querySelector(".delete-item");
    delete_button.addEventListener("click", () => {
        item.parentNode.removeChild(item);
        const index = list_items.indexOf(item);
        list_items.splice(index, 1);
        saveTodoList();
    });

    const done_checkbox = item.querySelector(".done-checkbox");
    done_checkbox.addEventListener("change", () => {
        item.classList.toggle("done");
        saveTodoList();
    });
}

add_button.addEventListener("click", () => {
    const value = add_todo.value;
    const list_item_todo = document.createElement("li");
    list_item_todo.classList = "list-group-item";
    list_item_todo.innerHTML = `<input type="checkbox" class="done-checkbox"> ${value} <span class="delete-item">&times;</span>`;
    list_todo.appendChild(list_item_todo);
    add_todo.value = "";
    list_items.push(list_item_todo);
    saveTodoList();

    updateEventListeners(list_item_todo);
});

list_items.forEach(updateEventListeners);

window.addEventListener("load", () => {
    const savedList = localStorage.getItem("todoList");
    if (savedList) {
        list_todo.innerHTML = savedList;
        const loaded_list_items = Array.from(list_todo.querySelectorAll("li"));
        list_items.push(...loaded_list_items);
        loaded_list_items.forEach(updateEventListeners);
    }
});

search_todo.addEventListener("keyup", (e) => {
    const current_search = e.target.value.toLowerCase();
    list_items.forEach((item) => {
        const item_text = item.textContent.toLowerCase();
        if (item_text.includes(current_search)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

clear_all.addEventListener("click", () => {
    list_todo.innerHTML = "";
    localStorage.removeItem("todoList");
    list_items.length = 0;
});

function saveTodoList() {
    localStorage.setItem("todoList", list_todo.innerHTML);
}
