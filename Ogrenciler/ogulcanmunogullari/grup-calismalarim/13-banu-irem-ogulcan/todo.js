let todos = JSON.parse(localStorage.getItem('todos')) || [];
let todo = {};
let filter = '';
todoScreen();
addTodoForm.addEventListener('submit', function (e) {
 e.preventDefault();
 todo = {
  id: Math.floor(Math.random() * 1_000_000_000),
  text: addTodoInput.value,
  isCompleted: false,
 };
 if (todo.text != '') {
  todos = [...todos, todo];
  todoScreen();
  addTodoInput.value = '';
 }
});
searchInput.addEventListener('input', function (e) {
 filter = e.target.value;
 todoScreen();
});
function todoScreen() {
 todoContainer.innerHTML = todos
  .filter((todo) => {
   return todo.text.includes(filter);
  })
  .map((todo) => {
   return `<li id="${
    todo.id
   }" class="list-group-item d-flex align-items-center">
  <input
   type="checkbox"
   id="checkbox-${todo.id}"
   name="todosCheck"
   ${todo.isCompleted ? 'checked' : ''}
   class="d-none" />
  <label for="checkbox-${
   todo.id
  }" class="todo-text align-self-center w-100 label-fc">
   ${todo.text}
  </label>
  <a class="btn btn-danger ms-auto delete">X</a>
  <a class="btn btn-warning ms-1 change">Değiştir</a>
 </li>`;
  })
  .join('');
 localStorage.setItem('todos', JSON.stringify(todos));
}
todoContainer.addEventListener('click', function (event) {
 event.target.classList.contains('delete') &&
  (todos = todos.filter((todo) => {
   return todo.id != event.target.parentElement.id;
  }));
 if (event.target.classList.contains('change')) {
  let todo = todos.find((todo) => {
   return todo.id == event.target.parentElement.id;
  });
  let text = prompt('Değiştirmek istediğiniz metni giriniz', todo.text);
  todo.isCompleted = false;
  todo.text = text;
 }
 if (event.target.classList.contains('label-fc')) {
  let todo = todos.find((todo) => {
   return todo.id == event.target.parentElement.id;
  });
  todo.isCompleted = !todo.isCompleted;
 }
 todoScreen();
 localStorage.setItem('todos', JSON.stringify(todos));
});
clearAllTodos.addEventListener('click', function (e) {
 e.preventDefault();
 todos = [];
 todoScreen();
 localStorage.setItem('todos', JSON.stringify(todos));
});
