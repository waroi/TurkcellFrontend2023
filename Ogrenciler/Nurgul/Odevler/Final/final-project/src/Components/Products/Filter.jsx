import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 5px;

  input[type="checkbox"] {
    margin-right: 5px;
  }

  label {
    font-size: 16px;
  }
`;

const Filter = ({ products, checkedCategories, setCheckedCategories }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(
      Array.from(
        new Set(products.map((product) => product.category.toLowerCase()))
      )
    );
  }, [products]);

  const handleChange = (e) => {
    if (e.target.checked)
      setCheckedCategories([...checkedCategories, e.target.value]);
    else
      setCheckedCategories(
        [...checkedCategories].filter((cat) => cat !== e.target.value)
      );
  };

  return (
    <FilterContainer>
      <Title>Filter</Title>
      <Checkboxes>
        {categories.map((category) => (
          <CheckboxWrapper key={category}>
            <input
              type="checkbox"
              id={category}
              name={category}
              value={category}
              onChange={handleChange}
            />
            <label htmlFor={category}>{category}</label>
          </CheckboxWrapper>
        ))}
      </Checkboxes>
    </FilterContainer>
  );
};

Filter.propTypes = {
  products: PropTypes.array.isRequired,
  checkedCategories: PropTypes.array.isRequired,
  setCheckedCategories: PropTypes.func.isRequired,
};

export default Filter;
