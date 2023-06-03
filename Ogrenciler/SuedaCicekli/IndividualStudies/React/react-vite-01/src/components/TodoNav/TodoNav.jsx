import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoHeader = ({ addTodoFunction }) => {

  const [search, setSearch] = useState("");


  const performSearch = () => {
    // Arama işlemini gerçekleştirmek için burada gerekli kodu yazabilirsiniz


    const newTodo = {
      title: search,
      completed: false
    };

    addTodoFunction(newTodo);
    setSearch("");

  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };



  return <div>
    <input type="text"
      className="w-50 rounded-4"
      placeholder="Add Todo"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  </div>
};

TodoHeader.propTypes = {
  addTodoFunction: PropTypes.func.isRequired,
};

export default TodoHeader;
