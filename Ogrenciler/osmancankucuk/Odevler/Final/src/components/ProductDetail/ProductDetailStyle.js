import styled from "styled-components";
import { font } from "../Home/HomeStyle";

export const CaretWrap = styled.div`
  border-radius: 50%;
  display: flex;
  width: 2.625rem;
  height: 2.625rem;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
`;
export const MainTitleWrap = styled.div`
  .mainTitle {
    font-style: normal;
    ${font({
      color: "#00171F",
      size: "1.5rem;",
      weight: "700",
      lineHeight: " 2.25rems",
    })}
  }
  .mainPrice {
    ${font({
      color: "#002A48",
      size: "1.25rem;",
      weight: "700",
      lineHeight: "2rem",
    })}
  }
`;
export const SubTitlesWrap = styled.div`
  font-style: normal;
  ${font({
    color: "#667479",
    size: "0.9rem",
    weight: "300",
    lineHeight: "1.25rem",
  })}
`;
export const DetailCommercial = styled.div`
  ${font({
    color: "#002A48",
    size: "0.875rem",
    weight: "700",
    lineHeight: "1.25rem",
  })}
`;
export const EditButton = styled.button`
  background-color: #ff0000;
  border: none;
  border-radius: 3px;
  color: #fdfdfd;
`;
