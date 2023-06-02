import { useState } from "react";
import "./index.css";

const InputArea = () => {
  const [add, setAdd] = useState({ person: "", job: "", date: "", id: "" });
  const [id,setId]=useState();

  const postContent = () => {
    fetch("http://localhost:3000/boxes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(add),
    }).then((response) => response.json());
  };

  const url = "http://localhost:3000/boxes";

  const editContent = () => {
    const deletePersonData =document.getElementById("addPerson").value;
    const deleteJobData =document.getElementById("addJob").value;
    const deleteDateData =document.getElementById("addDate").value;
    let editedUrl =`${url}?person=${deletePersonData}&job=${deleteJobData}&date=${deleteDateData}`
    console.log(editedUrl);
    fetch(editedUrl)
      .then((response) => response.json())
      .then((data) => setId(data[0].id));
    editedUrl=`${url}/${id}`;  
    return editedUrl;
  };

  
  const saveContent=()=>{

    let editedUrl =editContent();
    const savePersonData =document.getElementById("addPerson").value;
    const saveJobData =document.getElementById("addJob").value;
    const saveDateData =document.getElementById("addDate").value;
    const saveData = {
      "person": savePersonData,
      "job": saveJobData,
      "date": saveDateData
    };
    fetch(editedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveData),
    }).then((response) => response.json());
  }

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
        <button onClick={editContent} className="btn btn-success">Edit Todo</button>
        <button onClick={saveContent} className="btn btn-secondary">Save Todo</button>
      </div>
    </div>
  );
};

export default InputArea;
