import styled from "styled-components";

const InformationCardStyle = styled.div`
  width: 380px;
  height: auto;
  background: #fff;
  box-shadow: 0 4px 28px -2px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 8px;
  transition: transform 0.3s;
  .InnerImage {
    border-radius: inherit;
    overflow: hidden;
    height: 240px;
    width: 364px;
  }
  .InnerText {
    padding: 8px;
    display: flex;
    flex-direction: column;
    .tag {
      margin-bottom: 10px;
      display: flex;
      gap: 10px;
      span {
        font-size: 10px;
        color: #fdfdfd;
        font-weight: 700;
        padding: 2px 10px;
        background: #00a7e7;
        border-radius: 28px;
      }
    }
    .paragraph {
      margin-bottom: 6px;
      font-size: 16px;
      color: #00171f;
    }
  }
  &:hover {
    transform: translateY(5px);
    cursor: pointer;
  }
`;
export default InformationCardStyle;
