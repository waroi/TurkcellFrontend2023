import PropTypes from 'prop-types'

const PersonDetail = ({personAllInfos}) => {
  return (
    <div>
      <h4>{personAllInfos.name}</h4>
      <h5>{personAllInfos.login}</h5>
      <div>
        <div>
          <ul>
            <li>Bio: <span>{personAllInfos.bio}</span></li>
            <li>Email: <span>{personAllInfos.email}</span></li>
            {/* <li><button href="#" disabled>Waroi</button></li> İçerik null ise default bir değer verilerek disabled yapılabilir. */}
          </ul>
        </div>
        <div>
          <ul>
            <li>Location: <span>{personAllInfos.location}</span></li>
            <li>Company: <span>{personAllInfos.company}</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

PersonDetail.propTypes = {
  personAllInfos: PropTypes.object
}

export default PersonDetail