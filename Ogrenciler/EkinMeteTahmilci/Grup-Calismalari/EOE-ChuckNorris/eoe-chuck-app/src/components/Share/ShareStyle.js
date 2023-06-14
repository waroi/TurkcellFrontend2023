import styled from "styled-components";

export const ShareArea = styled.div`
  text-align: center;
  p {
    font-size: 1.25rem;
  }
`;

export const Socials = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
  margin-top: 3rem;

  li {
    transition: 0.3s all;
    &:hover {
      transform: scale(1.5) rotate(360deg);
    }
    i {
      font-size: 3rem;
      cursor: pointer;

      &.bi-twitter {
        color: #1d9bf0;
      }

      &.bi-facebook {
        color: #4867aa;
      }

      &.bi-instagram {
        color: #a207ed;
      }
    }
  }
`;
