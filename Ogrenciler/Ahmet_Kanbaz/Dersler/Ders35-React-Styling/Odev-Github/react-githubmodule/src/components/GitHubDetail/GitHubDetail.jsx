import PropTypes from 'prop-types'
const GitHubDetail = ({githubDetail}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
  };

  const createGitHubDate = formatDate(githubDetail.created_at);
  const updateGitHubDate = formatDate(githubDetail.updated_at);
  return (
    <div><div>
    <ul>
      <li>Followers: <span>{githubDetail.followers}</span></li>
      <li>Following: <span>{githubDetail.following}</span></li>
      <li>Public Repos: <span>{githubDetail.public_repos}</span></li>
    </ul>
  </div>
  <div>
    <span>Github Oluşturma Zamanı: {createGitHubDate}</span>
    <span>Son Güncelleme Zamanı: {updateGitHubDate}</span>
  </div></div>
  )
}

GitHubDetail.propTypes = {
  githubDetail: PropTypes.object
}

export default GitHubDetail