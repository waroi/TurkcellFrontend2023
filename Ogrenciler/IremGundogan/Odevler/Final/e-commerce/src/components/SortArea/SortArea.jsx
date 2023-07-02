import PropTypes from "prop-types";
import SortAreaStyle from "./SortAreaStyle";

const sortOptions = [
  { value: "priceAsc", label: "Price Low - High" },
  { value: "priceDesc", label: "Price High - Low" },
  { value: "nameAsc", label: "Name A-Z" },
  { value: "nameDesc", label: "Name Z-A" },
  { value: "categoryAsc", label: "Category A-Z" },
  { value: "categoryDesc", label: "Category Z-A" },
];

const Option = ({ value, label }) => {
  return <option value={value}>{label}</option>;
};

Option.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const SortArea = ({ setSortType }) => {
  const irem = function (e) {
    setSortType(e.target.value);
  };

  return (
    <SortAreaStyle>
      <div className="sort d-flex">
        <h5 className="m-0">Sort By:</h5>
        <select onChange={irem} name="sortSelect" className="border-0">
          {sortOptions.map((option, index) => {
            return (
              <Option key={index} value={option.value} label={option.label} />
            );
          })}
        </select>
      </div>
    </SortAreaStyle>
  );
};

SortArea.propTypes = {
  setSortType: PropTypes.func.isRequired,
};

export default SortArea;
