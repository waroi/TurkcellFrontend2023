import styled from "styled-components";

const OurProductStyle = styled.div`
  h4 {
    color: #003459;
    font-size: 24px;
  }

  h5 {
    font-size: 16px;
    font-weight: 400;
  }
  .wrapper {
    gap: 20px 0;
  }
  img {
    border-radius: inherit;
    display: block;
    max-width: 264px;
    max-height: 264px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export default OurProductStyle;
