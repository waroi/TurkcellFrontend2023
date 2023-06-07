import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  font-weight: bold;
  `;

export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 10px;
  color: #f1f1f1;
  font-size:18px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: rgb(27,0,36);
background: linear-gradient(56deg, rgba(27,0,36,0.13489145658263302) 0%, rgba(167,167,238,1) 100%, rgba(0,212,255,1) 100%); 
  &::placeholder {
    color: #fefefe;
  }
  `;

export const SearchButton = styled.button`
  width: 3rem;
  border-radius: 20px;
  border: 1px solid #ccc;
  padding: 5px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-items: center;
  justify-content: center;
  `;




