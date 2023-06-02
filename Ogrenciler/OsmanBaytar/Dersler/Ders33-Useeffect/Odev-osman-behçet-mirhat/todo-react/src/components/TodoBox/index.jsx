import { useState } from "react";
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

  const [editedData,setEditedData]=useState([]);

  const getEditedData=(e)=>{
    const editID =
      e.target.parentElement.parentElement.firstChild.firstChild.textContent;
      console.log(editID);
      fetch(`${url}/${editID}`)
      .then((response) => response.json())
      .then((data) => setEditedData(data));
      console.log(`${url}/${editID}`)
      console.log(editedData);
      console.log(editedData.person);
      document.getElementById("addPerson").value=editedData.person;
      document.getElementById("addJob").value=editedData.job;
      document.getElementById("addDate").value=editedData.date;
      return editID;
  }
  // const getEditedId=(e)=>{
  //   const editID =
  //     e.target.parentElement.parentElement.firstChild.firstChild.textContent;
  //   return editID;
  // }

  return (
    <div className="col-lg-4 todoBox">
      <div className="todo-element">
        <span>{number}</span>. Todo
      </div>
      <div className="todo-element">{person}</div>
      <div className="todo-element">{job}</div>
      <div className="todo-element">{date}</div>
      <div>
        <button onClick={(e)=>getEditedData(e)} className="btn btn-warning todo-btn">Edit</button>
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
