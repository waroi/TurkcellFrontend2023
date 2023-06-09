import styled from "styled-components";

export const IconList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  cursor: pointer;
`;
export const FooterTitle = styled.div`
  width: 75%;
  margin: 0 auto;
  border-radius: 5px;
  padding-top: 0.1em;
  background-color: #606c5d;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  h3 {
    font-weight: 700;
  }
`;
export const FooterList = styled.div`
  width: 75%;
  margin: 0 auto;
  border-radius: 5px;
  padding-top: 0.5em;
  background-color: #fff4f4;

  margin-top: 1.5em;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px;
`;
export const LinkTag = styled.div`
  border-radius: 5px;
  width: 160px;
  background-color: #f1c376;
  padding: 0.5em;
  color: white;
  &:hover {
    color: #f1c376;
    background-color: white;
  }
`;
