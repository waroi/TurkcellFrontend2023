/* eslint-disable react/prop-types */
import SearchInput from './components/SearchInput/SearchInput'
import Button from './components/Button/Button'

const SearchArea = ({city, setCity, handleFetchWeather}) => {
  return (
    <div>
      <form onSubmit={(e) => handleFetchWeather(e)}>
        <SearchInput city={city} setCity={setCity} />
        <Button />
      </form>
    </div>
  )
}

export default SearchArea