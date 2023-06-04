import styles from "./style.module.css"
import {icon} from "../../gitIcon"
import RepoDetailBadge from "./repoDetailBadge"


const Repo = ({repo}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.repoTitle}>
        {icon}
        <a href={repo?.html_url}><h4>{repo?.name}</h4></a>
        <span className={styles.badge}>{repo?.private ? "Private":"Public"}</span>
      </div>
      <div className={styles.repoDetailBadge}>
        <RepoDetailBadge number={repo?.forks_count} icon="fa-solid fa-code-fork"/>
        <RepoDetailBadge number={repo?.stargazers_count} icon="fa-solid fa-star star"/>
      </div>
      </div>
  )
}

export default Repo