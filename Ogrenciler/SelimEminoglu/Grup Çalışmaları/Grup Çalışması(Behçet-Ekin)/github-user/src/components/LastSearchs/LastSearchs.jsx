import LastStyle from "./LastSearchs.module.css";

function LastSearchs({ searchs, clearAllSearch, getUserInfo }) {
  function scrollToTop() {
    window.scrollTo({
      top: 90,
      behavior: "smooth",
    });
  }

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
        {searchs.length == 0 && (
          <p className={LastStyle.noDataTitle}>Henüz Veri Yok...</p>
        )}
        {searchs != null &&
          searchs.map((search) => {
            return (
              <li key={search.id}>
                <button
                  className={LastStyle.buttonLi}
                  onClick={() => {
                    getUserInfo(search.name);
                    scrollToTop();
                  }}
                >
                  <img
                    src={search.img}
                    alt="images"
                    className={LastStyle.pictureSearch}
                  />
                  {search.name}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default LastSearchs;
