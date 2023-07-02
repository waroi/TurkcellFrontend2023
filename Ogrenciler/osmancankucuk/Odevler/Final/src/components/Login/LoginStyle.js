import styled from "styled-components";
import { font } from "../Home/HomeStyle";

export const SignInChoose = styled.div`
  border: none;
  padding-bottom: 0.5em;
  border-radius: 5px;
  background-color: #003459;
  color: #fdfdfd;
  .signChoose {
    border: none;
    background-color: #fdfdfd;
  }
  .signChoose {
    padding: 0.5em;
    cursor: pointer;
    border-radius: 5px;
  }
  .signTitle {
    ${font({
      color: "#00171F",
      size: "1.5rem;",
      weight: "700",
      lineHeight: " 2.25rems",
    })}
  }
  .marks {
    @media screen and (max-width: 992px) {
      margin-bottom: 1em;
    }
  }
`;
export const LoginWrapper = styled.div`
  border-radius: 0rem 0rem 2.5rem 2.5rem;
  height: 85vh;
  position: relative;
  overflow: hidden;

  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  .loginForm {
    position: relative;
    z-index: 3;
  }
`;
export const DarkBrownBox = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 10em;
  left: -3em;

  width: 39.6875rem;
  height: 39.6875rem;
  transform: rotate(25.23deg);
  border-radius: 6.1875rem;
  background: var(--secondary-color-mon-yellow, #f7dba7);
`;
export const RoyalBlueBox = styled.div`
  position: absolute;
  z-index: 2;
  width: 49.22125rem;
  height: 49.22125rem;
  right: 0em;
  top: 16em;
  transform: rotate(25.23deg);
  flex-shrink: 0;

  border-radius: 6.1875rem;
  background: var(--primary-color-dark-blue-80, #002a48);
`;
