import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
`;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  width: 60%;
  padding: 7px 15px;
  border-radius: 7px;
  background: transparent;
  border-color: #cecece;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 7px 15px;
  border-radius: 7px;
  background-color: #2fc5bb;
  color: #ffffff;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #119e95;
  }
`;

export const Toast = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;
  padding: 1rem;
  background-color: #c98282;
  color: black;
  font-weight: bold;
  border-radius: 7px;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  &.show {
    transform: translateX(0);
  }
  &.hide {
    transform: translateX(100%);
  }
`;
