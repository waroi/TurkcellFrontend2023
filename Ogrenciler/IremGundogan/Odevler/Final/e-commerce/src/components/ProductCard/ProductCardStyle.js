import styled from "styled-components";

const ProductCardStyle = styled.div`
  height: 95%;
  display: inline-flex;
  flex-direction: column;
  background: #fdfdfd;
  border-radius: 12px;
  padding: 8px;
  text-decoration: none;
  box-shadow: 0 4px 28px -2px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
  margin-bottom: 3%;
  &:hover {
    transform: translateY(5px);
    cursor: pointer;
  }
  img {
    width:100%;
    aspect-ratio:1;
  }

  .ProductText {
    margin-top: 8px;
    padding: 8px;
    margin-bottom: 12px;
    display: flex;
    flex: 1 1;
    flex-direction: column;
    h3 {
      font-size: 14px;
      color: #00171f !important;
      margin-bottom: 5px;
      font-weight: 700;
    }
    .info {
      margin-bottom: 4px;
      color: #667479;
      font-size: 12px;
      font-weight: 500;
      display: inline-flex;
      gap: 26px;
      position: relative;
      padding: 0;
      justify-content: space-between;

      li {
        list-style: none;
        padding: 0;
      }
      .dot {
        position: absolute;
        left: 60%;
      }
    }
    .title {
      font-weight: 700;
      color: #002a48;
    }
    .OurWrap {
      display: inline-flex;
      width: 100%;
      align-items: center;
      gap: 10px;
      margin-top: 10px;
      background: #fceed5;
      border-radius: 8px;
      padding: 10px;
      img {
        width: 18px;
        height: 20px;
        border-radius: inherit;
        display: block;
        max-width: 264px;
        max-height: 264px;
      }
      span {
        font-weight: 700;
        color: #002a48;
      }
    }
  }
`;

export default ProductCardStyle;
