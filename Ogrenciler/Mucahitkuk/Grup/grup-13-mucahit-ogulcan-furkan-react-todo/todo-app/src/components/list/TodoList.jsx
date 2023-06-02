import ListItem from "../listItem/ListItem";
import PropTypes from "prop-types";

const TodoList = ({ todoList, setTodoList, text, setText, isChange, setIsChange}) => {
  return (
    <>
      {todoList.map((item) => <ListItem isChange={isChange} setIsChange={setIsChange} text={text} setText={setText} todoList={todoList} setTodoList={setTodoList} item={item} key={item.id} />   
    )}
    </>
  );
};

export default TodoList;

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  isChange: PropTypes.bool.isRequired,
  setIsChange: PropTypes.func.isRequired
};