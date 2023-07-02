import styled from "styled-components";
import { font } from "../Home/HomeStyle";

export const FooterWrap = styled.div`
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  a {
    ${font({
      color: "#00171F",
      size: "1rem;",
      weight: "500",
      lineHeight: "1.5rem;",
    })}
  }
  .footerBottom {
    display: flex;
    justify-content: space-between;

    .item-1 {
      flex: 1;
      order: 1;
    }
    .item-2 {
      flex: 1;
      order: 2;
    }
    .item-3 {
      flex: 1;
      order: 3;
    }
  }
  @media (max-width: 992px) {
    .footerBottom {
      flex-direction: column;
      gap: 1em;
      align-items: center;

      .item-2 {
        order: 0;
        margin-bottom: 2em;
      }
    }
  }
`;
export const FooterFormWrap = styled.div`
  padding: 2rem;

  border-radius: 16px;
  background: #003459;
`;
export const FormTitle = styled.div`
  color: #fdfdfd;
  text-transform: capitalize;
  ${font({
    color: "#002A48",
    size: "1.5rem;",
    weight: "700",
    lineHeight: "2.25rem",
  })}
`;
export const FormInputSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;

  justify-content: center;
  border-radius: 14px;
  background: #fff;
`;
export const FormButton = styled.button`
  color: #fdfdfd;
  border-radius: 8px;
  background: #003459;
  min-height: 3em;
  width: 200px;
`;
