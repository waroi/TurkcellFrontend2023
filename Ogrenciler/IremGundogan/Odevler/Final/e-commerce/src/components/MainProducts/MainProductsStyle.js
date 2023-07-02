import styled from "styled-components";

const StyleMainProducts = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
  .productsHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  .wrapper {
    gap: 20px 0;
  }
  @media (max-width: 992px) {
    .button {
      display: none;
    }
  }
  .btn {
    margin: 0 auto;
    @media (min-width: 992px) {
      display: none;
    }
  }
`;

export default StyleMainProducts;
