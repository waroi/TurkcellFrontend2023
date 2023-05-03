const input = document.getElementById("input")
const difficulty = document.getElementById("difficulty")
const date = document.getElementById("date")
const ul = document.getElementById("unordered-list")
const form = document.getElementById("form")

const alpSort = document.getElementById("sort-alph")
const difSort = document.getElementById("sort-diff")
const dateSort = document.getElementById("sort-date")

const todos = JSON.parse(localStorage.getItem("tasks"));

if (todos) {
    todos.forEach((todo) => {
        addtodo(todo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (input.value == "" || difficulty.value == "") {
        alert("Bosh")
    } else {
        addtodo()
    }
})

// addTODO
function addtodo(todo) {
    let inputText = input.value

    if (todo) {
        inputText = todo.text
    }

    if (inputText) {
        //#region get elements and style
        const listItem = document.createElement("li")
        listItem.classList = "listItem"
        listItem.style.display = "flex"

        const ttDiv = document.createElement("div")
        ttDiv.style.display = "flex"
        ttDiv.style.justifyContent = "space-between"


        const cdDiv = document.createElement("div")
        cdDiv.style.display = "flex"
        cdDiv.style.justifyContent = "space-between"
        cdDiv.style.margin = "auto 0"
        cdDiv.style.borderLeft = "1px solid black"

        const tick = document.createElement("input")
        tick.type = "checkbox"

        const cross = document.createElement("i")
        cross.classList = "fa-regular fa-circle-xmark"
        cross.style.color = "red"
        cross.style.marginTop = "auto"
        cross.style.marginBottom = "auto"

        const text = document.createElement("h6")
        text.innerText = inputText

        const difficult = document.createElement("span")
        difficult.innerText = difficulty.value
        difficult.classList = "difficulty"
        difficult.required = true
        difficult.style.paddingInlineEnd = "10px"
        difficult.style.paddingInlineStart = "10px"
        difficult.style.marginRight = "10px"
        difficult.style.marginLeft = "10px"

        const dueDate = document.createElement("p")
        dueDate.innerText = date.value
        dueDate.required = true
        dueDate.classList.add("ddate")
        dueDate.style.paddingInlineEnd = "10px"
        dueDate.style.paddingInlineStart = "10px"
        dueDate.style.marginRight = "10px"


        //#endregion

        if (difficult.innerText == "1") {
            difficult.style.backgroundColor = "green"
        } else if (difficult.innerText == "2") {
            listItem.style.backgroundColor = "greenyellow"
        } if (difficult.innerText == "3") {
            listItem.style.backgroundColor = "yellow"
        } if (difficult.innerText == "4") {
            listItem.style.backgroundColor = "orange"
        } if (difficult.innerText == "5") {
            difficult.style.backgroundColor = "red"
        }

        ttDiv.appendChild(tick)
        ttDiv.appendChild(text)
        cdDiv.appendChild(difficult)
        cdDiv.appendChild(dueDate)
        cdDiv.appendChild(cross)
        listItem.appendChild(ttDiv)
        listItem.appendChild(cdDiv)

        ul.appendChild(listItem)

        input.value = "";
        difficulty.value = "";
        date.value = "";
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
        alpSort.addEventListener("click", () => {
            const tasks = Array.from(document.querySelectorAll('li'));
            tasks.sort((a, b) => {
                const aText = a.querySelector('h6').innerText;
                const bText = b.querySelector('h6').innerText;
                return aText.localeCompare(bText);
            });
            tasks.forEach((task) => {
                ul.appendChild(task);
            });
        })
        difSort.addEventListener("click", () => {
            const tasks = Array.from(document.querySelectorAll('li'));
            tasks.sort((a, b) => {
                const difA = parseInt(a.querySelector("span").innerText);
                const difB = parseInt(b.querySelector("span").innerText);
                return difA - difB
            })
            tasks.forEach((task) => {
                ul.appendChild(task);
            });
        })
        dateSort.addEventListener("click", () => {
            const tasks = Array.from(document.querySelectorAll('li'));
            tasks.sort((a, b) => {
                const difA = new Date(a.querySelector("p").innerText);
                const difB = new Date(b.querySelector("p").innerText);
                return difA - difB
            })
            tasks.forEach((task) => {
                ul.appendChild(task);
            });
        })
        //#endregion
    }

}
function storeItems() {
    const tasks = document.querySelectorAll("li");
    const todos = [];

    tasks.forEach((listItem) => {
        todos.push({
            text: listItem.querySelector("h6").innerText,
            difficulty: listItem.querySelector("span").innerText,
            date: listItem.querySelector(".ddate").innerText,
            done: listItem.classList.contains("done"),
        });
    });

    localStorage.setItem("tasks", JSON.stringify(todos));
}
