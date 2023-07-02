import styled from "styled-components";

const ProductListStyle = styled.div`
  .sortAreaContainer {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
  }

  .filter {
    color: #002a48;
    font-size: 16px;
    font-weight: 700;
    height: 25px;
    width: 25px;
    justify-content: end;
  }
  .filters {
    order: 2;
  }
  @media (max-width: 992px) {
    .filters {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .filter {
      font-size: 16px;
      margin-left: 50px;
    }
    .sort {
      font-size: 14px;
    }
  }
  .titleWrap {
    color: #667479;
    font-size: 14px;
    order: 1;
  }
  .subtitle {
    color: #003459;
    font-size: 24px;
    font-weight: 700;
    margin-right: 10px;
  }
`;

export default ProductListStyle;
