import styled from "styled-components";

export const Rank = styled.div`
text-align: center;
background-color: ${({ theme }) => theme === "light" ? 'rgb(31,41,55)' : 'rgb(75,85,99)'};
width: 80px;
border-radius: 8px;
color: rgba(243,244,246);
padding: 3px;
font-size: 14px;
`
export const Top = styled.div`
display: flex;
gap: 20px;
align-items: center;

`
export const Bottom = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

export const SpanItem = styled.span`
color:  ${({ price }) => price > 0 ? "#8dc647" : "#e15241"};
display: flex;
align-items: center;
justify-content: center;
font-weight: bolder;
margin: 0;
font-size: 40px;
`
export const DetailWrapper = styled.div`
padding: 100px 0;
`

export const Table = styled.table`
text-align: left;
margin-top: 70px;
color: rgb(107,114,128);
`
export const Image = styled.img`
width: 50px;
height: 50px;
`

export const Paragraph = styled.p`
font-weight: bolder;
font-size: 25px;
color: ${({ theme }) => theme === "light" ? 'rgb(31,41,55)' : '#fff'};
`
export const Span = styled.span`
color: rgb(107,114,128);
font-weight: normal;
font-size: 15px; 
`
export const Header2 = styled.h2`
    margin: 0 0 0 50px;
    color: ${({ theme }) => theme === "light" ? 'rgb(31,41,55)' : '#fff'};
`
