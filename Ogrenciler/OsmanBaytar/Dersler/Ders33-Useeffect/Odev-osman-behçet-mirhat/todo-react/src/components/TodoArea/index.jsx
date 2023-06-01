import { useEffect, useState } from "react";
import "./style.css";
import TodoBox from "../TodoBox";

const TodoArea = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/boxes")
      .then((response) => response.json())
      .then((data) => setPost(data));
  });
  return (
    <div className="container">
      <div className="row todo-area">
        {post.map((item) => (
          <TodoBox
            key={item.id}
            number={item.id}
            person={item.person}
            job={item.job}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoArea;
