import InputAreaStyle from "../CustomStyle.module.css";
import UserArea from './UserArea';
import LatestRepos from './LatestRepos';
import LatestSearchs from './LatestSearchs';
import { useEffect, useState } from "react";
// import { fetchItems } from "./services";


const InputArea = () => {
  const [items, setItems] = useState();
  const [latest, setLatest] = useState([]);



  async function handleSubmit(e) {
    e.preventDefault();
    const searchInput = document.getElementById("searchUsername").value;
    await setLatest([...latest, searchInput])
    //  console.log(latest);
    await fetch(`https://api.github.com/users/${searchInput}`)
      .then((response) => response.json()).then((res) => setItems(res));
    items ? console.log(items) : null;
  }
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className={`${InputAreaStyle.inputArea} col-4`}>
          <h2>Github User Search Area</h2>
          <form onSubmit={(e) => handleSubmit(e)} >
            <label>Please type username</label>
            <input className='mt-3' type="text" placeholder='Username' id='searchUsername' />
            <button type="submit" className="btn btn-primary mt-3">Search Username</button>
          </form>
        </div>
      </div>
      <UserArea data={items} />
      <LatestRepos data={items} />
      {
      latest.length > 0 ? latest.map((item, i) => (
        <LatestSearchs key={i} data={item} />
      )) : []
      }
    </div>
  )
}

export default InputArea;