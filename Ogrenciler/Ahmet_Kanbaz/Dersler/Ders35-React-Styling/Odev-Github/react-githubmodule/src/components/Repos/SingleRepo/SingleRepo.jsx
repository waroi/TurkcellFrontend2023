import PropTypes from 'prop-types'
import styles from '../Repos.module.css'
const SingleRepo = ({repo}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
  };

  const createRepoDate = formatDate(repo.created_at);
  const updateRepoDate = formatDate(repo.updated_at);
  return (
    <div className={styles.singleRepo}>
      <h3>Repo Adı: {repo.name}</h3>
      <div className={styles.singleRepoInfo}>
        <p>Repo Açıklaması: {repo.description}</p>
        <p>Repo Pushlama Tarihi: {createRepoDate}</p>
        <p>Repo Güncelleme Tarihi: {updateRepoDate}</p>
      </div>
    </div>
  )
}

SingleRepo.propTypes = {
  repo: PropTypes.object
}

export default SingleRepo