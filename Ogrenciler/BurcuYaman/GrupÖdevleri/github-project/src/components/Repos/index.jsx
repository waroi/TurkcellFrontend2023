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
    <div className={`row ${Styles.container}`}>
      <h2>
        {username} Kullanıcısının Repoları ({repos.length})
      </h2>
      <div >
        {repos
          .filter((repo) => repo.language)
          .map((repo) => {
            return (
              <table key={repo.id}> 
              <div className="col-md-4 ">
                <div className={Styles.repo}>
                  <h3>{repo.name}</h3>
                  <div className={Styles.repos}>           
                    
                     <a className={`btn btn-dark ${Styles.repo_btn}`}>
                      <i className="fa fa-code"></i>
                      <span className="badge badge-light">{repo.language}</span>
                    </a>
                    <a className={`btn btn-primary ${Styles.repo_btn}`}>
                      <i className="fa fa-star"></i>
                      <span>Starlar</span>
                      <span className={Styles.repo_info}>
                        {repo.stargazers_count}
                      </span>
                    </a>
                  <a className={`btn btn-info ${Styles.repo_btn}`}>
                    <i className="fa fa-code-branch"></i>
                    <span>Forklar</span>
                    <span className={Styles.repo_info}>{repo.forks}</span>
                  </a>

                  <a className={`btn btn-danger ${Styles.repo_btn}`}>
                    <i className="fa fa-eye"></i>
                    <span>Watchers</span>
                    <span className={Styles.repo_info}>{repo.watchers}</span>
                  </a>
                  <a className={`btn btn-success ${Styles.repo_btn}`} href={repo.html_url} target="_blank" rel="noreferrer">
                      <i className="fa-solid fa-arrow-right"></i>
                      <span>Repoya git</span>
                    </a>
                    </div>
       
                </div>
              </div></table>
             
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
