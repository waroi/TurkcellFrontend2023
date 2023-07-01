import Proptypes from "prop-types";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import { FilterContainer, CategoryTitle } from "./FilterStyle";

function Filter({ data, onCategoryFilterChange, selectedCategories }) {
  const uniqueCategoriesList = new Set(data.map((item) => item.category));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <FilterContainer className="d-none d-lg-block">
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
      <div className="dropdown d-block d-lg-none">
        <button
          className="border-0 dropdown-toggle"
          type="button"
          id="categoryDropdown"
          data-bs-toggle="dropdown"
          aria-expanded={dropdownOpen ? "true" : "false"}
          onClick={handleDropdownToggle}
        >
          <i className="bi bi-funnel fs-4"></i>
        </button>
        <ul
          className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
          aria-labelledby="categoryDropdown"
        >
          {Array.from(uniqueCategoriesList).map((item) => (
            <li key={item}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="categoriesandauthors"
                  checked={selectedCategories.includes(item)}
                  onChange={() => onCategoryFilterChange(item)}
                />
                <label className="form-check-label">{item}</label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

Filter.propTypes = {
  data: Proptypes.arrayOf(Proptypes.object).isRequired,
  onCategoryFilterChange: Proptypes.func.isRequired,
  selectedCategories: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default Filter;
