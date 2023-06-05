import ReposStyle from "./SearchRepos.module.css";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";
import { GrBook } from "react-icons/gr";

function SearchRepos({ repos }) {
  return (
    <div className={ReposStyle.repoDiv}>
      <h2>Repolar</h2>
      {repos.length == 0 && <p>Henüz Veri Yok...</p>}
      {repos.length > 0 && (
        <ul className={ReposStyle.repoList}>
          {repos.map((repo) => {
            return (
              <li key={repo.id}>
                <div className={ReposStyle.repoCard}>
                  <div className="cardHeader">
                    <h4 className={ReposStyle.h4}>
                      <a href={repo.html_url} target="_blank">
                        <GrBook />
                        {repo.full_name}
                      </a>
                    </h4>
                  </div>
                  <div className={ReposStyle.cardBody}>
                    <p className={ReposStyle.repoDetail}>
                      {repo.description.length < 50
                        ? repo.description
                        : repo.description.slice(0, 50) + "..."}
                    </p>
                    <div className={ReposStyle.cardİcon}>
                      <AiFillStar />
                      {repo.stargazers_count}
                      <AiOutlineFork />
                      {repo.forks_count}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SearchRepos;
