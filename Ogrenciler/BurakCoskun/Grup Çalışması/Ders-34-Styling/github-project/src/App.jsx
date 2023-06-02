import { useState } from "react";
import Repos from "./components/Repos";
import Profile from "./components/Profile";
import LastSearches from "./components/LastSearches";
import Styles from "./App.module.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState({});
  const [lastSearches, setLastSearches] = useState([]);

  const handleSearch = async () => {
    await fetch(`https://api.github.com/users/${searchValue}`).then((res) =>
      res.json().then((data) => setUser(data))
    );
    setLastSearches([...lastSearches, searchValue]);
  };

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.searchArea}>
          <h2>Github Kullanıcısı Arayın</h2>
          <p>Bir kullanıcı adı girin ve github bilgilerini görün!</p>
          <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
          <button onClick={handleSearch}>Ara</button>
        </div>
        <Profile user={user} />
        <Repos username={user.login} />
        <LastSearches lastSearches={lastSearches} />
      </div>
    </>
  );
}

export default App;
