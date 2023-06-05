import { useState,useEffect } from "react";
import Repos from "./components/Repos";
import Profile from "./components/Profile";
import LastSearches from "./components/LastSearches";
import Styles from "./App.module.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState({});
  const [lastSearches, setLastSearches] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  
  const handleSearch = async () => {
    await fetch(`https://api.github.com/users/${searchValue}`).then((res) =>
      res.json().then((data) => setUser(data))
    );
    if (lastSearches.indexOf(searchValue) === -1) {
      setLastSearches([...lastSearches, searchValue]);
    }
  };


  useEffect(()=>{
    if (searchValue && isSearch){
     handleSearch();
    }
},[searchValue])

  const handleLastSearch =  async (lastSearch) => {
  setSearchValue(lastSearch)
     setIsSearch(true)
     await handleSearch();
    setIsSearch(false)
  }

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.searchArea}>
          <h2>Github Kullanıcısı Arayın</h2>
          <p>Bir kullanıcı adı girin ve github bilgilerini görün!</p>
          <input id="input" className={Styles.searchInput} type="text" onChange={(e)=>setSearchValue(e.target.value)}/>
          <button className={Styles.searchButton} onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i> Ara </button>
        </div>
        <LastSearches lastSearches={lastSearches} onLastSearchClick = {handleLastSearch} />
        <div className={Styles.content}>
          <Profile user={user} />
       {
          user.name && <Repos username={user.login} /> 
        }</div>
      </div>
    </>
  );
}

export default App;
