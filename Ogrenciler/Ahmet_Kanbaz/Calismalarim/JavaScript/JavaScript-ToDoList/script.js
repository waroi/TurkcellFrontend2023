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
const newItemLi = document.createElement('li');
newItemLi.id = item.id;
newItemLi.className = `list-group-item list-group-item-secondary itemLi ${item.status}`;
const itemContext = document.createTextNode(item.task);
newItemLi.appendChild(itemContext);
const itemDeleteIcon = document.createElement('a');
itemDeleteIcon.classList = 'deleteButton float-end';
itemDeleteIcon.href = '#';
itemDeleteIcon.innerHTML = '<span class="fa-solid fa-xmark"></span>';
newItemLi.appendChild(itemDeleteIcon);
taskListUl.appendChild(newItemLi);
}

function updateListCount() {
  countItem.innerHTML = toDoList.length;
}

function addTask(e) {
  const value = taskInput.value;
  if (value === "") {
    alert("Lütfen New Task İnput Kısmını Doldurunuz!!!");
  } else {
    setItemsToLS(value);
  }

  e.preventDefault();
}

function setItemsToLS(value) {
  myToDo = {
    id: Date.now(),
    task: value,
    status: "",
  };

  toDoList.push(myToDo);
  console.log(toDoList);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));

  if (toDoList.length === 0) {
    deleteAllButton.style.display = "none";
    displayEmptyListMessage();
  } else {
    deleteAllButton.style.display = "inline-block";
    createNewElement(myToDo);
    taskInput.value = "";
    updateListCount();
  }
}

function updateTaskStatus(e) {
  if(e.target.classList.contains("itemLi")) {
    e.target.classList.toggle("done");
    if(e.target.classList.contains("done")) {
      updateTaskStatusInLS(e.target.id, "done");
    }
    else {
      updateTaskStatusInLS(e.target.id, "");
    }
  }
  e.preventDefault();
}

function updateTaskStatusInLS(id, status) {
  toDoList = toDoList.map((item) => {
    if(item.id == id) {
      item.status = status;
      console.log(status);
    }
    return item;
  });

  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}
