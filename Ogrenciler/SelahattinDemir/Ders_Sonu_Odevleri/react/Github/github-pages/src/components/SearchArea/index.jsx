/* eslint-disable react/prop-types */
import style from "../../CustomStyle.module.css";

const SearchArea = ({ handleSearch, searchQuery, setSearchQuery }) => {
  return (
    <div>
      <h1>GitHub Kullanıcılarını Arayın</h1>
      <p>GitHub kullanıcılarını arayın ve ayrıntılarını görüntüleyin</p>

      <form>
        <input
          className={style.input}
          type="text"
          value={searchQuery}
          placeholder="Kullanıcı adı girin"
          required
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={style.inputBtn} type="submit" onClick={handleSearch}>
          Ara
        </button>
      </form>
    </div>
  );
};

export default SearchArea;
