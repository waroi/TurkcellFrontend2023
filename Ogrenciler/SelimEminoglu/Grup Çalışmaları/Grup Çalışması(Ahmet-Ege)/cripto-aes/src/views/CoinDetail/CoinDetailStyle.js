import styled from "styled-components";

export const CoinPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 100px 0;
  gap: 4rem;

  .coinInfo {
    display: flex;
    flex-direction: column;
    .coinBasics {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      img {
        width: 50px;
      }
    }

    .coin24HourData,
    .coinSupplyData,
    .highestLowest {
      span {
        display: flex;
        justify-content: space-between;
        p {
          font-size: 12px;
        }
      }
    }
  }

  .barChartWrapper {
    width: 100%;
  }
`;
