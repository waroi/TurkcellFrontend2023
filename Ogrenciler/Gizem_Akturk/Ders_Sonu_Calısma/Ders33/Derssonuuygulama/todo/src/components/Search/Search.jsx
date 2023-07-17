const Search = ({ setTodos }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.value;
    fetch(`http://localhost:3000/todos?name_like=${search}`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };

  return (
    <input
      className="bg-light text-black border-1 rounded w-100 p-2"
      type="text"
      placeholder="Search..."
      onChange={handleSearch}
    />
  );
};

export default Search;
