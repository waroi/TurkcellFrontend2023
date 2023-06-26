import Proptypes from "prop-types";
import CategoryFilter from "./CategoryFilter";
import { FilterContainer, CategoryTitle } from "./FilterStyle";

function Filter({ data, onCategoryFilterChange, selectedCategories }) {
  const uniqueCategoriesList = new Set(data.map((item) => item.category));

  return (
    <FilterContainer>
      <CategoryTitle>Categories</CategoryTitle>
      {Array.from(uniqueCategoriesList).map((item) => (
        <CategoryFilter
          key={item}
          checkbox={item}
          onCategoryFilterChange={onCategoryFilterChange}
          selectedCategories={selectedCategories}
        />
      ))}
    </FilterContainer>
  );
}

Filter.propTypes = {
  data: Proptypes.arrayOf(Proptypes.object).isRequired,
  onCategoryFilterChange: Proptypes.func.isRequired,
  selectedCategories: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default Filter;
