import GitHubDetail from "../GitHubDetail/GitHubDetail"
import PersonDetail from "../PersonDetail/PersonDetail"
import PropTypes from 'prop-types'

const Person = ({personAllInfos}) => {
  return (
    <div>
      <div>
        <img src={personAllInfos.avatar_url} alt="userLogo"  width='400px'/>
          <PersonDetail personAllInfos = {personAllInfos}/>
      </div>
      <GitHubDetail personAllInfos = {personAllInfos}/>
    </div>
  )
}

Person.propTypes = {
  personAllInfos: PropTypes.object
}
  
  export default Person
  