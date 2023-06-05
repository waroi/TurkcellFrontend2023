import { useState, useEffect } from "react";
import Repos from "./components/Repos";
import Profile from "./components/Profile";
import LastSearches from "./components/LastSearches";
import Styles from "./App.module.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState({});
  const [lastSearches, setLastSearches] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [error, setError] = useState(null); // Hata durumu için bir state eklenmiştir

  useEffect(() => {
    const lastSearchesFromStorage = localStorage.getItem("lastSearches");
    if (lastSearchesFromStorage) {
      setLastSearches(JSON.parse(lastSearchesFromStorage));
    }
  }, []);

  const handleSearch = async () => {
    await fetch(`https://api.github.com/users/${searchValue}`)
      .then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            setUser(data);
          });
        } else {
          throw new Error("Kullanıcı bulunamadı.");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  
    if (lastSearches.indexOf(searchValue) === -1 && searchValue) {
      setLastSearches([...lastSearches, searchValue]);
      localStorage.setItem("lastSearches", JSON.stringify([...lastSearches, searchValue]));
    }
  };
  

  useEffect(() => {
    if (searchValue && isSearch) {
      handleSearch();
    }
  }, [searchValue]);

  useEffect(() => {
    setError(null); 
  }, [searchValue, isSearch]);

  const handleLastSearch = async (lastSearch) => {
    setSearchValue(lastSearch);
    setIsSearch(true);
    await handleSearch();
    setIsSearch(false);
  };

  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.searchArea}>
          <h2>Github Kullanıcısı Arayın</h2>
          <p>Bir kullanıcı adı girin ve github bilgilerini görün!</p>
          <input
            id="input"
            className={Styles.searchInput}
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className={Styles.searchButton} onClick={()=>{
            handleSearch();
            document.getElementById("input").value = "";
          }}>
            <i className="fa-solid fa-magnifying-glass"></i> Ara
          </button>
        </div>
        <LastSearches
          lastSearches={lastSearches}
          onLastSearchClick={handleLastSearch}
        />
        <div className={Styles.content}>
          {error ? ( 
            <p>{error}</p>
          ) : user.name ? (
            <>
              <Profile user={user} />
              <Repos username={user.login} />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
