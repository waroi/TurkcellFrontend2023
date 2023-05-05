const input = document.getElementById("input")
const difficulty = document.getElementById("difficulty")
const date = document.getElementById("date")
const ul = document.getElementById("unordered-list")
const form = document.getElementById("form")

const alpSort = document.getElementById("sort-alph")
const difSort = document.getElementById("sort-diff")
const dateSort = document.getElementById("sort-date")

let todos = []

if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
    displayTodo();
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (input.value == "" || difficulty.value == "") {
        alert("Bosh")
    } else {
        addTodo()
    }
})

function addTodo() {
    const inputText = input.value;
    const inputDifficulty = difficulty.value;
    const inputDate = date.value;

    // Create a new todo object and add it to the todos array
    const todo = {
        text: inputText,
        difficulty: inputDifficulty,
        date: inputDate,
        done: false,
    };

    if (todo && todo.done) {
        listItem.classList.add("done")
        tick.checked = true
    }
    todos.push(todo);

    // Save the todos array to local storage
    localStorage.setItem("todos", JSON.stringify(todos));

    // Display the new todo
    displayTodo();
    resetInputs();
}

alpSort.addEventListener("click", () => sortAlphabetically())
difSort.addEventListener("click", () => sortDifference())
dateSort.addEventListener("click", () => sortDate())

function displayTodo() {
    ul.innerHTML = "";

    todos.forEach((todo, index) => {
        const listItem = document.createElement("li");
        listItem.classList = "listItem";
        listItem.style.display = "flex";

        const ttDiv = document.createElement("div");
        ttDiv.style.display = "flex";
        ttDiv.style.justifyContent = "space-between";

        const cdDiv = document.createElement("div");
        cdDiv.style.display = "flex";
        cdDiv.style.justifyContent = "space-between";
        cdDiv.style.margin = "auto 0";
        cdDiv.style.borderLeft = "1px solid black";

        const tick = document.createElement("input");
        tick.type = "checkbox";
        tick.checked = todo.done;

        const cross = document.createElement("i");
        cross.classList = "fa-regular fa-circle-xmark";
        cross.style.color = "red";
        cross.style.marginTop = "auto";
        cross.style.marginBottom = "auto";

        const text = document.createElement("h6");
        text.innerText = todo.text;

        const difficult = document.createElement("span");
        difficult.innerText = todo.difficulty;
        difficult.classList = "difficulty";
        difficult.required = true;
        difficult.style.paddingInlineEnd = "10px";
        difficult.style.paddingInlineStart = "10px";
        difficult.style.marginRight = "10px";
        difficult.style.marginLeft = "10px";

        const dueDate = document.createElement("p");
        dueDate.innerText = todo.date;
        dueDate.required = true;
        dueDate.style.paddingInlineEnd = "10px";
        dueDate.style.paddingInlineStart = "10px";
        dueDate.style.marginRight = "10px";

        ttDiv.appendChild(tick);
        ttDiv.appendChild(text);
        cdDiv.appendChild(difficult);
        cdDiv.appendChild(dueDate);
        cdDiv.appendChild(cross);
        listItem.appendChild(ttDiv);
        listItem.appendChild(cdDiv);

        ul.appendChild(listItem);

        tick.addEventListener("click", () => {
            listItem.classList.toggle("done");
            todo.done = tick.checked;
            localStorage.setItem("todos", JSON.stringify(todos));
        });

        cross.addEventListener("click", () => {
            deleteTodo(index);
        });

        if (difficult.innerText == "1") {
            difficult.style.backgroundColor = "green";
        } else if (difficult.innerText == "2") {
            listItem.style.backgroundColor = "greenyellow";
        } if (difficult.innerText == "3") {
            listItem.style.backgroundColor = "yellow";
        } if (difficult.innerText == "4") {
            listItem.style.backgroundColor = "orange";
        } if (difficult.innerText == "5") {
            difficult.style.backgroundColor = "red";
        }
    });
}
function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodo();
}
function resetInputs() {
    input.value = ""
    difficulty.value = ""
    date.value = ""
}
function sortAlphabetically() {
    const tasks = Array.from(document.querySelectorAll('li'));
    tasks.sort((a, b) => {
        const aText = a.querySelector('h6').innerText;
        const bText = b.querySelector('h6').innerText;
        return aText.localeCompare(bText);
    });
    tasks.forEach((task) => {
        ul.appendChild(task);
    });
}
function sortDifference() {
    const tasks = Array.from(document.querySelectorAll('li'));
    tasks.sort((a, b) => {
        const difA = parseInt(a.querySelector("span").innerText);
        const difB = parseInt(b.querySelector("span").innerText);
        return difA - difB
    })
    tasks.forEach((task) => {
        ul.appendChild(task);
    });
}
function sortDate() {
    const tasks = Array.from(document.querySelectorAll('li'));
    tasks.sort((a, b) => {
        const difA = new Date(a.querySelector("p").innerText);
        const difB = new Date(b.querySelector("p").innerText);
        return difA - difB
    })
    tasks.forEach((task) => {
        ul.appendChild(task);
    });
}
