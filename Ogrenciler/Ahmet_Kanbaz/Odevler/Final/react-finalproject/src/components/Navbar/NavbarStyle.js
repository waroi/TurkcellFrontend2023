import styled from "styled-components";

export const Nav = styled.nav`
  background: ${(props) =>
    props.navbackgroundcolor === "true"
      ? "linear-gradient(134deg,#fceed5 6.17%,#fceed5 75.14%,#ffe7ba 100%)"
      : "transparent"};
  transition: background-color 0.3s ease-in-out;
  img {
    width: 7.1875rem;
    height: 2.5rem;
  }
  .nav-item {
    font-weight: bold;
    line-height: 1.5rem;
    color: #003459;
  }

  .displayInput {
    width: 60vw;
    top: 40px;
  }

  input::placeholder {
    color: #99a2a5;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .searchNavbar {
    width: 100%;
    @media screen and (max-width: 1200px) {
      width: 80%;
    }
  }

  @media screen and (max-width: 768px) {
    #navbarSupportedContent {
      background: linear-gradient(
        134deg,
        #fceed5 6.17%,
        #fceed5 75.14%,
        #ffe7ba 100%
      );
    }
  }
  .cartCount {
    font-size: 0.8rem;
    font-style: italic;
    margin-top: 0.3rem;
  }
`;
