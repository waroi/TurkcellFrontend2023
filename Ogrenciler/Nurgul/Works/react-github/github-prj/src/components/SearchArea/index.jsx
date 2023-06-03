/* eslint-disable react/prop-types */
import style from "../UserContainer/CustomStyle.module.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchArea = ({handleSearch, searchQuery, setSearchQuery}) => {
  
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
