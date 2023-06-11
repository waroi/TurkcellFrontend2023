import styled from "styled-components";

// <tr>
//                 <th>Name</th>
//                 <th>Symbol</th>
//                 <th>Price</th>
//             </tr>

export const CoinItem = styled.tr`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background-color: #acaaaa;
    }
`;

export const CoinItemTh = styled.th`
border: 1px solid black;
    color:red
`;

// export const CoinItemName = styled.th`
//     font-size: 18px;
//     font-weight: 500;
//     margin: 0;
// `;

// export const CoinItemSymbol = styled.th`
//     font-size: 14px;
//     font-weight: 400;
//     color: #fff;
//     background-color: #bebebe;
//     padding: 5px 10px;
// `;

// export const CoinItemPrice = styled.span`
//     font-size: 16px;
//     font-weight: 400;
//     color: #fff;
//     padding: 5px 10px;
//     border-radius: 5px;
// `;