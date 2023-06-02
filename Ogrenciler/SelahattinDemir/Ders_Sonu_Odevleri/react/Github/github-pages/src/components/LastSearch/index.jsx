/* eslint-disable react/prop-types */

const LastSerach = ({ searchHistory, handleSearchHistory }) => {
  console.log("searchHistory", searchHistory);
  return (
    <div>
      <h2>Son Arananlar</h2>
      <ul className="list-unstyled">
        {searchHistory.map((search) => (
          <li key={search}>
            <button onClick={handleSearchHistory}>{search}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastSerach;
