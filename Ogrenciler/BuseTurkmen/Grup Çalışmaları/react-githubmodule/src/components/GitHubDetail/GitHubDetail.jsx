import PropTypes from 'prop-types'
import styles from './GitHubDetail.module.css'
const GitHubDetail = ({ githubDetail }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
  };

  const createGitHubDate = formatDate(githubDetail.created_at);
  const updateGitHubDate = formatDate(githubDetail.updated_at);

  return (
    <div className={styles.githubDetailDiv}>
      <div className={styles.githubFollow}>
        <span>Followers: <span>{githubDetail.followers}</span></span>
        <span>Following: <span>{githubDetail.following}</span></span>
        <span>Public Repos: <span>{githubDetail.public_repos}</span></span>
      </div>
      <div className={styles.githubDates}>
        <div>Github Oluşturma Zamanı: <span>{createGitHubDate}</span></div>
        <div>Son Güncelleme Zamanı: <span>{updateGitHubDate}</span></div>
      </div>
    </div>
  )
}

GitHubDetail.propTypes = {
  githubDetail: PropTypes.object
}

export default GitHubDetail