import React from "react";
import style from "./Repos.module.css";

const Repos = ({ userRepos }) => {
  return (
    <div>
      <div className={style.header}>
      <h1>Repos</h1>
      <h1>Languages</h1>
      <h1>Stars</h1>
      <h1>Watchers</h1>
      </div>
      {userRepos?.map((repo) => (
        <div className={style.repo}>
          <h1>{repo.name}</h1>
          <h1>{repo.language}</h1>
          <h1>{repo.stargazers_count}</h1>
          <h1>{repo.watchers_count}</h1>
        </div>
      ))}
    </div>
  );
};

export default Repos;
