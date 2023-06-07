/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledSearch = ({ searchRef }) => {
  const Input = styled.input`
    padding: 0.5rem;
    border-radius: 9px;
    border: 2px solid #b0b0b6;
    outline: none;
  `;

  return (
    <Input
      type="search"
      ref={searchRef}
      name="search"
      id="search"
      placeholder="Şehir ara..."
    />
  );
};

export default StyledSearch;
