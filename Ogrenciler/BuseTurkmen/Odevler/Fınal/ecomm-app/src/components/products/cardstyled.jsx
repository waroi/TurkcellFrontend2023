import styled from "styled-components";

export const CardImage = styled.img`
  width: 80%;
  height: 250px;
  margin: 30px;
`;

export const Card = styled.div`
  width: 25%;
  min-width: 275px;
  background: white;
  transition: all 300ms ease-in-out;
  height: max-context;
  // min-height: 310px;
  display: inline-flex;
  padding: 8px 8px 0px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
  border-radius: 12px;
  background: var(--neutral-color-00, #FDFDFD);
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
`;

export const CardTitle = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 18px;
  color: var(--neutral-color-100, #00171D);
  font-style: normal;
  font-weight: 650;
  line-height: 24px;
text-align:center;
`;

export const CardInfo = styled.p`
color: var(--neutral-color-60, #667479);
font-size: 16px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 700;
line-height: 18px;
text-align:center;
`;

export const CardRate = styled.p`
color: var(--neutral-color-60, #667479);
font-size: 14px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 700;
line-height: 18px;
text-align:center;
`;

export const CardPrice = styled.p`
color: var(--neutral-color-100, #00171F);
font-size: 17px;
font-family: SVN-Gilroy;
font-style: normal;
font-weight: 700;
line-height: 22px;
text-align:center;
`;

export const Button = styled.button`
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

export const Input = styled.input`
// font-size:20px;
display: flex;
flex-direction: flex-end;
`;
