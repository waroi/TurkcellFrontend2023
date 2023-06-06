/* eslint-disable react/prop-types */
import { SearchContainer, SearchInput, SearchButton } from "./searchStyled"
import {useRef } from 'react'

const Search = ({handleSearch,setSearch}) => {

  const searchRef = useRef('');


  return (
    <form>
       <SearchContainer>
        <SearchInput type="text" ref={searchRef} placeholder="Şehir Adı Giriniz" onBlur={()=>setSearch(searchRef.current.value)}/>
        <SearchButton type="button" onClick={()=>{handleSearch()}}>Ara</SearchButton>
      </SearchContainer>
    </form>
  )
}

export default Search