import { useState, useEffect } from 'react'
import SinglePastSearch from '../SinglePastSearch/SinglePastSearch'
import PropTypes from 'prop-types'
import styles from '../PastSearches.module.css'
import searchStyles from '../../Search/Search.module.css'

const AllPastSearches = ({userName4Repos, setSearchValue}) => {
  const [pastSearches, setPastSearches] = useState([]);

  useEffect(() => {
    const pastSearchesFromLocalStorage = JSON.parse(localStorage.getItem('pastSearches'));
    if(pastSearchesFromLocalStorage !== null) {
      setPastSearches(pastSearchesFromLocalStorage);
    }

    if(userName4Repos !== '') {
      if(pastSearches.includes(userName4Repos)) {
        null;
      }
      else {
          setPastSearches([...pastSearches, userName4Repos]);
          localStorage.setItem('pastSearches', JSON.stringify([...pastSearches, userName4Repos]));
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName4Repos])

  const deleteAllPastSearches = () => {
    setPastSearches([]);
    localStorage.removeItem('pastSearches');
  }
  return (
    <div className={styles.pastSearchesDiv}>
      <p>Geçmiş Aramalar</p>
        {pastSearches.map((pastSearch, index) => 
          <SinglePastSearch key={index} pastSearch={pastSearch} setSearchValue = {setSearchValue} setPastSearches = {setPastSearches}/>
        )}
      <button type='button' className={searchStyles.searchButton} onClick={deleteAllPastSearches}>Tüm Aramaları Temizle</button>
    </div>
  )
}

AllPastSearches.propTypes = {
  userName4Repos: PropTypes.string,
  setSearchValue: PropTypes.func
}

export default AllPastSearches