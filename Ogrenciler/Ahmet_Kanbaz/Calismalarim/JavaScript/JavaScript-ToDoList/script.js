const taskForm = document.getElementById("addTask");
const taskInput = document.getElementById("taskName");

const taskListUl = document.getElementById("taskList");
const deleteAllButton = document.getElementById("deleteAll");

const searchInput = document.getElementById("searchTask");
const countItem = document.getElementById("countItem");

let toDoList = [];
loadItems();
addEventListeners();

//Event Listeners
function addEventListeners() {
  taskForm.addEventListener("submit", addTask);
  taskListUl.addEventListener("click", updateTaskStatus);
}

function loadItems() {
  const localStorageToDo = JSON.parse(localStorage.getItem("toDoList"));
  toDoList = localStorageToDo || [];

  if (toDoList.length === 0) {
    deleteAllButton.style.display = "none";
  } else {
    toDoList.map((item) => {
      createNewElement(item);
    });
  }
  updateListCount();
}

function createNewElement(item) {
  const newItemLi = `<li liId=${item.id} liStatus=${
    item.status
  } class="list-group-item list-group-item-secondary"><input type="checkbox" id=${item.id} value="${item.id}" class="me-3" ${
    item.status === "completed" ? "active" : null
  }>${item.task}<a href="#" class="float-end">
  <span class="fa-solid fa-xmark"></span>
</a></li>`;
  taskListUl.innerHTML += newItemLi;
}

function updateListCount() {
  countItem.innerHTML = toDoList.length;
}

function addTask(e) {
  const value = taskInput.value;
  if(value === ""){
    alert("Lütfen New Task İnput Kısmını Doldurunuz!!!");
  }
  else{
    setItemsToLS(value);
  }

  e.preventDefault();
}

function setItemsToLS(value){
  myToDo = {
    id: Date.now(),
    task: value,
    status: "active",
  }

  toDoList.push(myToDo);
  console.log(toDoList)
  localStorage.setItem("toDoList", JSON.stringify(toDoList));

  if(toDoList.length === 0) {
    deleteAllButton.style.display = "none";
    displayEmptyListMessage();
  }
  else {
    deleteAllButton.style.display = "inline-block";
    createNewElement(myToDo);
    taskInput.value = "";
    updateListCount();
  }
}

function updateTaskStatus(e) {
  if(e.target.type === "checkbox"){
    const li = e.target.parentElement;
    const liId = li.getAttribute("liId");
    const liStatus = li.getAttribute("liStatus");

    if(liStatus === "active"){
      li.setAttribute("liStatus", "completed");
      updateTaskStatusInLS(liId, "completed");
    }
    else{
      li.setAttribute("liStatus", "active");
      updateTaskStatusInLS(liId, "active");
    }
  }
  e.preventDefault();
}

function updateTaskStatusInLS(liId, status){
  toDoList = toDoList.map((item) => {
    if(item.id == liId){
      item.status = status;
    }
    return item;
  });

  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}