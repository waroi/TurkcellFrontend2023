import React from "react";
import style from "./Infos.module.css";
import { useState, useEffect } from "react";
import Repos from "../Repos/Repos";

const Infos = ({ user }) => {
  const [userRepos, setUserRepos] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(user.repos_url)
        .then((res) => res.json())
        .then((data) => setUserRepos(data));
    }
  }, [user]);

  return (
    <div>
      <h1>Infos</h1>
      <div className={style.name}>
        <img className={style.imageHero} src={user?.avatar_url} />
        <div>
          <h1>{user?.name}</h1>
          <h1 className={style.company}>{user?.company}</h1>
          <h1 className={style.badge}>Followers:{user?.followers}</h1>
          <h1 className={style.badge}>Following:{user?.following}</h1>
          <h1 className={style.badge}>Repos: {user?.public_repos}</h1>
        </div>
      </div>
      <div className={style.repos}>
      <Repos userRepos={userRepos} />
      </div>
    </div>
  );
};

export default Infos;
