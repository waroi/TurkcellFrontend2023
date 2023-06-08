/* eslint-disable react/prop-types */
import "./SearchInput.css";
const SearchInput = ({ city, setCity }) => {
  return (
    <div>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Şehir Ara"
      />
    </div>
  );
};

export default SearchInput;
