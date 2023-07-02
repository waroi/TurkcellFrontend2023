import styled from "styled-components";
import { font } from "../Home/HomeStyle";

export const CategoryPrimaryBox = styled.div`
  position: absolute;
  z-index: 1;
  width: 51.02506rem;
  height: 49.97rem;
  transform: rotate(160.219deg);
  border-radius: 99px;
  background-color: #002a48;
  top: -5em;
  left: -4em;
  @media (max-width: 992px) {
    transform: rotate(-175.16deg);
    top: 21em;
  }
`;
export const WomansImage = styled.div`
  img {
    position: relative;
    z-index: 2;
    left: 3em;
    top: 4em;
  }
  @media (max-width: 992px) {
    flex: 1;
    order: 2;
    margin-top: 3em;

    img {
      top: 0;
      left: -4em;
    }
  }
`;
export const ProductTitle = styled.div`
  ${font({
    color: "#003459",
    size: "1.5rem",
    weight: "700",
    lineHeight: " 2.25rem",
  })}
`;
export const ProductSubTitle = styled.div`
  ${font({
    color: "#00171F",
    size: "1rem",
    weight: "700",
    lineHeight: "1.5rem",
  })}
`;
export const SortButton = styled.button`
  display: inline-flex;
  padding: 0.375rem 0.625rem 0.25rem 1.25rem;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #ccd1d2;
  border-radius: 20px;
  background-color: white;
`;
export const ProductListPagination = styled.ul`
  li {
    .numberStyle {
      font-style: normal;
      ${font({
        color: "#002A48",
        size: "1.125rem",
        weight: "700",
        lineHeight: " 1.5rem",
      })}
    }
  }
`;
