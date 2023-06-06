/* eslint-disable react/prop-types */


const SearchInput = ({setCity}) => {

  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('onChange', (e) => {
    setCity(e.target.value)
  })


  return (
    <div>
      <input id="searchInput" type="text" placeholder="Şehir Ara" />
    </div>
  )
}

export default SearchInput