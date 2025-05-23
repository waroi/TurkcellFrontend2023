/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import SearchArea from "./components/SearchArea";
import UserContainer from "./components/UserContainer";
import RepoContainer from "./components/RepoContainer";
import LastSearch from "./components/LastSearch";
import "./App.css";
import style from "./CustomStyle.module.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState({});
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const storedSearchHistory = localStorage.getItem("searchHistory");
    if (storedSearchHistory) {
      setSearchHistory(JSON.parse(storedSearchHistory));
    } else {
      setSearchHistory([]);
    }

    fetch(`https://api.github.com/users/waroi`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery === "") return alert("Lütfen bir kullanıcı adı giriniz");

    fetch(`https://api.github.com/users/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setSearchHistory((prevHistory) => [...prevHistory, searchQuery]);
        localStorage.setItem(
          "searchHistory",
          JSON.stringify([...searchHistory, searchQuery])
        );
      })
      .catch((err) => console.log(err));
    setSearchQuery("");
  };

  const handleSearchHistory = (search) => {
    fetch(`https://api.github.com/users/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <SearchArea
          handleSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className={style.flex}>
        <div>
          <UserContainer user={user} setUser={setUser} />
        </div>
        <div className={style.margin}>
          <RepoContainer user={user} />
        </div>
        <div>
          <LastSearch
            handleSearchHistory={handleSearchHistory}
            setSearchHistory={setSearchHistory}
          />
        </div>
      </div>
    </>
  );
}

export default App;
