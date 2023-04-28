//todo ekle butonu
const todoAddBtn = document.getElementById("addTodo");
//ul elemanı
const listGroup = document.getElementById("listGrup");
//Tüm todoları silme butonu
const clearTodo = document.getElementById("clearTodo");
//filtre input
const filterTodoInput = document.getElementById("filterTodo");
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
        ourArray = [...ourArray, todoInput];
        localStorage.setItem("ourArray", JSON.stringify(ourArray));
        createTag(todoInput);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    getItem = JSON.parse(localStorage.getItem("ourArray"));
    ourArray = [...getItem];
    for (let i = 0; i < getItem.length; i++) {
        createTag(getItem[i]);
    }
});

//Create elements
function createTag(todoInput) {
    let iTag = document.createElement("i");
    iTag.setAttribute("class", "bi bi-x");
    let aTag = document.createElement("a");
    aTag.setAttribute("href", "#");
    let liTag = document.createElement("li");
    liTag.setAttribute("class", "list-group-item mb-2 border border-1 d-flex justify-content-between")
    liTag.innerText = todoInput;
    aTag.appendChild(iTag);
    liTag.appendChild(aTag);
    listGroup.appendChild(liTag);
    document.getElementById("todoInput").value = "";
}




//filtreleme
filterTodoInput.addEventListener("keyup", filterItem);
function filterItem(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItem = document.querySelectorAll(".list-group-item");
    listItem.forEach((listItem) => {
        const listText = listItem.textContent.toLowerCase();
        if (listText.indexOf(filterValue) == -1) {
            listItem.setAttribute("style", "display:none !important");
        } else {
            listItem.setAttribute("style", "display:block !important");
        }
        //Üzerine kafa yorup iyice anlamak lazım//
    })
}


filterTodoInput.addEventListener("focus", () => { filterTodoInput.value = "" })

//--------------Delete items one by one-----------
//ya alttakine 0 dicen sonuna ya da listItem'ın 0. elemanı şeklinde gidicez.
//className üzeriden yapılabiliyor mu sormak lazım

//Diğer seçenek
// const listItem = document.querySelectorAll(".list-group")[0];
const listItem = document.querySelector(".list-group");

listItem.addEventListener("click", (e) => {
    if (e.target.className === "bi bi-x") {
        e.target.parentElement.parentElement.remove();
        console.log("todo başarıyla silindi");
    }
});

//with foreach version
// const secondCardBody = document.querySelectorAll(".list-group");
// let deneme = secondCardBody.forEach(i => { i.addEventListener("click", deleteTodo); })
// console.log(deneme)
// // secondCardBody.addEventListener("click", deleteTodo);
// function deleteTodo(e) {
//     console.log(e.target);
//     // console.log(e.target.parentElement);
//     // console.log(e.target.parentElement.parentElement);
//     if (e.target.className === "bi bi-x") {
//         e.target.parentElement.parentElement.remove();
//         console.log("todo başarıyla silindi");
//     }
// }


//---------------Clear All li Elements-------------------
clearTodo.addEventListener("click", clearMen);
function clearMen() {
    localStorage.clear();
    let clearList = document.getElementsByClassName("list-group-item");
    while (clearList.length > 0) {//null kontrolü 
        listGroup.removeChild(clearList[0]);
    }
}

//Diğer yollar
// function clearAllTodos() {
//     // todoList.innerHTML = "";
//     while (todoList.firstChild != null) {
//         todoList.removeChild(todoList.firstChild); // Daha hızlı çalışacak
//     }
// }