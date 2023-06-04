import React, { useState } from "react";
import "./App.css";
import SearchUser from "./components/Search_user/SearchUser";
import SearchProfile from "./components/SearchProfile/SearchProfile";
import SearchRepos from "./components/SearchRepos/SearchRepos";

function App() {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [follower, setFollower] = useState("");
  const [following, setFollowing] = useState("");
  const [repo_number, setRepoNumber] = useState(0);
  const [repos, setRepos] = useState([]);

  function getUserInfo(user) {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.login);
        setFollower(data.followers);
        setFollowing(data.following);
        setPicture(data.avatar_url);
        setRepoNumber(data.public_repos);
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
    </>
  );
}

export default App;
