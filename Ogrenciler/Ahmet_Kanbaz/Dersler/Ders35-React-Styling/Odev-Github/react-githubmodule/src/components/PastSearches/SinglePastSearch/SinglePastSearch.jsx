import PropTypes from 'prop-types'
const SinglePastSearch = ({pastSearch, setSearchValue}) => {
  return (    
    <li onClick={(e) => setSearchValue(e.target.innerText)}>
      {pastSearch}
    </li>
  )
}

SinglePastSearch.propTypes = {
  pastSearch: PropTypes.string,
  setSearchValue: PropTypes.func
}

export default SinglePastSearch