import styled from "styled-components";

export const CoinsContainer = styled.div`
  display: flex;
  width: 1400px;
  margin: 0 auto;
  justify-content: center;
  font-weight: 600;
  flex-direction: column;
`;

export const CustomTr = styled.tr`
  border-top: 0.5px solid rgb(50 53 70);
  > a {
    text-decoration: none;
    color: #fff;
  }
`;

export const CustomThead = styled.thead`
  justify-content: space-between;
  background-color: #1a1a1d;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const CustomTable = styled.table`
  background-color: transparent;
`;
export const StyledTd = styled.td`
   color: ${({ value }) => (value < 0 ? "#ea3943" : value > 0 ? "#16c784" : "gray")};
`;

export const CustomIcon = styled.img`
  border-radius: 50%;
`;
export const CoinsMain = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ReadMore = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #646b80;
  color: rgb(88, 102, 126);
  padding: 1rem 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  > span {
    margin-left: 5px;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CoinsSection = styled.section`
  background-color: rgb(34, 37, 49);
`;
export const CoinsSectionContainer = styled.div`
  display: flex;
  width: 1400px;
  margin: 0 auto;
  padding: 0.5rem 0;
`;

export const CustomSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  > h2 {
    margin: 96px 0 8px;
    font-size: 32px;
    font-weight: 500;
    > span {
      font-size: 32px;
      font-weight: 700;
    }
  }
  > p {
    margin-bottom: 48px;
    font-size: 18px;
    color: rgb(88, 102, 126);
    line-height: 24px;
    font-weight: 400;
  }
  > button {
    -webkit-box-align: center;
    align-items: center;
    background: rgb(56, 97, 251);
    border: 0px;
    border-radius: 8px;
    display: inline-flex;
    color: rgb(255, 255, 255);
    cursor: pointer;
    -webkit-box-pack: center;
    justify-content: center;
    outline: 0px;
    font-weight: 700;
    width: auto;
    height: 48px;
    font-size: 14px;
    padding: 0px 24px;
    line-height: 24px;
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
