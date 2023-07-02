import styled from "styled-components";

const ProductDetailStyle = styled.div`
  img {
    width: 100%;
    aspect-ratio: 1;
  }
  .out-of-stock {
    height: 40px;
    width: 95%;
    background-color: #ff0000a1;
    color: black;
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    position:absolute;
    top:50%;
  }
  .guarantee {
    margin: 20px 0;
    width: 100%;
    height: 48px;
  }
  .share {
    display: flex;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    align-items: center;
  }
  .socials {
    margin-bottom: 17px;
  }
  .socials img {
    cursor: pointer;
  }
  .frame {
    border: 1px solid #ebeeef;
    border-radius: 20px;
  }
  @media (max-width: 992px) {
    .guarantee {
      width: 382px;
      height: 96px;
      margin-right: auto;
    }
    .information {
      box-shadow: 0px -6px 6px 0px rgba(0, 0, 0, 0.06);
      border-radius: 20px;
    }
  }
`;

export default ProductDetailStyle;
