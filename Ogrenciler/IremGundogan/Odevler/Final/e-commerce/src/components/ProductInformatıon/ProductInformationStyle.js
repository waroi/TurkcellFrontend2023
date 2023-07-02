import styled from "styled-components";

const ProductInformationStyle = styled.div`
  .infoWrap {
    border-bottom: 1px solid #ebeeef;

    &:last-child {
      border-bottom: none;
    }

    .infoBox {
      font-size: 14px;
      color: #667479;
    }
  }
  @media (max-width:992px) {
    h2{
      font-size: 20px;
    }
    h3{
      font-size: 16px;
    }
    button{
      font-size:12px;
    }
  }
`;

export default ProductInformationStyle;
