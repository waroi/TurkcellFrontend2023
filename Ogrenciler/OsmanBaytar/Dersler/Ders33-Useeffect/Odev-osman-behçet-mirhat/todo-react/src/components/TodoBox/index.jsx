import React from 'react'
import "./style.css";

const TodoBox = ({person,job,date}) => {
  return (
    <div className='col-lg-4'>
        <div>{person}</div>
        <div>{job}</div>
        <div>{date}</div>
    </div>
  )
}

export default TodoBox;