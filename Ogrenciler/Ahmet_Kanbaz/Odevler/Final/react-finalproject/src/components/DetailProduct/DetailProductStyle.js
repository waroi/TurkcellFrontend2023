import styled from "styled-components";

export const DetailProductContainer = styled.div`
  margin: 6rem auto;
  .detailContainerWrapper {
    border-radius: 20px;
    border: 1px solid #ebeeef;
    background: #fdfdfd;
    .quarantee {
      border-radius: 10px;
      background: linear-gradient(
        134deg,
        #fceed5 6.17%,
        #fceed5 75.14%,
        #ffe7ba 100%
      );
      padding: 0.5625rem 0.75rem;
      span {
        font-size: 0.875rem;
      }
      @media screen and (max-width: 768px) {
        gap: 1rem;
        span {
          font-size: 0.75rem;
        }
      }
    }
    .table {
      td {
        color: #667479;
        font-size: 0.875rem;
        font-weight: 500;
        padding: .5rem 0.6875rem;
        &:nth-child(1) {
          width: 32%;
        }
      }
    }
  }
`;
