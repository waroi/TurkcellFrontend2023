import styled from "styled-components";

export const Box = styled.div`
  border-radius: 5px;
  margin: 12px 0;
  cursor: pointer;
  height: 520px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 300px;
  aspect-ratio: 1.5/1;
`;

export const Author = styled.div`
  padding: 8px;
  font-size: 1.2em;
  color: gray;
  margin-top: 20px;
`;

export const InfoTitle = styled.div`
  padding: 8px;
`;
