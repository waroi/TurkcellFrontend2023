import styled from "styled-components";

const CartItemStyle = styled.form`
  width: auto;
  height: 95%;
  background: #fdfdfd;
  border-radius: 12px;
  padding: 8px;
  text-decoration: none;
  box-shadow: 0 4px 28px -2px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
  margin: 3%;
  cursor: pointer;

  .info {
    .CartImg {
      width: 25%;
      img {
        width: 100%;
        aspect-ratio: 1;
      }
    }
  }

  .increment,
  .decrement {
    border: none;
    margin: 0 10px;
  }

  .amount {
    border: 2px solid #a3a3a3;
    padding: 5px 10px;
    border-radius: 20px;
  }

  input {
    border: none;
    width: 30px;
    text-align: center;
  }

  .price {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }
  
  @media (max-width: 992px) {
    h5,
    h4 {
      font-size: 10px !important;
    }
    .CartImg {
      width: 50% !important;
      margin: 0 auto;
    }
    .info {
      display: block !important;
    }
  }
`;

export default CartItemStyle;
