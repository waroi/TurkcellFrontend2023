/* eslint-disable react/prop-types */

const SearchArea = ({handleSearch, searchQuery, setSearchQuery}) => {
  
  return (
    <div>
      <h1>GitHub Kullanıcılarını Arayın</h1>
      <p>GitHub kullanıcılarını arayın ve ayrıntılarını görüntüleyin</p>

      <form>
        <input
          type="text"
          value={searchQuery}
          placeholder="Kullanıcı adı girin"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>
          Ara
        </button>
      </form>
    </div>
  );
};

export default SearchArea;
