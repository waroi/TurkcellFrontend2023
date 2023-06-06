/* eslint-disable react/prop-types */
import SearchInput from './components/SearchInput/SearchInput'
import Button from './components/Button/Button'

const SearchArea = ({setCity, handleFetchWeather}) => {
  return (
    <div>
      <form>
        <SearchInput setCity={setCity} />
        <Button handleFetchWeather={handleFetchWeather}/>
      </form>
    </div>
  )
}

export default SearchArea