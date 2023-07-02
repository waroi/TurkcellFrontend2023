import styled from "styled-components";

export const Logo = styled.img`
  width: 110px;
  height: 50px;
  @media (max-width: 992px) {
    margin-left: 100px;
  }
`;
export const Items = styled.div`
  color: #003459;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 750;
  line-height: 25px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  color: #667479;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 20px;
  border: none;
  width: 200px;
  margin-top: 15px;
  margin-left: 10px;
`;

export const Button = styled.button`
  padding: 5px 12px;
  width: 125px;
  margin-left: 10px;
  border-radius: 55px;
  background: #002a48;
  border: none;
  text-align: center;
  color: #fff;
`;
export const Container = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;
export const Toggle = styled.button`
  border: none;
  background-color: transparent;
`;
