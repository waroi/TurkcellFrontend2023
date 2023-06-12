import styled from "styled-components";

export const CoinDetailContainer = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  flex-direction: row;
  margin: 0 auto;
`;

export const CustomCoins = styled.div`
  padding: 1em 0;
  color: rgb(88, 102, 126);
`;
export const CustomBreadCrumb = styled.div`
  display: flex;
  margin-bottom: 1rem;
  gap: 10px;
  > span {
    color: white;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    > a {
      text-decoration: none;
      color: rgb(88, 102, 126);
      &::after {
        content: ">";
        margin: 0 2px;
      }
    }
  }
`;

export const CoinCardContainer = styled.div`
  width: 35%;
  margin-right: 3rem;
  > p {
    margin-bottom: 0;
  }
`;

export const CoinCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const CurrentCoinDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  flex-direction: row;
  flex-wrap: wrap;
  > img {
    max-width: 32px;
  }

  > h3 {
    font-size: 32px;
    font-weight: 700;
  }
  > span {
    background-color: #323546;
    color: rgb(88, 102, 126);
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    display: flex;
    margin-top: 0.5rem;
  }
  > a {
    align-items: center;
    background: transparent;
    border: 1px solid rgb(50, 53, 70);
    border-radius: 8px;
    display: inline-flex;
    color: rgb(255, 255, 255);
    cursor: pointer;
    height: 32px;
    font-size: 18px;
    padding: 0px 12px;
  }
  > button {
    background: rgb(56, 97, 251);
    border: 0px;
    border-radius: 8px;
    display: inline-flex;
    color: rgb(255, 255, 255);
    cursor: pointer;
    outline: 0px;
    font-weight: 800;
    font-size: 12px;
    padding: 8px 18px;
    &:hover {
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.08),
          rgba(255, 255, 255, 0.08)
        ),
        rgb(56, 97, 251);
      color: rgb(255, 255, 255);
      text-decoration: none;
    }
  }
`;
export const CustomPrice = styled.div``;
export const CustomRank = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 0.5rem;
  > span {
    background-color: #323546;
    color: rgb(88, 102, 126);
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    display: flex;
    margin-top: 0.5rem;
  }
`;
export const CurrentCoinLLink = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  > span {
    background-color: #323546;
    color: white;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    display: flex;
    align-items: center;
    gap: 5px;
    > a {
      color: white;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;
export const CurrentCoinPos = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  > span {
    background-color: #323546;
    color: rgb(88, 102, 126);
    border-radius: 12px;
    padding: 2px 6px;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  > button {
    color: #6188ff;
    cursor: pointer;
    font-size: 11px;
    border: 1px solid #7284a4;
    border-radius: 12px;
    font-weight: 500;
    line-height: 18px;
    background-color: rgba(56, 97, 251, 0.1);
    &:hover {
      background-color: rgba(56, 97, 251, 0.2);
    }
  }
`;
export const CustomPriceTop = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CustomCoinValue = styled.div`
  > div {
    display: flex;
    color: white;
    text-align: center;
    gap: 10px;
    > span {
      margin: auto 0;
    }
  }
  > h4 {
    color: white;
  }
`;
export const PriceButton = styled.div`
  display: flex;
  gap: 10px;
  align-items: start;
  justify-content: center;
  margin-left: 6rem;
  > button {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0.08)
    );
    border: 0px;
    border-radius: 8px;
    display: inline-flex;
    color: rgb(255, 255, 255);
    cursor: pointer;
    outline: 0px;
    font-weight: 800;
    font-size: 12px;
    padding: 8px 18px;
    &:hover {
      background: rgb(56, 97, 251);
      color: rgb(255, 255, 255);
      text-decoration: none;
    }
  }
`;
export const CustomPriceBottom = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
`;
