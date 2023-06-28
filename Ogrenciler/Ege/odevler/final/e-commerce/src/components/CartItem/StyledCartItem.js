import { styled } from "styled-components";

const StyledCartItem = styled.div`
  margin-top: 3rem;
  /* border: 2px solid #99a2a5;
  border-radius: 26px; */

  .info {
    img {
      max-width: 100px;
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
