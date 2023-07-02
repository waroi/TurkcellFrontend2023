import styled from "styled-components";
import { Link } from "react-router-dom";

export const SeacrhResultWrap = styled.div`
  position: absolute;
  top: 86px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 300px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  @media screen and (max-width: 768px) {
    top: 56px;
    left: 20px;
    transform: translateX(0);
  }
`;

export const SearchResultItem = styled(Link)`
  width: 100%;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ccc;
  }
`;

export const Title = styled.h6`
  font-size: 14px;
  font-family: SVN-Gilroy;
  font-weight: 700;
  line-height: 24px;
  color: #00171f;
`;
