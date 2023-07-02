import styled from "styled-components";

export const ProductTitle = styled.h1`
color: var(--primary-color-dark-blue, #003459);
font-size: 30px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 800;
line-height: 24px;
border-bottom: 1px solid #003459;
padding:8px;
`;

export const DetailSection = styled.div`
margin:auto;
display:flex;
flex-direction:column;
gap:10px;
`;

export const ProductPrice = styled.p`
color: var(--neutral-color-100, #00171F);
font-size: 24px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 700;
line-height: 22px;
`;

export const ProductRate = styled.p`
color: var(--neutral-color-60, #667479);
font-size: 16px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 700;
line-height: 18px;
border-bottom: 1px dashed #003459;
padding:5px;
`;

export const ProductStock = styled.p`
color: var(--neutral-color-60, #667479);
font-size: 16px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 700;
line-height: 18px;
border-bottom: 1px dashed #003459;
padding:5px;
`;

export const ProductCate = styled.p`
color: var(--neutral-color-60, #667479);
font-size: 18px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 700;
line-height: 18px;
border-bottom: 1px dashed #003459;
padding:5px;
`;

export const ProductDesc = styled.p`
color: var(--neutral-color-60, #667479);
font-size: 18px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 700;
line-height: 18px;
border-bottom: 1px dashed #003459;
padding:5px;
`;

export const ButtonDetail = styled.button`
// display: flex;
margin:3px;
text-align:center;
height: 44px;
padding: 10px 15px 15px 15px;
justify-content: center;
align-items: center;
gap: 15px;
border-radius: 57px;
background: var(--primary-color-dark-blue, #003459);
color: white;
text-decoration: none;
border: none;
`;