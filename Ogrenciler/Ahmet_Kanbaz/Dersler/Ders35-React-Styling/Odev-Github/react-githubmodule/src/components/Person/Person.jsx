import GitHubDetail from "../GitHubDetail/GitHubDetail"
import AllPastSearches from "../PastSearches/AllPastSearchs/AllPastSearches"
import PersonDetail from "../PersonDetail/PersonDetail"
import PersonOtherInfo from "../PersonOtherInfo/PersonOtherInfo"
import AllRepos from "../Repos/AllRepos/AllRepos"

const Person = () => {
    return (
      <div>
        <div>
          <img src="https://avatars.githubusercontent.com/u/3173292?v=4" alt="userLogo"  width='400px'/>
          <div>
            <PersonDetail />
            <PersonOtherInfo />
          </div>
        </div>
        <GitHubDetail />
        <AllRepos />
        <AllPastSearches />
      </div>
    )
  }
  
  export default Person
  