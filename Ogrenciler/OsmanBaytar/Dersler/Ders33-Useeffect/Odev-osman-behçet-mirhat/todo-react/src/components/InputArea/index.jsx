import { useState } from "react";
import "./index.css";

const InputArea = () => {
  const [add, setAdd] = useState({ person: "", job: "", date: "", id: "" });
  // const [isClicked, setisClicked] = useState(false);

  const postContent = () => {
    fetch("http://localhost:3000/boxes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(add),
    }).then((response) => response.json());
  };

  // useEffect(() => {
  //   if (isClicked) {
  //     postContent();
  //     setisClicked(false);
  //   }
  // }, [isClicked]);

  return (
    <div className="container inputArea">
      <div className="upper-input ">
        <input
          id="addPerson"
          className="form-control"
          type="text"
          placeholder="Type the person"
          onChange={(e) => setAdd({ ...add, person: e.target.value })}
        />
        <input
          id="addJob"
          className="form-control"
          type="text"
          placeholder="Type the job"
          onChange={(e) => setAdd({ ...add, job: e.target.value })}
        />
        <input
          id="addDate"
          className="form-control"
          type="date"
          placeholder="Type the date"
          onChange={(e) => setAdd({ ...add, date: e.target.value })}
        />
      </div>
      <div className="lower-input">
        <button onClick={postContent} className="btn btn-primary">
          Add Todo
        </button>
        <button className="btn btn-success">Edit Todo</button>
      </div>
    </div>
  );
};

export default InputArea;
