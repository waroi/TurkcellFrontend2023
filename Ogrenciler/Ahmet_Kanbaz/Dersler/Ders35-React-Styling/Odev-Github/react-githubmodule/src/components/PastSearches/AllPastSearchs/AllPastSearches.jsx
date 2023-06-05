import { useState, useEffect } from 'react'
import SinglePastSearch from '../SinglePastSearch/SinglePastSearch'
import PropTypes from 'prop-types'

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
  
  return (
    <div>
      Geçmiş Aramalar
      <ul>
        {pastSearches.map((pastSearch, index) => 
          <SinglePastSearch key={index} pastSearch={pastSearch} setSearchValue = {setSearchValue}/>
        )}
      </ul>
    </div>
  )
}

AllPastSearches.propTypes = {
  userName4Repos: PropTypes.string,
  setSearchValue: PropTypes.func
}

export default AllPastSearches