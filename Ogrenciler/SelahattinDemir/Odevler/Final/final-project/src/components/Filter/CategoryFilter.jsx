import Proptypes from "prop-types";
import { Label } from "./FilterStyle";

function CategoryFilter({
  checkbox,
  onCategoryFilterChange,
  selectedCategories,
}) {
  const handleCategoryFilterChange = () => {
    onCategoryFilterChange(checkbox);
  };
  return (
    <div>
      <Label className="d-flex gap-2">
        <input
          type="checkbox"
          name="categoriesandauthors"
          checked={selectedCategories.includes(checkbox)}
          onChange={handleCategoryFilterChange}
        />
        {checkbox}
      </Label>
    </div>
  );
}

CategoryFilter.propTypes = {
  checkbox: Proptypes.string.isRequired,
  onCategoryFilterChange: Proptypes.func.isRequired,
  selectedCategories: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default CategoryFilter;
