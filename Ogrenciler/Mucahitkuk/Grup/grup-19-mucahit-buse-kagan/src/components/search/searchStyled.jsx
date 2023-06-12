import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

const SearchInput = styled.input`
  padding:.8rem;
  border: 1px solid #16add3;
  border-radius: 10px 0 0 10px;
  width:100%;

  &:focus {
    outline: none;
    border: 1px solid #12819c;
    box-shadow: 0 0 20px #0a4a5a;
  }
`;

const SearchButton = styled.button`
  padding: .8rem 1rem;
  background-color: #16add3;
  color: #fff;
  border: 1px solid #16add3;
  border-left: none;
  border-radius: 0 10px 10px 0;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #12819c;
    border: 1px solid #12819c;

    }
`;



    export {SearchContainer, SearchInput,SearchButton}
