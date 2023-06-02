import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Styles from "./Repos.module.css";

const Repos = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      await fetch(`https://api.github.com/users/${username}/repos`).then(
        (res) => res.json().then((data) => setRepos(data))
      );
    }
    fetchRepos();
  }, [username]);

  return (
    <div className={Styles.container}>
      <h2>
        {username} Kullanıcısının Repoları ({repos.length})
      </h2>
      <div className="row">
        {repos
          .filter((repo) => repo.language)
          .map((repo) => {
            return (
              <div className="col-md-4" key={repo.id}>
                <div className={Styles.repo}>
                  <h3>{repo.name}</h3>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    Repoya git
                  </a>
                  <a className="btn btn-dark">
                    <i className="fa fa-code"></i>
                    <span className="badge badge-light">{repo.language}</span>
                  </a>
                  <a className="btn btn-primary ">
                    <i className="fa fa-star"></i>
                    <span>Starlar</span>
                    <span className="badge badge-light">
                      {repo.stargazers_count}
                    </span>
                  </a>
                  <a className="btn btn-info ms-3 text-white">
                    <i className="fa fa-code-branch"></i>
                    <span>Forklar</span>
                    <span className="badge badge-light">{repo.forks}</span>
                  </a>

                  <a className="btn btn-danger ms-3 text-white">
                    <i className="fa fa-eye"></i>
                    <span>Watchers</span>
                    <span className="badge badge-light">{repo.watchers}</span>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

Repos.propTypes = {
  username: PropTypes.string,
};

export default Repos;
