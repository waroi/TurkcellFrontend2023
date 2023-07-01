import styled from "styled-components";

const StyledProductInfo = styled.div`
  .productId {
    color: #99a2a5;
    font-size: 14px;
  }

  .productTitle {
    font-size: 24px;
    color: #00171f;
    font-weight: 700;
  }

  .productPrice {
    font-size: 20px;
    font-weight: 700;
    color: #002a48;
  }
  .infoWrap {
    border-bottom: 1px solid;

    &:last-child {
      border-bottom: none;
    }

    .infoBox {
      font-size: 14px;
      color: #667479;
      text-transform: capitalize;
      .star {
        width: 14px;
        height: 14px;
      }
    }
  }
`;

export default StyledProductInfo;
