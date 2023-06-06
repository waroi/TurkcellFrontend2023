/* eslint-disable react/prop-types */

const SearchInput = ({city, setCity}) => {

  return (
    <div>
      <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="Şehir Ara" />
    </div>
  )
}

export default SearchInput