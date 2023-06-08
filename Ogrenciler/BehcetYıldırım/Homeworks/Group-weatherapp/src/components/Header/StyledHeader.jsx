/* eslint-disable react/prop-types */
import { useRef } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import StyledSearch from "./StyledSearch";

const StyledHeader = ({ setCity }) => {
  const searchRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(searchRef.current.value);
    searchRef.current.value = "";
  };
  const Form = styled.form`
    display: flex;
    gap: 1rem;
    margin-top: 1em;
    border: 1px solid black;
    padding: 1em;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    @media screen and (max-width: 300px) {
      padding: 0.5em;
    }
  `;
  return (
    <Form onSubmit={handleSubmit}>
      <StyledSearch searchRef={searchRef} />
      <StyledButton />
    </Form>
  );
};

export default StyledHeader;
