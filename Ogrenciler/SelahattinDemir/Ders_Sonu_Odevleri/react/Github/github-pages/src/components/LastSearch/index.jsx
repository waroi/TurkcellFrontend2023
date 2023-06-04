/* eslint-disable react/prop-types */
import {
  containerRepos,
  h2,
  btn,
  btnDelete,
  ul,
} from "../../CustomStyle.module.css";

const LastSerach = ({
  searchHistory,
  handleSearchHistory,
  setSearchHistory,
}) => {
  const handleAllDelete = () => {
    localStorage.removeItem("searchHistory");
    setSearchHistory([]);
  };

  const uniqueSearchHistory = [...new Set(searchHistory)];

  const lastThreeSearch = uniqueSearchHistory.slice(
    uniqueSearchHistory.length - 3
  );

  return (
    <div className={`${containerRepos}`}>
      <h2 className={h2}>Son Arananlar</h2>
      <ul className={ul}>
        {lastThreeSearch.map((search) => (
          <li key={search}>
            <button className={btn} onClick={handleSearchHistory}>
              {search}
            </button>
          </li>
        ))}
      </ul>
      <button className={btnDelete} onClick={handleAllDelete}>
        Arama Geçmişini Temizle
      </button>
    </div>
  );
};

export default LastSerach;
