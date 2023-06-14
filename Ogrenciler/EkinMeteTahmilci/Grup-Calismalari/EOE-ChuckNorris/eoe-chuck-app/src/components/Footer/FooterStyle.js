import styled from "styled-components";

export const FooterComponent = styled.footer`
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
`;

export const FooterTop = styled.h2`
  text-align: center;
  font-size: 5rem;
  @media screen and (max-width: 992px) {
    font-size: 2rem;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    max-width: 100px;
    filter: drop-shadow(0px 0px 10px #ffcc00);
  }
`;
