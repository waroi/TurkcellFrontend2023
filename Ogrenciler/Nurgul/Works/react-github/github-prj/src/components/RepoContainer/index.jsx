/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../UserContainer/CustomStyle.module.css";

const RepoContainer = ({ user }) => {
  const [repos, setRepos] = useState([]);

  fetch(user.repos_url)
    .then((res) => res.json())
    .then((data) => setRepos(data))
    .catch((err) => console.log(err));

  const LastTwoRepos = repos.slice(repos.length - 2);

  return (
    <div className={style.containerRepos}>
      <h2 className={style.h2}>En Son Repolar</h2>
      <ul className="list-unstyled">
        {LastTwoRepos.map((repo) => (
          <li key={repo.id}>
            <a className={style.repos} href={repo.html_url}>{repo.name}:</a> <br />
            <button className={style.btn}>
              Starlar: {repo.stargazers_count}
            </button>
            <button className={style.btn}>
              Forklar: {repo.forks_count}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoContainer;
