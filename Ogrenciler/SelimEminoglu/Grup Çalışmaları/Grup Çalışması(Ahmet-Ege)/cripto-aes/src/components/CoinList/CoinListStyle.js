import styled from "styled-components";

export const CoinListTable = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  padding: 25px 0 50px 0;
  table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    th {
      padding: 2rem;
      background-color: #353839;
      color: #fff;
    }
  }
`;

export const TableRow = styled.tr`
  cursor: pointer;
  font-size: 15px;
  td {
    padding: 25px;
  }
  &:nth-child(2n-1) {
    background-color: #f5f5f5;
  }
  &:nth-child(2n) {
    background-color: #e5e4e2;
  }
  img {
    width: 25px;
  }
  .nameArea {
    display: flex;
    align-items: center;
    /* margin-left: 50px; */
    gap: 1.25rem;
  }
  .symbol {
    font-size: 12px;
    font-style: italic;
    font-weight: 700;
  }
`;
