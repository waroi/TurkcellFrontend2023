import styled from "styled-components";

export const HeaderItem = styled.div`
  color: #003459;
  font-size: 16px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
`;

export const HeaderLogo = styled.img`
  width: 115px;
  height: 40px;
`;

export const HeaderInput = styled.input`
  color: #99a2a5;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 500;
  line-height: 20px;
  border: none;
  width: 200px;
  margin-left: 10px;
`;

export const HeaderButton = styled.button`
  padding: 4px 10px;
  width: 115px;
  border-radius: 57px;
  background: #003459;
  border: none;
  text-align: center;
  color: #ffffff;
`;

export const HeaderComputer = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const HeaderMobile = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;
