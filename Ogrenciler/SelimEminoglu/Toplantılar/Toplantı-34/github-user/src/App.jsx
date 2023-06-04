import React, { useState } from "react";
import "./App.css";
import SearchUser from "./components/Search_user/SearchUser";
import SearchProfile from "./components/SearchProfile/SearchProfile";
import SearchRepos from "./components/SearchRepos/SearchRepos";
import LastSearchs from "./components/LastSearchs/LastSearchs";

function App() {
  let getLocal = JSON.parse(localStorage.getItem("searches"));

  if (!getLocal) {
    localStorage.setItem("searches", JSON.stringify([]));
  }

  const [searchArray, setSearchArray] = useState([]);
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [follower, setFollower] = useState("");
  const [following, setFollowing] = useState("");
  const [repo_number, setRepoNumber] = useState(0);
  const [repos, setRepos] = useState([]);
  const [lastSearch, setLastSearch] = useState([]);

  function getUserInfo(user) {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 404) {
          throw new Error("hatalı");
        }
      })
      .then((data) => {
        setName(data.login);
        setFollower(data.followers);
        setFollowing(data.following);
        setPicture(data.avatar_url);
        setRepoNumber(data.public_repos);

        fetch(`https://api.github.com/users/${user}/repos`)
          .then((response) => response.json())
          .then((data) => setRepos(data));

        lastSearch.push({ id: Date.now(), name: user });

        localStorage.setItem("searches", JSON.stringify(lastSearch));

        setSearchArray(getLocal);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Aradığınız Kullanıcı Bulunamadı!",
        });
      });
  }
  return (
    <>
      <h1>Github User Founder</h1>
      <SearchUser getUserInfo={getUserInfo} />
      <SearchProfile
        name={name}
        picture={picture}
        follower={follower}
        following={following}
        repo_number={repo_number}
      />
      <SearchRepos repos={repos} />
      <LastSearchs searchs={searchArray} />
    </>
  );
}

export default App;
