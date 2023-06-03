/* eslint-disable react/prop-types */
import style from "../UserContainer/CustomStyle.module.css";

const LastSerach = ({ searchHistory, handleSearchHistory }) => {
  const handleDelete = () => {
    // Arama geçmişini temizleme işlemi yapılcak
  };

  console.log("searchHistory", searchHistory);
  return (
    <div className={`${style.containerRepos} ${searchHistory.length > 4 ? style.overflow : ''}`}>
      <h2 className={style.h2}>Son Arananlar</h2>
      <ul className="list-unstyled">
        {searchHistory.map((search) => (
          <li key={search}>
            <button className={style.btn} onClick={handleSearchHistory}>{search}</button>
          </li>
        ))}
      </ul>
      <button className={style.btnDelete} onClick={handleDelete}>Arama Geçmişini Temizle</button>
    </div>
  );
};

export default LastSerach;
