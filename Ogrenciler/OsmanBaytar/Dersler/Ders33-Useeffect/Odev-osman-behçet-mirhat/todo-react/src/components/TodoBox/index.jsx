import "./style.css";
import PropTypes from "prop-types";

const TodoBox = ({ number, person, job, date }) => {
  const url = "http://localhost:3000/boxes";
  const deleteContent = (e) => {
    const deleteID =
      e.target.parentElement.parentElement.firstChild.firstChild.textContent;

    fetch(`${url}/${deleteID}`, {
      method: "DELETE",
    }).then((response) => response.json());
  };
  return (
    <div className="col-lg-4 todoBox">
      <div className="todo-element">
        <span>{number}</span>. Todo
      </div>
      <div className="todo-element">{person}</div>
      <div className="todo-element">{job}</div>
      <div className="todo-element">{date}</div>
      <div>
        <button className="btn btn-warning todo-btn">Edit</button>
        <button
          onClick={(e) => deleteContent(e)}
          className="btn btn-danger todo-btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

TodoBox.proptypes = {
  person: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
TodoBox.defaultProps = {
  person: "No Person",
  job: " No Job",
  date: "No Date",
};

export default TodoBox;
