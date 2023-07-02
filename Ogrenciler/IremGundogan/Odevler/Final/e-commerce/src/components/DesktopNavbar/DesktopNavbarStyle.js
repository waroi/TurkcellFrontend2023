import { styled } from "styled-components";

export const DesktopNavbarStyle = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0;

  .navbarLogo {
    width: 115px;
    height: 40px;
  }

  .navbarItem {
    a {
      font-weight: bold;
      color: #003459;
      line-height: 24px;
      text-decoration: none;
    }
  }
  .badge{
    position:absolute;
    top:0;
    border:1px solid red;
    padding:3px;
    background-color: red;
  }

  .searchArea {
    display: flex;
    width: 230px;
    padding: 12px 20px 12px 16px;
    align-items: center;
    gap: 12px;
    border-radius: 46px;
    background: #fff;
    input {
      color: #99a2a5;
      font-size: 14px;
      line-height: 20px;
      border: none;
      outline: none;
      width: 200px;
      background-color: transparent !important;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: #000 !important;
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export default DesktopNavbarStyle;
