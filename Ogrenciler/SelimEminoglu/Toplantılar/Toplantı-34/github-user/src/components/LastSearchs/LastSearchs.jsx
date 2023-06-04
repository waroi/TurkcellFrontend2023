import LastStyle from "./LastSearchs.module.css";

function LastSearchs({ searchs }) {
  return (
    <div className={LastStyle.lastDiv}>
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
