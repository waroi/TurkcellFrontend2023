import styled from "styled-components";

export const ListImg = styled.img`
  width: 3rem;
`;

export const ListUl = styled.ul`
  list-style: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  flex-wrap: wrap;

`;
export const ListLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #f1f1f1;
  border-radius: 1rem;
  padding: 1rem;
  width: 5rem;
  color: #252525;
  font-weight: 700;  
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.2) 0px 15px 35px -15px, rgba(0, 0, 0, 0.3) 0px 5px 15px -10px;
  transition: transform 0.5s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const WeeklyTemp = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
   `;


