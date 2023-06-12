import style from "./Repos.module.css"
import PropTypes from "prop-types"
import {FaRegStar,FaCodeBranch} from "react-icons/fa"
import {BiError} from "react-icons/bi"

const Repos = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <div className={style.card} key={repo.id}>
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
          <p>{repo.language}</p>
         <div className={style.repoCountWrap}>
         <div className={style.reposStar}><FaRegStar/> <span>{repo.stargazers_count}</span></div>
         <div className={style.reposStar} ><FaCodeBranch/> <span>{repo.forks_count}</span></div> 
         <div className={style.reposStar}><BiError/> <span>{repo.open_issues_count}</span></div> 
         </div>
        </div>
      ))}
    </div>
  );
};
Repos.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      language: PropTypes.string,
      stargazers_count: PropTypes.number.isRequired,
      forks_count: PropTypes.number.isRequired,
      open_issues_count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Repos;
