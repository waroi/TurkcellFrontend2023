/* eslint-disable react/prop-types */
import {
  containerRepos,
  h2,
  btn,
  btnDelete,
  ul,
} from "../../CustomStyle.module.css";

const LastSerach = ({ handleSearchHistory, setSearchHistory }) => {
  const handleAllDelete = () => {
    localStorage.removeItem("searchHistory");
    setSearchHistory([]);
  };

  // localStorage'dan searchHistory verisini al
  const storedSearchHistory = JSON.parse(localStorage.getItem("searchHistory"));

  // Son üç unique (benzersiz) aramayı elde etmek için aynı isimde olanları tekrar ekle
  const lastThreeSearch = [];
  const addedNames = new Set();
  for (
    let i = storedSearchHistory.length - 1;
    i >= 0 && lastThreeSearch.length < 3;
    i--
  ) {
    const current = storedSearchHistory[i];
    if (!addedNames.has(current) || i === storedSearchHistory.length - 1) {
      lastThreeSearch.unshift(current); // Başa ekle
      addedNames.add(current);
    }
  }

  return (
    <div className={`${containerRepos}`}>
      <h2 className={h2}>Son Arananlar</h2>
      <ul className={ul}>
        {lastThreeSearch.map((search, index) => (
          <li key={index}>
            <button className={btn} onClick={() => handleSearchHistory(search)}>
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
