const addTaskForm = document.getElementById('addTask');
const addTaskInput = document.getElementById('taskName');

const taskList = document.getElementById('taskList');
const deleteAllButton = document.getElementById('deleteAll');

const searchInput = document.getElementById("searchTask");
let items;
loadItems();
addEventListener();

function addEventListener() {
  addTaskForm.addEventListener('submit', addNewToDoTask);
  taskList.addEventListener('click', deleteTask);
  deleteAllButton.addEventListener('click', deleteallTasks);
  searchInput.addEventListener('keyup', filter);
}

function addNewToDoTask(e) {
  if (addTaskInput.value === '') {
    alert('Lütfen New Task İnput Kısmını Doldurunuz!!!');
  }

  else {
    setItemsToLS(addTaskInput.value);
    createnewElement(addTaskInput.value);
  }

  e.preventDefault();
}

function createnewElement(value) {
  const newItemLi = document.createElement('li');
  newItemLi.className = 'list-group-item list-group-item-secondary';
  const itemContext = document.createTextNode(value);
  newItemLi.appendChild(itemContext);
  const itemDeleteIcon = document.createElement('a');
  itemDeleteIcon.classList = 'deleteButton float-end';
  itemDeleteIcon.href = '#';
  itemDeleteIcon.innerHTML = '<span class="fa-solid fa-xmark"></span>';
  newItemLi.appendChild(itemDeleteIcon);
  taskList.appendChild(newItemLi);
  addTaskInput.value = '';
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

function deleteallTasks(e) {
  if (confirm("Tüm Taskleri Silmek İstediğinize Emin Misiniz?")) {
    taskList.innerHTML = '';
    localStorage.clear();
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
function loadItems() {
  items = getItemsFromLS();
 items.forEach(function (item) {
   createnewElement(item);
 })
}

function getItemsFromLS(){
  if(localStorage.getItem('items')===null){
    items=[];
  }
  else{
    items=JSON.parse(localStorage.getItem('items'));
  }
  return items;  
}
function setItemsToLS(text){
  items=getItemsFromLS();
  items.push(text);
  localStorage.setItem('items',JSON.stringify(items));
}
function deletefromLS(text){
  items=getItemsFromLS();
  items.forEach(function(item,index){
    if(item===text){
      items.splice(index,1);
    }
  });
  localStorage.setItem('items',JSON.stringify(items));
}