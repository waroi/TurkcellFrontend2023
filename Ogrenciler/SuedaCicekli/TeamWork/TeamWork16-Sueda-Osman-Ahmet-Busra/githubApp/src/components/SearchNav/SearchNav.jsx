import style from "./SearchNav.module.css";
import { getUsers } from "../../utilities/Api";
import { useState, useEffect } from "react";
import LogoImg from "../../assets/logo/soab.png";
import PropTypes from "prop-types"

const SearchNav = ({ setCurUser }) => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [repos, setRepos] = useState([]);
  const [userExist, setUserExist] = useState(false)
  const [sameUser, setSameUser] = useState(false)

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);


  function getUsersFromApi(e) {
    e.preventDefault();

    getUsers(search)
      .then((resp) => {
        if (resp.login) {
          setCurUser(getUsers(search));
          setRepos(getUsers(search));
          const storedItems = JSON.parse(localStorage.getItem("items")) || [];

          if (storedItems.length >= 5) {
            storedItems.shift();
          }
          let cur = storedItems.find((item) => item === search);
          if (cur) {
            setSameUser(true)
            setTimeout(() => {
              setSameUser(false)
            }, 2000)

          } else {
            const updatedItems = [...storedItems, search];
            localStorage.setItem("items", JSON.stringify(updatedItems));
            setItems(updatedItems);
          }
        } else {
          setUserExist(true)
          setTimeout(() => {
            setUserExist(false)
          }, 2000)
        }
      })
      .catch((err) => console.log(err));

    setSearch("");
  }

  function getUserFromLatest(user) {
    const storedItems = JSON.parse(localStorage.getItem("items"));

    const filteredItems = storedItems.filter((item) => item !== user);

    const updatedItems = [...filteredItems, user];

    localStorage.setItem("items", JSON.stringify(updatedItems));
    // setItems(updatedItems);

    getUsers(user).then((res) => setCurUser(res));
  }

  return (
    <div>
      <form className={style.searchForm} onSubmit={getUsersFromApi}>
        <div className={style.logoArea}>
          {" "}
          <img src={LogoImg} alt="LogoSoab" className={style.logo} />
        </div>
        <div className={` ${style.inputArea} `}>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className={style.searchInput}
          />
          <button type="submit" className={style.searchButton}>
            Search
          </button>
        </div>
      </form>
      {userExist && (<div className={style.searchErr}>
        There is no user with that username!
      </div>)}
      {sameUser && (<div className={style.searchErr}>
        User has already added
      </div>)}


      {items.slice(-5).map((item, i) => (
        <button onClick={() => getUserFromLatest(item)} key={i} className={`${style.latestButton} myButton`}>
          <span>   {item}</span>
          <i></i>
        </button>

      ))}
    </div>
  );
};
SearchNav.propTypes = {
  setCurUser: PropTypes.func.isRequired,
};

export default SearchNav;
