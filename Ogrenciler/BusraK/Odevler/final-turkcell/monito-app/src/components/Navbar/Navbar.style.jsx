import styled from "styled-components";
export const Nav = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "svngilroy-bold", sans-serif;
  font-weight: 700;
  color: #003459;
  font-size: 1rem;
  line-height: 1.5rem;
  max-height: 6.25rem;
  padding: 1.458vw 13.771vw;
  position: relative;
  top: 0;
  z-index: 100;

  .buttons {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    cursor: pointer;
    flex-direction: row;
    width: 10%;

    @media (max-width: 1440px) {
      display: flex;
      flex-wrap: wrap;
      margin-top: 8rem;
    }

    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      margin-left: 4rem !important;
      margin-top: 2rem;
    }
  }

  .container-fluid {
    position: relative;
    left: 1.5rem;
  }

  @media (max-width: 992px) {
    display: flex;
    width: 22.875rem;
    height: 3.5625rem;
    padding: 1rem 0.875rem 0rem 0.625rem;
    justify-content: space-between;
    align-items: center;
    top: 0;

    .container-fluid {
      display: flex;
      justify-content: space-around;

      left: 0;

      .collapse {
        background-color: #ffe7ba;
        width: -webkit-fill-available;
        border-radius: 0.5rem;
        top: 5%;
        left: 10%;

        position: absolute;
      }
    }

    .navbar-bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      background-color: #fff;
    }

    .navbar-brand {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      margin: 0 auto;

      .navbar-image {
        width: 5.75rem;
        height: 2rem;
        flex-shrink: 0;
      }
    }
  }
`;

export const MobileInput = styled.input`
  display: none;
  background-color: rgba(0, 0, 0, 0);
  border: none;

  @media (max-width: 992px) {
    display: flex;
    top: 1rem;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
    z-index: 10;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  border: none;

  @media (max-width: 992px) {
    display: flex;
    width: 5rem;
    height: 2.5rem;
    border: none;
    position: absolute;
    margin-top: 1rem;
    top: 0;
    left: 0;
    position: absolute;
    align-items: center;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const SearchInput = styled.input`
  display: flex;
  width: 17.5rem;
  padding: 0.75rem 1.25rem 0.75rem 1rem;
  align-items: center;
  gap: 0.75rem;
  border-radius: 46px;
  color: #99a2a5;
  font-size: 0.875rem;
  font-family: "svngilroy-light", sans-serif;
  font-weight: 500;
  line-height: 1.25rem;
  background: #fdfdfd;

  @media (max-width: 992px) {
    height: 2.5rem;
    padding: 0.5rem;
  }
`;
