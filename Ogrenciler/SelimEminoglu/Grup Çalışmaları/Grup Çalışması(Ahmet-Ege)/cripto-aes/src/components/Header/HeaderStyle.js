import styled from "styled-components";

export const HeaderComponent = styled.header`
  padding: 25px 0;
  background: rgba(255, 250, 255, 0.3);

  a {
    color: #343434;
    /* text-shadow: #474747 3px 0px 2px; */
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-size: 2.25rem;
    }
    .menu {
      display: flex;
      font-size: 2rem;
      align-items: center;
      gap: 2rem;
    }
  }
`;
