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
  taskListUl.addEventListener("click", deleteTask);
  deleteAllButton.addEventListener('click', deleteallTasks);
  searchInput.addEventListener('keyup', filter);
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
  localStorage.setItem("toDoList", JSON.stringify(toDoList));

  if (toDoList.length === 0) {
    deleteAllButton.style.display = "none";
  } else {
    deleteAllButton.style.display = "inline-block";
    createNewElement(myToDo);
    taskInput.value = "";
    
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
    }
    return item;
  });

  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

function deleteTask(e) {
  if (e.target.className === 'fa-solid fa-xmark') {
    if (confirm("Task'i Silmek İstediğinize Emin Misiniz?")) {
      e.target.parentElement.parentElement.remove();
      deletefromLS(e.target.parentElement.parentElement.textContent);
    }
  }
  e.preventDefault();
}

function deletefromLS(text){
  toDoList=JSON.parse(localStorage.getItem("toDoList"));
  toDoList.forEach(function(item, index){
    if(item.task === text){
      toDoList.splice(index,1);
    }
  });
  localStorage.setItem('toDoList',JSON.stringify(toDoList));
}

function deleteallTasks(e) {
  if (confirm("Tüm Taskleri Silmek İstediğinize Emin Misiniz?")) {
    taskList.innerHTML = '';
    localStorage.clear();
    deleteAllButton.style.display = "none";
  }
  
  e.preventDefault();
}

function filter(e) {
  const listItems = document.querySelectorAll(".list-group-item");
  let searchWord = e.target.value.toUpperCase();

  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toUpperCase();
    if (text.indexOf(searchWord) <= -1) {
      listItem.setAttribute("style", "display:none");
    }
    else {
      listItem.setAttribute("style", "display:block");
    }
  })
}