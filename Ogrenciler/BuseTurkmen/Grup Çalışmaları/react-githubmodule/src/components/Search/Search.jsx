import {useState} from 'react'
import Person from '../Person/Person'
import AllRepos from '../Repos/AllRepos/AllRepos'
import AllPastSearches from '../PastSearches/AllPastSearchs/AllPastSearches'
import styles from './Search.module.css'

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
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    setSearchValue('');
  }
  
  return (
    <>
      <div className={styles.searchDiv}>
        <input type="text" id='searchInput' value={searchValue} onChange={getInputValue} className={styles.searchInput} placeholder='GitHub Kullanıcı Adını Yazınız...'/>
        <button type='button' onClick={getGithubValue} className={styles.searchButton}>Ara</button>
      </div>
      {
        Object.keys(personAllInfos).length > 0 && <Person personAllInfos = {personAllInfos}/>
      }
      <AllRepos userName4Repos = {userName4Repos}/>
      <AllPastSearches userName4Repos = {userName4Repos} setSearchValue = {setSearchValue}/>
    </>
  )
}

export default Search
