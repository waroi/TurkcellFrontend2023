import Proptypes from "prop-types";
import { CustomSelect } from "./FilterStyle";

function SortFilter({ handleSortChange }) {
  return (
    <div>
      <CustomSelect name="sort" id="sort" onChange={handleSortChange}>
        <option value="default">Sort by:</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </CustomSelect>
    </div>
  );
}

SortFilter.propTypes = {
  handleSortChange: Proptypes.func.isRequired,
};

export default SortFilter;
