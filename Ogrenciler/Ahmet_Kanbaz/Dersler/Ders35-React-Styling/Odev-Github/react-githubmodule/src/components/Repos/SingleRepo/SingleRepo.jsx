import PropTypes from 'prop-types'
const SingleRepo = ({repo}) => {
  return (
    <div>
      <h3>Repo Adı: {repo.name}</h3>
      <p>Repo Açıklaması: {repo.description}</p>
      <p>Repo Pushlama Tarihi: {repo.created_at}</p>
      <p>Repo Güncelleme Tarihi: {repo.updated_at}</p>
    </div>
  )
}

SingleRepo.propTypes = {
  repo: PropTypes.object
}

export default SingleRepo