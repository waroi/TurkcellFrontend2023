function SearchCity({ searchValue, setSearchValue, fetchWeather }) {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Şehir Girin"
        onChange={handleChange}
        value={searchValue}
      />
      <button onClick={() => fetchWeather()}>Hava Durumunu Getir</button>
    </form>
  );
}

export default SearchCity;
