import style from "./App.module.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import SearchNav from "./components/SearchNav/SearchNav";
import UserInfos from "./components/UserInfos/UserInfos.jsx";

function App() {
  const [user, setUser] = useState([]);
  const [currentUser, setCurUser] = useState([]);

  useEffect(() => { }, [currentUser]);
  try {
    currentUser.then((resp) => console.log(resp));
  } catch (error) { }

  return (
    <>
      <div className={style.container}>
        <div className={`${style.dgrid}`}>
          <div className={`${style.searchGrid}`}>
            <SearchNav
              user={currentUser}
              setUser={setUser}
              setCurUser={setCurUser}
            />
          </div>
          <div className={`${style.userDetailGrid} ${style.userDetailBg}`}>
            <UserInfos user={currentUser} />
          </div>
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  user: PropTypes.array,
};

export default App;
