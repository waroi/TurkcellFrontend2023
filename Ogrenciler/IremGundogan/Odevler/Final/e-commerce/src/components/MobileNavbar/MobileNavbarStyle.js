import { styled } from "styled-components";

export const MobileNavbarStyle = styled.div`
  position: relative;
  z-index: 100;
  margin: 20px 0;
  .navbarItem {
    a {
      color: #003459;
      font-size: 18px;
      line-height: 24px;
      text-decoration: none;
    }
  }
  .links {
    margin-bottom: 20px;
    text-align: center;
  }
  .navbarLogo {
    width: 115px;
    height: 40px;
  }
  .menu {
    width: 98%;
    border-radius: 20px;
    margin: 8px;
    padding: 5px;
    background: #f3f3f3;
  }
  .dropdownButton {
    justify-content: center;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
  }
  .badge {
    position: absolute;
    top: 0;
    border: 1px solid red;
    padding: 3px;
    background-color: red;
  }

  .searchArea {
    input {
      color: #99a2a5;
      font-size: 14px;
      line-height: 20px;
      padding: 14px 28px;
      border: 1px solid #f0f0f0;
      border-radius: 20px;
      background-color: #f3f3f3;
      outline: none;
      width: 250px;
    }
    border-radius: 46px;
    background: #fff;
  }
  .icon {
    height: 50px;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
export default MobileNavbarStyle;
