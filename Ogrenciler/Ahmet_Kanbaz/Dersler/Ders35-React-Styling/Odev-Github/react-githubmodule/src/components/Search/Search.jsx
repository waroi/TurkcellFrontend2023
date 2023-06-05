import {useState} from 'react'
import Person from '../Person/Person'
import AllRepos from '../Repos/AllRepos/AllRepos'
import AllPastSearches from '../PastSearches/AllPastSearchs/AllPastSearches'

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [personAllInfos, setPersonAllInfos] = useState({});
  const [userName4Repos, setUserName4Repos] = useState('');

  const getInputValue = (e) => {
    setSearchValue(e.target.value)
  }

  const getGithubValue = async () => {
    const response = await fetch(`https://api.github.com/users/${searchValue}`)
    const data = await response.json();
    setPersonAllInfos(data);
    setUserName4Repos(searchValue);
  }
  
  return (
    <>
      <div>
        <input type="text" id='searchInput' value={searchValue} onChange={getInputValue}/>
        <button type='button' onClick={getGithubValue}>Ara</button>
      </div>
      <Person personAllInfos = {personAllInfos}/>
      <AllRepos userName4Repos = {userName4Repos}/>
      <AllPastSearches userName4Repos = {userName4Repos} setSearchValue = {setSearchValue}/>
    </>
  )
}

export default Search
