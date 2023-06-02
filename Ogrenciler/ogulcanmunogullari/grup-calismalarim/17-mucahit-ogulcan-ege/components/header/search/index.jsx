import { useRef } from 'react';
import PropTypes from 'prop-types';

const Search = ({ setUser }) => {
 const searchRef = useRef('');

 function handleSearch(e) {
  e.preventDefault();
  setUser(searchRef.current.value);
 }
 return (
  <form onSubmit={handleSearch}>
   <input ref={searchRef} type="search" placeholder="Enter username" />
  </form>
 );
};

export default Search;

Search.propTypes = {
 setUser: PropTypes.func.isRequired,
};
