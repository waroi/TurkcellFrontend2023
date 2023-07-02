import { styled } from "styled-components";

const StyledCartItem = styled.div`
  margin-top: 3rem;
  .info {
    .cartItemText {
      height: 100px;
    }
    img {
      width: 100px;
      height: 100px;
    }
    .cartItemText {
      .title {
        font-size: 24px;
      }
      .price {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
  .delete {
    align-self: center;
  }

  @media (max-width: 992px) {
    input {
      padding: 0;
    }
  }
`;

export default StyledCartItem;
