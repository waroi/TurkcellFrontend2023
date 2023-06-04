function LastSearchs({ searchs }) {
  return (
    <div className="lastSearchDiv">
      <h2>Son Aramalar</h2>
      <ul>
        {searchs.map((search) => {
          return (
            <li key={search.id}>
              <button>{search.name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LastSearchs;
