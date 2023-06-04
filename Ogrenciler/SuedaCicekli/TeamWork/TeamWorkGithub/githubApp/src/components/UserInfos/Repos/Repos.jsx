import React from "react";

const Repos = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <div key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <p>{repo.language}</p>
          <p>{repo.stargazers_count}</p>
          <p>{repo.forks_count}</p>
          <p>{repo.open_issues_count}</p>
        </div>
      ))}
    </div>
  );
};

export default Repos;
