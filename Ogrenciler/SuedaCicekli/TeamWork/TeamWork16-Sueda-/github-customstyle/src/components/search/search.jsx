import { useState, useEffect } from 'react';
import styles from './search.module.css'
import mainStyles from '../../appCustom.module.css' //dflex'i aldım
import Logo from '../../assets/logo/soab.png';
import { getUserByUserName } from '../../services/api'



const Search = ({ setUser }) => {

  const [search, setSearch] = useState('');
  const [history, setHistory] = useState([]);
  useEffect(() => {
  }, [history]);

  const handleSearch = async () => {
    let tempUser = await getUserByUserName(search)
    setUser(tempUser)
    setHistory([...history, search])
    setSearch('')
  }

  const handleLatestClick = async (latestSearch) => {
    let tempUser = await getUserByUserName(latestSearch)
    setUser(tempUser)
  }

  return (
    <div className={`${styles.searchBackground} ${styles.leftArea}`}>
      <img src={Logo} alt="soabLogo" className={styles.logo} />
      <div className={`${mainStyles.dflex} ${styles.inputArea} `} >
        <input type="text"
          value={search}
          placeholder="@userName" name="search"
          className={styles.searchInput}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {history.map((latestSearch, index) => (
        <button
          key={index}
          className={styles.clickButton}
          onClick={() => { handleLatestClick(latestSearch) }}
        >{latestSearch}</button>
      ))}
    </div>
  )
}

export default Search

