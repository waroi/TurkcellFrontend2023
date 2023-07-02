import styled from "styled-components";

export const SingleCard = styled.div`
  img {
    height: 16.5rem;
    @media screen and (max-width: 768px) {
      height: 10.5625rem;
    }
  }
  span,
  .category {
    color: #667479;
    font-size: 0.75rem;
  }
`;

export const ProductTitle = styled.p`
  color: #00171f;
  font-weight: 700;
  line-height: 1.5rem;
  font-size: 1rem;
`;

export const ProductPrice = styled(ProductTitle)`
  font-size: 0.875rem;
`;
