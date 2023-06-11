import styled from "styled-components";

const FooterComponent = styled.footer`
  padding: 2rem 0;
  background: rgba(255, 250, 255, 0.3);
  .poweredBy {
    font-size: 32px;
    text-align: center;
  }
  a {
    color: black;
  }
  h3 {
    text-align: center;
    margin-top: 2rem;
  }
  .cards {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  }
`;

export default FooterComponent;
