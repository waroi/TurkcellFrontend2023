/* eslint-disable react/prop-types */
import { useState } from "react";

const RepoContainer = ({ user }) => {
  const [repos, setRepos] = useState([]);

  fetch(user.repos_url)
    .then((res) => res.json())
    .then((data) => setRepos(data))
    .catch((err) => console.log(err));

  const LastTwoRepos = repos.slice(repos.length - 2);

  return (
    <div>
      <h2>En Son Repolar</h2>
      <ul className="list-unstyled">
        {LastTwoRepos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
            <span className="badge bg-primary">
              Starlar: {repo.stargazers_count}
            </span>
            <span className="badge bg-secondary">
              Forklar: {repo.forks_count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoContainer;
