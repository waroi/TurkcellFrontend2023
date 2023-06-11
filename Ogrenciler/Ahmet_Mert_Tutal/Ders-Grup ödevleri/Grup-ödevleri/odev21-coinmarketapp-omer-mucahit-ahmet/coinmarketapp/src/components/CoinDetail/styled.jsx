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
  width: 45%;
  margin-right: 3rem;
  > div {
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
  }
`;

export const CoinCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const CustomPrice = styled.div``;
