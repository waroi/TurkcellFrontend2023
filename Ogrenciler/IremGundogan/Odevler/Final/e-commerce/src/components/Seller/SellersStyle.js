import styled from "styled-components";

const SellerStyle = styled.div`
  width: 100%;
  padding: 60px 0;
  @media (max-width: 992px) {
    display: none;
  }
  .sellers {
    display: flex;
    align-items: center;
    height: 112px;
    gap: 20px;

    .seller {
      flex: 1 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      img{
        width: 70% !important;
      }
    }
  }
  .title {
    font-size: 16px;
    font-weight: 500;
    line-height: 31px;
    color: #000;
    display: flex;
    .MinTitle {
      font-size: 24px;
      font-weight: 700;
      color: #003459;
      line-height: 36px;
    }
  }
`;

export default SellerStyle;
