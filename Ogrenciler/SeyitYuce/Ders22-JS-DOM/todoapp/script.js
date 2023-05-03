const input = document.getElementById("input")
const ul = document.getElementById("unordered-list")
const form = document.getElementById("form")


const todos = JSON.parse(localStorage.getItem("tasks"));

if (todos) {
    todos.forEach((todo) => {
        addtodo(todo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    addtodo()
})

// addTODO
function addtodo(todo) {
    let inputText = input.value

    if (todo) {
        inputText = todo.text
    }

    if (inputText) {
        //#region add item
        const listItem = document.createElement("li")
        listItem.classList = "listItem"

        const ttDiv = document.createElement("div")

        const tick = document.createElement("input")
        tick.type = "checkbox"

        const cross = document.createElement("i")
        cross.classList = "fa-regular fa-circle-xmark"
        cross.style.color = "red"
        cross.style.marginTop = "auto"
        cross.style.marginBottom = "auto"

        const text = document.createElement("span")
        text.innerText = inputText

        ttDiv.appendChild(tick)
        ttDiv.appendChild(text)
        listItem.appendChild(ttDiv)
        listItem.appendChild(cross)

        ul.appendChild(listItem)

        input.value = ""
        storeItems();
        //#endregion

        //#region  addEventListener
        if (todo && todo.done) {
            listItem.classList.add("done")
            tick.checked = true

        }
        tick.addEventListener("click", () => {
            listItem.classList.toggle("done")
            storeItems();
        })
        cross.addEventListener("click", (e) => {
            e.preventDefault()
            listItem.remove()
            storeItems();

        })

        //#endregion
    }
}
function storeItems() {
    const tasks = document.querySelectorAll("li");
    const todos = [];

    tasks.forEach((listItem) => {
        todos.push({
            text: listItem.innerText,
            done: listItem.classList.contains("done"),
        });
    });

    localStorage.setItem("tasks", JSON.stringify(todos));
}