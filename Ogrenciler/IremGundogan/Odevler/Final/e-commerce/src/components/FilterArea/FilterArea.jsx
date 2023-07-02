import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FilterAreaStyle from "./FilterAreaStyle";

const FilterArea = ({ products, checkedCategories, setCheckedCategories }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category.toLowerCase())),
    ];
    setCategories(uniqueCategories);
  }, [products]);

  const toggleCategory = (category) => {
    setCheckedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      }
      return [...prev, category];
    });
  };

  return (
    <FilterAreaStyle>
      <h3>Filter</h3>
      <div className="checkboxes">
        {categories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              id={category}
              name={category}
              value={category}
              checked={checkedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
    </FilterAreaStyle>
  );
};

FilterArea.propTypes = {
  products: PropTypes.array.isRequired,
  checkedCategories: PropTypes.array.isRequired,
  setCheckedCategories: PropTypes.func.isRequired,
};

export default FilterArea;
