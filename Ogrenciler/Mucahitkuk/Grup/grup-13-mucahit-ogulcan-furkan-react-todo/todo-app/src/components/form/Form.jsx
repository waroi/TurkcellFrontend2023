import Todo from '../../models/TodoClass';
import TodoList from '../../models/TodoListClass';
import PropTypes from 'prop-types';

const Form = ({setTodoList, setText, text, isChange}) => {
  const newTodoList = new TodoList();
  const addTodo = (e) => {
    e.preventDefault()
    if (text.trim() === "") {
      setText("Todo cannot be empty.");
      setTimeout(() => setText(""), 1000);
      return;
    }
    if (text.length > 50) {
      setText("Todo should be less than 50 characters.");
      setTimeout(() => setText(""), 1000);
      return;
    }
    const todo = new Todo(text);
    newTodoList.addTodo(todo);
    setTodoList(prev => [...prev, todo]);
    setText("");
  };

  return (
    <>
        <input placeholder="Add a new todo or edit them" value={text} onChange={(e) => setText(e.target.value)} type="text"/>
        {
          !isChange &&  <button onClick={addTodo}>Add</button> 
        }
    </> 
  )
}

export default Form

Form.propTypes = {
  setTodoList: PropTypes.func.isRequired,
  setText: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isChange: PropTypes.bool.isRequired
};