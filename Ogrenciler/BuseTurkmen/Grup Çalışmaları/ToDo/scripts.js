const addTaskForm = document.getElementById('addTask');
const addTaskInput = document.getElementById('taskName');

const taskList = document.getElementById('taskList');
const deleteAllButton = document.getElementById('deleteAll');

const searchInput= document.getElementById("searchTask");

addEventListener();

function addEventListener() {
  addTaskForm.addEventListener('submit', addNewToDoTask);
  taskList.addEventListener('click', deleteTask);
  deleteAllButton.addEventListener('click', deleteallTasks);
  searchInput.addEventListener('keyup', filter);
}

function addNewToDoTask(e) {
  if(addTaskInput.value === '') {
    alert('Lütfen New Task İnput Kısmını Doldurunuz!!!');
  }

  else{
    createnewElement();
  }
  
  e.preventDefault();
}

function createnewElement(){
    const newItemLi = document.createElement('li');
    newItemLi.className = 'list-group-item list-group-item-secondary';
    const itemContext = document.createTextNode(addTaskInput.value);
    newItemLi.appendChild(itemContext);
    const itemDeleteIcon = document.createElement('a');
    itemDeleteIcon.classList = 'deleteButton float-end';
    itemDeleteIcon.href = '#';
    itemDeleteIcon.innerHTML='<span class="fa-solid fa-xmark"></span>';
    newItemLi.appendChild(itemDeleteIcon);
    taskList.appendChild(newItemLi);
    addTaskInput.value = '';
}

function deleteTask(e){
  if(e.target.className === 'fa-solid fa-xmark'){
    if(confirm("Task'i Silmek İstediğinize Emin Misiniz?")){
    e.target.parentElement.parentElement.remove();
  }
  }
  e.preventDefault();
}

function deleteallTasks(e){
  if(confirm("Tüm Taskleri Silmek İstediğinize Emin Misiniz?")){
    taskList.innerHTML='';
  }
  e.preventDefault();
}

function filter(e){
  const listItems=document.querySelectorAll(".list-group-item");
  let searchWord=e.target.value.toUpperCase();

  listItems.forEach(function (listItem){
    const text=listItem.textContent.toUpperCase();
    if(text.indexOf(searchWord) <= -1){
      listItem.setAttribute("style" , "display:none");
    }
    else{
      listItem.setAttribute("style" , "display:block");
    }
  })
}