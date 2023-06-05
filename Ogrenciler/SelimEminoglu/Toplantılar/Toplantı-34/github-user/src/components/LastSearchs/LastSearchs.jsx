import LastStyle from "./LastSearchs.module.css";

function LastSearchs({ searchs, clearAllSearch, picture }) {
  return (
    <div className={LastStyle.lastDiv}>
      <div className={`${LastStyle.buttonRow} row  justify-content-around`}>
        <div className={`${LastStyle.buttonCol} col-4 p-0`}>
          <h2 className={LastStyle.h2}>Son Aramalar</h2>
        </div>
        <div
          className={`${LastStyle.buttonCol} col-8 p-0 d-flex justify-content-end`}
        >
          <button
            className={LastStyle.clearButton}
            onClick={() => clearAllSearch()}
          >
            Tüm Arama Geçmişini Temizle
          </button>
        </div>
      </div>
      <ul className={LastStyle.ul}>
        {searchs != null &&
          searchs.map((search) => {
            return (
              <li key={search.id}>
                <button className={LastStyle.buttonLi}>{search.name}</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default LastSearchs;
