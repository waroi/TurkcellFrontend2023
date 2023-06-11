import styled from "styled-components";

export const HeaderComponent = styled.header`
  padding: 25px 0;
  background: rgba(255, 250, 255, 0.3);

  a {
    color: ${(props) => (props.theme == "light" ? "#000" : "#fff")};
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-size: 1.7rem;
    }
    .menu {
      display: flex;
      font-size: 1.2rem;
      align-items: center;
      gap: 2rem;
    }
  }

  .themeSwapButton {
    border: none;
    background: transparent;
  }

  .themeIconSun {
    color: #fff;
  }
`;
