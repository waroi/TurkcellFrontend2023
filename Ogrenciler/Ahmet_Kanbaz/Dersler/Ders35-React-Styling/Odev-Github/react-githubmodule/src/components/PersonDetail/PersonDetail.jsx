import PropTypes from 'prop-types'

const PersonDetail = ({personDetail}) => {
  return (
    <div>
      <h4>{personDetail.name}</h4>
      <h5>{personDetail.login}</h5>
      <div>
        <div>
          <ul>
            <li>Bio: <span>{personDetail.bio}</span></li>
            <li>Email: <span>{personDetail.email}</span></li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Location: <span>{personDetail.location}</span></li>
            <li>Company: <span>{personDetail.company}</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

PersonDetail.propTypes = {
  personDetail: PropTypes.object
}

export default PersonDetail