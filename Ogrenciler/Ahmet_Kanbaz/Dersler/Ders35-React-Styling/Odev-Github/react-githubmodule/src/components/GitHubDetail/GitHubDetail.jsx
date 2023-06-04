import PropTypes from 'prop-types'
const GitHubDetail = ({personAllInfos}) => {
  return (
    <div><div>
    <ul>
      <li>Followers: <span>{personAllInfos.followers}</span></li>
      <li>Following: <span>{personAllInfos.following}</span></li>
      <li>Public Repos: <span>{personAllInfos.public_repos}</span></li>
    </ul>
  </div>
  <div>
    <span>Github Oluşturma Zamanı: {personAllInfos.created_at}</span>
    <span>Son Güncelleme Zamanı: {personAllInfos.updated_at}</span>
  </div></div>
  )
}

GitHubDetail.propTypes = {
  personAllInfos: PropTypes.object
}

export default GitHubDetail