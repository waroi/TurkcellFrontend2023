import PropTypes from 'prop-types'
import styles from '../Person/Person.module.css'

const PersonDetail = ({personDetail}) => {
  return (
    <div className={styles.personDetailDiv}>
      <h3>{personDetail.name}</h3>
      <h4>{personDetail.login}</h4>
      <div className={styles.bioandLoc}>
        <div className={styles.bio}>
          <div>
            <span className="fa-solid fa-user"></span> Bio: <span>{personDetail.bio}</span>
          </div>
          <div>
            <span className="fa-solid fa-envelope"></span>Email: <span>{personDetail.email}</span>
          </div>
        </div>
        <div className={styles.loc}>
          <div>
            <span className="fa-solid fa-location-dot"></span>Location: <span>{personDetail.location}</span>
          </div>
          <div>
            <span className="fa-solid fa-building"></span>Company: <span>{personDetail.company}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

PersonDetail.propTypes = {
  personDetail: PropTypes.object
}

export default PersonDetail