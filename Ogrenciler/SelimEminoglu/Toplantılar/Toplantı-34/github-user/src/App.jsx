import React from "react";
import "./App.css";
import SearchUser from "./components/Search_user/SearchUser";

function App() {
  function getUserInfo(user) {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <>
      <h1>Github User Founder</h1>
      <SearchUser getUserInfo={getUserInfo} />
    </>
  );
}

export default App;
