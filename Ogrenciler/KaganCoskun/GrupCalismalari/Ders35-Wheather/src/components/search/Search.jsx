
import { SearchContainer, SearchInput, SearchButton } from "./searchStyled"
import PropTypes from 'prop-types';
import {useRef } from 'react'

const Search = ({handleSearch,setSearch}) => {

  const searchRef = useRef('');


  return (
    <form onSubmit={(e)=>{e.preventDefault();handleSearch()}}>
       <SearchContainer>
        <SearchInput type="text" ref={searchRef} placeholder="Şehir Adı Giriniz" onChange={()=>setSearch(searchRef.current.value)}/>
        <SearchButton type="submit">Ara</SearchButton>
      </SearchContainer>
    </form>
  )
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search