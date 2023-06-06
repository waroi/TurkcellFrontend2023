import GitHubDetail from "../GitHubDetail/GitHubDetail"
import PersonDetail from "../PersonDetail/PersonDetail"
import PropTypes from 'prop-types'
import styles from './Person.module.css'

const Person = ({personAllInfos}) => {
  const personDetail = {
    name: personAllInfos.name,
    login: personAllInfos.login,
    bio: personAllInfos.bio,
    email: personAllInfos.email,
    location: personAllInfos.location,
    company: personAllInfos.company
  }

  const githubDetail = {
    followers: personAllInfos.followers,
    following: personAllInfos.following,
    public_repos: personAllInfos.public_repos,
    created_at: personAllInfos.created_at,
    updated_at: personAllInfos.updated_at
  }

  return (
    <div className={styles.personDiv}>
      <div className={styles.personInfo}>
        <img src={personAllInfos.avatar_url} alt="userLogo"  width='400px'/>
        <PersonDetail personDetail={personDetail} />
      </div>
      <GitHubDetail githubDetail = {githubDetail}/>
    </div>
  )
}

Person.propTypes = {
  personAllInfos: PropTypes.object
}
  
  export default Person
  