import InputAreaStyle from "../CustomStyle.module.css";
import UserArea from './UserArea';
import LatestRepos from './LatestRepos';
import LatestSearchs from './LatestSearchs';
import { useEffect, useState } from "react";
// import { fetchItems } from "./services";


const InputArea = () => {
  const [items, setItems] = useState();
  const [user, setUser] = useState([]);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    if(user == []){
      return
    }
    const fetchData = async (user) => {
      const data = await fetch(`https://api.github.com/users/${user}`);
      const json = await data.json();
      await setItems(json);
    }
    fetchData(user)

  }, [user])

  async function handleSubmit(e) {
    e.preventDefault();
    const searchInput = document.getElementById("searchUsername").value;
    const clickedValue = document.getElementById("latestArea");
    clickedValue.addEventListener("click", (e) => setUser([e.target.value]));
    await setUser([searchInput]);
    await setLatest([...latest,searchInput]);
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className={`${InputAreaStyle.inputArea} col-md-6 `}>
          <h2>Github User Search Area</h2>
          <form onSubmit={(e) => handleSubmit(e)} >
            <div>
            <label className="me-3">Please type username</label>
            <input className={`${InputAreaStyle.searchUsername} mt-3 w-100`} type="text" placeholder='Username' id='searchUsername' />
            </div>
            <button type="submit" className={`${InputAreaStyle.searchUsernameBtn} mt-3`}>Search Username</button>
          </form>
        </div>
        <div className="col-md-6 ">
        {latest && <LatestSearchs data={latest} username={items}/>}
        </div>
      </div>
      {items && <UserArea data={items}/>}
      {items && <LatestRepos data={items}/>}
    </div>
  )
}

export default InputArea;