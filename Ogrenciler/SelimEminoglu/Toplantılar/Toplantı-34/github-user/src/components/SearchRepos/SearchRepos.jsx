function SearchRepos({ repos }) {
  return (
    <div className="repoDiv">
      <h2>Repolar</h2>
      <ul>
        {repos.map((repo) => {
          return (
            <li key={repo.id}>
              {repo.full_name}-- Stars:
              {repo.stargazers_count}--Forks:
              {repo.forks_count}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchRepos;
