import styled from "styled-components";
import { font } from "../Home/HomeStyle";

export const Navbar = styled.div`
  display: flex;
  padding: 1.75rem 0;

  background-color: #fceed5;

  @media (max-width: 992px) {
    justify-content: space-between;
  }
`;
export const DefaultNav = styled.div`
  display: flex;
  padding: 1.75rem 0;
  background-color: #fdfdfd;
  @media (max-width: 992px) {
    justify-content: space-between;
  }
`;
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-left: 1em;
  a {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    text-decoration: none;
    font-style: normal;
    color: #003459;
  }
`;
export const NavButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
`;
export const NavInput = styled.input`
  display: flex;
  width: 20rem;
  ${font({
    color: "#99a2a5",

    weight: "500",
    lineHeight: "1.25rem",
  })};

  padding: 0.75rem 1.5rem 0.75rem 2.6rem;
  align-items: center;
  border-radius: 46px;
  border: none;
  &:focus {
    outline: none;
  }
`;
export const NavBox = styled.div`
  width: 39.6875rem;
  height: 39.6875rem;
  transform: rotate(19.424deg);
  border-radius: 61px;
  position: absolute;
  background-color: #f7dba7;
  bottom: 3%;
  right: -7em;
  z-index: 1;
`;
