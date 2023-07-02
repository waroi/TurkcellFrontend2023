import styled from "styled-components";

const StyledProductCard = styled.div`
  padding: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: 0.5s all;
  margin-bottom: 1rem;
  border-radius: 12px;
  height: 100%;
  img {
    width: 100%;
    aspect-ratio: 1;
  }

  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
    @media (max-width: 992px) {
      font-size: 14px;
    }
  }

  .info {
    font-size: 12px;
    text-transform: capitalize;
    color: #667479;

    .star {
      width: 16px;
    }
  }

  .price {
    margin-top: 10px;
    h3 {
      font-size: 14px;
      font-weight: 700;
      @media (max-width: 992px) {
        font-size: 16px;
      }
    }
  }

  .promotionWrap {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #fceed5;
    padding: 5px;
    img {
      width: 20px;
    }
    .promotion {
      font-size: 14px;
      font-weight: 700;
      color: #003459;
    }
  }

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  }
`;

export default StyledProductCard;
