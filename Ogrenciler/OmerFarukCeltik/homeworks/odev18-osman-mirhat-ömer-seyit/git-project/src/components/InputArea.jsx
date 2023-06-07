import InputAreaStyle from "../CustomStyle.module.css";
import UserArea from './UserArea';
import LatestRepos from './LatestRepos';
import LatestSearchs from './LatestSearchs';
import { useEffect, useState } from "react";


const InputArea = () => {
  const [items, setItems] = useState();
  const [user, setUser] = useState([]);
  const [latest, setLatest] = useState([]);

  const fetchData = async (user) => {
    const data = await fetch(`https://api.github.com/users/${user}`);
    const json = await data.json();
    await setItems(json);
  }

  useEffect(() => {
    if (user == []) {
      return
    }
    fetchData(user)

  }, [user])

  async function handleSubmit(e) {
    e.preventDefault();
    const searchInput = document.getElementById("searchUsername");
    const clickedValue = document.getElementById("latestArea");
    if (searchInput.value.trim() !== "") {
      clickedValue.addEventListener("click", (e) => setUser([e.target.value]));
      await setUser([searchInput.value.trim()]);
      await setLatest([...latest, searchInput.value.trim()]);
      searchInput.value = "";
    } else {
      return ``
    }
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className={`${InputAreaStyle.inputArea} col-md-6 `}>
          <h2>Github User Search Area</h2>
          <form onSubmit={(e) => handleSubmit(e)} >
            <div className="">
              <label className={InputAreaStyle.inputParent}>Please type username</label>
              <input className={`${InputAreaStyle.searchUsername} mt-3 w-100`} type="text" placeholder='Username' id='searchUsername' />
            </div>
            <button type="submit" className={`${InputAreaStyle.searchUsernameBtn}`}>Search Username</button>
          </form>
        </div>
        <div className="col-md-6 ">
          {latest && <LatestSearchs data={latest} username={items} />}
        </div>
      </div>
      {items && <UserArea data={items} />}
      {items && <LatestRepos data={items} />}
    </div>
  )
}

export default InputArea;