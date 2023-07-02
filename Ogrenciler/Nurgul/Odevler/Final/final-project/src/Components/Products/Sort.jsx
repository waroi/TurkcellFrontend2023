import PropTypes from "prop-types";
import styled from "styled-components";

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SortArea = ({ setSortType }) => {
  const handleChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <SortContainer>
      <Select name="sortSelect" id="sortSelect" onChange={handleChange}>
        <option value="nameAz">A-Z</option>
        <option value="nameZa">Z-A</option>
        <option value="priceAsc">Price Asc</option>
        <option value="priceDesc">Price Desc</option>
      </Select>
    </SortContainer>
  );
};

SortArea.propTypes = {
  setSortType: PropTypes.func.isRequired,
};

export default SortArea;
