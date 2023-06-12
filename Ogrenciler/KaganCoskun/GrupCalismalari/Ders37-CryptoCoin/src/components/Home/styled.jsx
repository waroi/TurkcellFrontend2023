import styled from "styled-components";

const TableRow = styled.tr`
display: table-row;
  background-color: ${(props) => props.theme === "dark" ? "#333" : "#f8fafd"};
  padding: 0 .5rem 0;
  transition: all 0.1s ease-in-out;
`;
const TableCell = styled.td`
  padding: 1rem 0.5rem;
  border-bottom: 1px solid #dddddd6c;
  text-align: start;
  transition: all 0.1s ease-in-out;

`;

const CoinTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    img{
        width: 30px;
    }
    `;

const CoinSymbol= styled.span`
    background-color: ${(props) => props.theme === "dark" ? "#6c757d" : "#e9ecef"};
    color: ${(props) => props.theme === "dark" ? "#e9ecef" : "#6c757d"};
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    border-radius: 5px;
    `;

const PriceChange= styled.span`
    color: ${(props)=>props.price >= 0 ?"#2bec04":"red"};
    font-weight: 500;
    `;

export { TableCell,TableRow,CoinTitle,CoinSymbol,PriceChange };