//Main input
// let todoInput = document.getElementById("todoInput");
//todo ekle butonu
const todoAddBtn = document.getElementById("addTodo");
//ul elemanı
const listGroup = document.getElementById("listGrup");
//Tüm todoları silme butonu
const clearTodo = document.getElementById("clearTodo");
//filtre input
const filterTodoInput = document.getElementById("filterTodo");
// //Li item
// const listItem = document.querySelectorAll(".list-group-item");
// console.log(listItem)
let ourArray = [];

todoAddBtn.addEventListener("click", addTodoFunc);
function addTodoFunc() {
    //todo input değerini alma
    let todoInput = document.getElementById("todoInput").value;
    //boş geçme şartı
    if (todoInput == "") {
        alert("Lütfen bir todo gir.");
    }
    else {
        ourArray = [...ourArray, { todo: todoInput, isDone: false }];
        createTag(todoInput);
        localStorage.setItem("ourArray", JSON.stringify(ourArray));
    }
}

window.addEventListener("DOMContentLoaded", () => {
    getItem = JSON.parse(localStorage.getItem("ourArray"));
    ourArray = [...getItem];
    localStorage.setItem("ourArray", JSON.stringify(ourArray));
    for (let i = 0; i < getItem.length; i++) {
        createTag(getItem[i].todo);
    }
});


//filtreleme
filterTodoInput.addEventListener("keyup", filterItem);
function filterItem(e) {
    //Sor burayı
    const listItem = document.querySelectorAll(".list-group-item");
    const filterValue = e.target.value.toLowerCase();
    listItem.forEach((listTodo) => {
        const listText = listTodo.textContent.toLowerCase();
        if (listText.indexOf(filterValue) == -1) {
            listTodo.setAttribute("class", "d-none");
        }
        else {
            listTodo.setAttribute("class", "d-block");
        }
    })
}
filterTodoInput.addEventListener("focus", () => { filterTodoInput.value = "" })

//--------------Delete items one by one-----------
//ya alttakine 0 dicen sonuna ya da listItem'ın 0. elemanı şeklinde gidicez.
//className üzeriden yapılabiliyor mu sormak lazım

//Diğer seçenek
// const listItem = document.querySelectorAll(".list-group")[0];
const listGroupItem = document.querySelector(".list-group");

listGroupItem.addEventListener("click", (e) => {
    console.log(e.target)
    let findItem;
    ourArray.forEach((arr) => {
        if (arr.todo === e.target.parentElement.parentElement.innerText) {
            findItem = ourArray.indexOf(arr);
        }
    });
    // console.log(findItem);
    if (e.target.className === "bi bi-x") {
        e.target.parentElement.parentElement.remove();
        ourArray.splice(findItem, 1);
        localStorage.setItem("ourArray", JSON.stringify(ourArray));
        console.log(ourArray);
        console.log("todo başarıyla silindi");
    }
});

//---------------Clear All li Elements-------------------
clearTodo.addEventListener("click", clearMen);
function clearMen() {
    localStorage.clear();
    let clearList = document.getElementsByClassName("list-group-item");
    while (clearList.length > 0) {//null kontrolü 
        listGroup.removeChild(clearList[0]);
    }

    //2.Yol
    // listGroup.innerHTML = "";
    // ourArray = [];
    // localStorage.setItem("ourArray", JSON.stringify(ourArray));

}

//Create elements
function createTag(todoInput) {
    let iTag = document.createElement("i");
    iTag.setAttribute("class", "bi bi-x");
    let aTag = document.createElement("a");
    aTag.setAttribute("href", "#");
    let liTag = document.createElement("li");
    liTag.setAttribute("class", "list-group-item mb-2 border border-1 d-flex justify-content-between checked")
    liTag.innerText = todoInput;
    aTag.appendChild(iTag);
    liTag.appendChild(aTag);
    listGroup.appendChild(liTag);
    document.getElementById("todoInput").value = "";
}