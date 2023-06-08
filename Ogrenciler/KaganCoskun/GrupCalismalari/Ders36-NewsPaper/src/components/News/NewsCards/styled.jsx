import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 325px;
  min-width: 275px;
  background: white;
  transition: all 300ms ease-in-out;
  border-radius: 5px;
  min-height: 310px;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 175px;
  border-radius: 5px 5px 0 0;
`;

export const CardUpperInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  padding: 1rem;
`;

export const CardCategory = styled.h4`
  position: relative;
  text-transform: uppercase;
`;

export const CardTime = styled.p`
  color: gray;
`;

export const CardTitle = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: black;
  line-height: 1.5em;
`;
