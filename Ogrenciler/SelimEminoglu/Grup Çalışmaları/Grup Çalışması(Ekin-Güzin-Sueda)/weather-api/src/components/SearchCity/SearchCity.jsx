/* eslint-disable react/prop-types */
import { SearchForm, SearchInput, SearchButton } from './styleSearchCity'
import { BiSearch } from 'react-icons/bi'

function SearchCity({ searchValue, setSearchValue, fetchWeather }) {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (

    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Şehir Girin"
        onChange={handleChange}
        value={searchValue}
      />
      <SearchButton onClick={() => fetchWeather()}><BiSearch /></SearchButton>
    </SearchForm>
  );
}

export default SearchCity;
