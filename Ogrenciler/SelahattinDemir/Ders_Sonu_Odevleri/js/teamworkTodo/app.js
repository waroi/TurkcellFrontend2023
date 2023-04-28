// #region DOM Elementleri
const addToDoBtn = document.querySelector("#btn-add");
const clearToDos = document.querySelector("#btn-clr");
const addToDoInp = document.getElementById("inp-enter");
const searchToDo = document.getElementById("inp-search");
const toDoList = document.getElementById("items");
// #endregion

// #region Global Event Listeners
addEvent(addToDoBtn, "click", addToDo );
addEvent(clearToDos, "click", clearToDo );
addEvent(searchToDo, "keyup", searchToDos)
// #endregion

// #region Değişkenler
let toDos = [];
const listItemClass = "d-flex justify-content-between align-items-center todo-item";
const xCircleClass = "bi bi-x-circle-fill fs-3 text-danger";
const done = "task-done"
const parsedArray = JSON.parse(localStorage.getItem("toDoStorage"));
// #endregion

// Kayıt varsa...
if (parsedArray) {
  toDos = parsedArray;
  showToDo(toDos);
}

// #region Fonksiyonlar
// ToDo Ekleme
function addToDo(e) {
  e.preventDefault();
  const toDo = addToDoInp.value;
  const toDoCheck = toDo.replace(/ /g, "");

  if (toDoCheck === "") alert("Lütfen boş girdi yapmayınız.");
   else {
    toDos.push({ task: toDo, isDone: false });
    addToDoInp.value = "";
    localStorage.setItem("toDoStorage", JSON.stringify(toDos));
    showToDo(toDos);
  }
}

// ToDo Gösterme
function showToDo(toDos) {
  toDoList.innerHTML = "";
  
  toDos.forEach((toDoItem) => {
    const listItem = makeElement("li")
    const xCircle = makeElement("i");
    const toDoText = document.createTextNode(toDoItem.task);
    
    listItem.className = listItemClass ;
    if (toDoItem.isDone) listItem.classList.add(done);
    listItem.style.cursor = "pointer";
    xCircle.className = xCircleClass;
    
    addChild(listItem, toDoText);
    addChild(listItem, xCircle);
    addChild(toDoList, listItem);
    
    addEvent(listItem, "click",() => checkDone(toDoItem) )
    addEvent(xCircle, "click",() => deleteToDo(toDos.indexOf(toDoItem)) )
  });
}

// ToDo Arama
function searchToDos() {
  const toDoSearch = searchToDo.value.toLowerCase();
  Array.from(toDoList.children).forEach((toDoItem) => {
    if (!toDoItem.textContent.includes(toDoSearch)) {
      toDoItem.className = "d-none";
    } else {
      toDoItem.className = listItemClass;
    }
  });
}

// ToDo Silme
function deleteToDo(index) {
  toDos.splice(index, 1);
  localStorage.setItem("toDoStorage", JSON.stringify(toDos));
  showToDo(toDos);
}

// Tüm ToDo'ları Silme
function clearToDo() {
  localStorage.removeItem("toDoStorage");
  toDos = [];
  showToDo(toDos);
}

// ToDo'ları tamamlandı ya da tamamlanmadı olarak seç
function checkDone(item) {
  item.isDone = !item.isDone;
  localStorage.setItem("toDoStorage", JSON.stringify(toDos));
  showToDo(toDos);
}

// createElement ama tatlı
function makeElement(element){
  return document.createElement(element);
}

// appendChild ama tatlı
function addChild(parent, child){
  parent.appendChild(child)
}

// addEventListener ama tatlı
function addEvent(domElement, event, func){
  domElement.addEventListener(event, func);
}

// #endregion