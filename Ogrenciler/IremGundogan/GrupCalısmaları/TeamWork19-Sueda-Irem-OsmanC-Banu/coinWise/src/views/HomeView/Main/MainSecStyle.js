import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
`;
export const ExploreButton = styled.button`
  width: 147px;
  height: 50px;
  background-color: #c389f7;
  border-radius: 13px;
  border: none;
  color: white;
  padding: 10px;
  &:hover {
    background-color: white;
    color: #c389f7;
    border: 2px solid #c389f7;
  }
`;
export const MainTitle = styled.h1`
  font-size: 120px;
  line-height: 120px;
  font-weight: 600;
`;
export const BackgroundWrap = styled.img`
  background-repeat: no-repeat;
  z-index: -1;
  width: 100%;
  position: absolute;
  bottom: 70px;
`;
