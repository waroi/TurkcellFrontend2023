import PropTypes from 'prop-types'
const SinglePastSearch = ({pastSearch, setSearchValue, setPastSearches}) => {
  const deleteSinglePast = (e) => {
    const pastSearches = JSON.parse(localStorage.getItem('pastSearches'));
    const newPastSearches = pastSearches.filter((past) => past !== pastSearch);
    localStorage.setItem('pastSearches', JSON.stringify(newPastSearches));
    setPastSearches(newPastSearches);
    e.preventDefault();
  }
  return (    
    <div onClick={(e) => setSearchValue(e.target.innerText)}>
      {pastSearch}
      <span className='fa-solid fa-xmark' onClick={deleteSinglePast}></span>
    </div>
  )
}

SinglePastSearch.propTypes = {
  pastSearch: PropTypes.string,
  setSearchValue: PropTypes.func,
  setPastSearches: PropTypes.func
}

export default SinglePastSearch