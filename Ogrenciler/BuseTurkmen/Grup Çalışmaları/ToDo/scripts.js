const addTask=document.getElementById('addtask');
const addtaskinput=document.getElementById('addtaskinput');
const allitems=document.getElementById('allitems');
const deleteallitems=document.getElementById('deleteallitems');
listenerFunction();

function listenerFunction(){
    addTask.addEventListener('submit', addnewtask);
}

function addnewtask(e){
    if(addtaskinput.value === ''){
        alert('Add New Kısmı Boş Olamaz');
    }
    const newitem=document.createElement('li');
    const itemtext=document.createTextNode(addtaskinput.value);
    newitem.appendChild(itemtext);
    allitems.appendChild(newitem);
    addtaskinput.value='';





    e.preventDefault();
}
