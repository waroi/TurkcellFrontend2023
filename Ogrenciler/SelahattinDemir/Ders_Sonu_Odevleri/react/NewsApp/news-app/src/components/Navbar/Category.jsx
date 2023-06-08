/* eslint-disable react/prop-types */

const Category = ({ country, setCountry }) => {
  console.log(country);
  return (
    <div>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="tr">TR</option>
        <option value="de">DE</option>
        <option value="fr">FR</option>
      </select>
    </div>
  );
};

export default Category;
