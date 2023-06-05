import React, { useState } from "react";
import "./App.css";
import SearchUser from "./components/Search_user/SearchUser";
import SearchProfile from "./components/SearchProfile/SearchProfile";
import SearchRepos from "./components/SearchRepos/SearchRepos";
import LastSearchs from "./components/LastSearchs/LastSearchs";

function App() {
  let getLocal = JSON.parse(localStorage.getItem("searches"));

  const [searchArray, setSearchArray] = useState(getLocal);
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [follower, setFollower] = useState("");
  const [following, setFollowing] = useState("");
  const [repo_number, setRepoNumber] = useState(0);
  const [repos, setRepos] = useState([]);
  const [location, setLocation] = useState("");
  let [lastSearch, setLastSearch] = useState([]);

  function clearAllSearch() {
    localStorage.setItem("searches", JSON.stringify([]));
    setSearchArray([]);
    setLastSearch([]);
  }

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
        setLocation(data.location);

        fetch(`https://api.github.com/users/${user}/repos`)
          .then((response) => response.json())
          .then((data) => {
            setRepos(data);
          });

        if (
          getLocal === null ||
          getLocal === undefined ||
          getLocal.length === 0
        ) {
          lastSearch.push({ id: Date.now(), name: user, img: data.avatar_url });

          localStorage.setItem("searches", JSON.stringify(lastSearch));
        } else {
          const controlName = lastSearch.find((item) => item.name === user);

          if (!controlName) {
            lastSearch.push({
              id: Date.now(),
              name: user,
              img: data.avatar_url,
            });
            localStorage.setItem("searches", JSON.stringify(lastSearch));
          }
        }

        setSearchArray(getLocal);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Hay Aksi...",
          text: "Aradığınız Kullanıcı Bulunamadı!",
        });
      });
  }
  return (
    <>
      <h1>Github User Founder</h1>
      <SearchUser getUserInfo={getUserInfo} />
      <div className="row">
        <div className="col-4">
          <SearchProfile
            name={name}
            picture={picture}
            follower={follower}
            following={following}
            repo_number={repo_number}
            location={location}
          />
        </div>
        <div className="col-8">
          <SearchRepos repos={repos} />
        </div>
      </div>
      <div className="lastSearchDiv">
        <LastSearchs
          searchs={searchArray}
          getUserInfo={getUserInfo}
          clearAllSearch={clearAllSearch}
        />
      </div>
    </>
  );
}

export default App;
