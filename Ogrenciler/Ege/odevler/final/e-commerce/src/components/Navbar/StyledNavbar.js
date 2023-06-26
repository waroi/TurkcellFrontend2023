import { styled } from "styled-components";

export const StyledNavbar = styled.div`
  .navbarItem {
    a {
      color: #003459;
      line-height: 24px;
      text-decoration: none;
    }
  }

  .navbarLogo {
    font-weight: 900;
  }

  .searchArea {
    input {
      color: #99a2a5;
      font-size: 14px;
      line-height: 20px;
      padding: 14px 28px;
      border: none;
      outline: none;
      width: 250px;
      background: none;
    }
    border-radius: 46px;
    background: #fff;
  }
`;

export const NavbarPC = styled.nav`
  @media (max-width: 992px) {
    display: none;
  }
`;
export const NavbarMobile = styled.nav`
  @media (min-width: 992px) {
    display: none;
  }
`;
