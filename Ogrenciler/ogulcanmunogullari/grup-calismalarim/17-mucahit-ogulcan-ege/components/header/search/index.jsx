import { useRef } from 'react';
import PropTypes from 'prop-types';
import style from './searchStyle.module.css';
const Search = ({ setUser }) => {
 const searchRef = useRef('');

 function handleSearch(e) {
  e.preventDefault();
  setUser(searchRef.current.value.trim());
  searchRef.current.value = '';
 }
 return (
  <form className={style} onSubmit={handleSearch}>
   <input className={style} ref={searchRef} type="search" placeholder="Enter username" />
  </form>
 );
};

export default Search;

Search.propTypes = {
 setUser: PropTypes.func.isRequired,
};
