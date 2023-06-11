import styled from "styled-components";

const FooterComponent = styled.footer`
  padding: 2rem 0;
  background: ${(props) => props.theme == 'light' ? 'rgba(255, 250, 255, 0.3)' : '#000000'};

  .poweredBy {
    font-size: 32px;
    text-align: center;
  }
  a {
    color: ${(props) => props.theme == 'light' ? '#000000' : '#FFFFFF'};
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
