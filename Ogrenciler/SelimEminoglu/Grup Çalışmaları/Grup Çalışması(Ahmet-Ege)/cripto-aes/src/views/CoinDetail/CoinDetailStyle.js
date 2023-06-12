import styled from "styled-components";

export const CoinPage = styled.div`
  padding: 100px 0;

  .coinInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .coinBasics {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      img {
        width: 50px;
      }
    }

    .coinPrice {
      margin: 10px 0;
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

  .coinDetails {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    margin-bottom: 3rem;
  }
`;
