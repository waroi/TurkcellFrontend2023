export const todoFunc = (todo) => {
 return `<li id="${todo.id}" class="list-group-item d-flex align-items-center">
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
};
