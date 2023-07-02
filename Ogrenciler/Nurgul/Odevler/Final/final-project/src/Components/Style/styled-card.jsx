import styled from "styled-components";
//Card//
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardContainer = styled.div`
  width: 18rem !important;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 500px !important;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const CardTitle = styled.h4`
  margin-top: 10px;
  font-size: 18px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  font-size: 14px;
`;

export const Category = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const Rating = styled.span`
  margin-left: 5px;
  font-weight: bold;
`;

export const CardPrice = styled.div`
  margin-top: 10px;
`;
export const Box = styled.div`
  margin: 10px 10px;
`;
