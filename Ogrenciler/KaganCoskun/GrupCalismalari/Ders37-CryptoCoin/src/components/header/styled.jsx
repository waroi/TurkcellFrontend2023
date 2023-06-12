import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: none;
  font-size: 16px;
  width: 50%;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme === "light" ? "white" : "#242124"};
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f1f1f1")};
`;

export const HeaderWrapper = styled.div`
  display: flex;

  background-color: ${({ theme }) => (theme === "light" ? "#f1f1f1" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f1f1f1")};
  transition: 0.3s ease-in-out;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const SelectItem = styled.select`
  padding: 5px 20px;
  color: ${({ theme }) => (theme === "light" ? "#333" : "#f1f1f1")};
  border: none;
  background-color: ${(props) =>
    props.theme === "light" ? "white" : "#242124"};
  transition: 0.3s ease-in-out;
  border-radius: 5px;
`;

export const OptionItem = styled.option`
  padding-bottom: 10px;
`;
export const Icon = styled.i`
  color: ${({ theme }) => (theme === "light" ? "#f1f1f1" : "#333")}
  cursor: pointer;
  margin-left: 20px;
  width: 30px;
`;
