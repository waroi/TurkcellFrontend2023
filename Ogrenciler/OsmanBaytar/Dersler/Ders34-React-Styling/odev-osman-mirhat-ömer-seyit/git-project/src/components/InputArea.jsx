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
      // console.log(json);
      await setItems(json);
    }
    fetchData(user)
    .catch(console.error);
  }, [user])

  async function handleSubmit(e) {
    e.preventDefault();
    const searchInput = document.getElementById("searchUsername").value;
    await setUser([searchInput]);
    await setLatest([...latest,searchInput]);
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
      {/* {
      user.length > 0 ? user.map((item, i) => (
        <LatestSearchs key={i} data={item} />
      )) : []
      } */}
      {/* <UserArea data={items}/> */}
      {items && <UserArea data={items}/>}
      {/* <LatestRepos data={items}/> */}
      {items && <LatestRepos data={items}/>}
    </div>
  )
}

export default InputArea;