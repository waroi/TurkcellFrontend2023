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
  position: relative;
  display: flex;
  right: 10px;
  padding: 12px 10px 12px 36px;
  width: 200px;
  gap: 12px;
  border-radius: 46px;
  background: #fdfdfd;
`;

export const HeaderButton = styled.button`
  padding: 4px 10px;
  width: 150px;
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
  @media (min-width: 993px) {
    display: none;
  }
`;

export const HeaderMobileArea = styled.div`
  position: absolute;
  z-index: 1;
  border: 1px solid #003459;
  border-radius: 7px;
  background: #ffffff;
  padding: 10px;
  width: 90%;
  margin: auto;
`;

export const HeaderMobileAreaInput = styled.div`
  position: absolute;
  z-index: 1;
  border: 1px solid #003459;
  border-radius: 7px;
  background: #ffffff;
  padding: 10px;
  margin-left: 10px;
`;

export const HeaderSpan = styled.span`
  background: #ffffff;
  border-radius: 50%;
  padding: 5px;
  color: #003459;
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 16px;
  margin-left: 5px;
  padding-bottom: 2px;
`;

export const HeaderDropdown = styled.div`
  position: absolute;
  top: 60px;
  width: 150px;
  background: #003459;
  color: #ffffff;
  border-radius: 57px;
  padding: 4px 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  text-align: center;
  cursor: pointer;
  @media (max-width: 992px) {
    top: 158px;
    left: 180px;
  }
`;

export const HeaderSearch = styled.i`
  position: absolute;
  z-index: 1;
`;
