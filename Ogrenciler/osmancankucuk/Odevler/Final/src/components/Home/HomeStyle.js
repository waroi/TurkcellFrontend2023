import styled from "styled-components";
import addBanner from "../../img/addBanner.png";
import addBannerMobile from "../../img/addBannerMobile.png";

export const font = ({ color, size, weight, lineHeight }) => `
  color: ${color || "black"};
  font-size: ${size || "1rem"};
  font-weight:${weight || "400"};
  line-height:${lineHeight}

`;

export const HomeContainer = styled.div`
  min-height: 85vh;
`;
export const MainTitle = styled.h1`
  text-transform: capitalize;
  position: relative;
  z-index: 1;

  ${font({
    color: "#002A48",
    size: "3.75rem",
    weight: "900",
    lineHeight: "4.25rem",
  })};

  @media screen and (max-width: 700px) {
    margin-top: 1em;
    ${font({
      color: "#002A48",
      size: "2.875rem",
      weight: "900",
      lineHeight: "3.75rem;",
    })}
  }
`;
export const MainSubTitle = styled.h2`
  text-transform: capitalize;
  ${font({
    color: "#002A48",
    size: "3rem",
    weight: "700",
    lineHeight: "3.75rem",
  })};
  @media screen and (max-width: 992px) {
    ${font({
      color: "#002A48",
      size: "1.75rem",
      weight: "700",
      lineHeight: "2.375rem",
    })}
  }
`;
export const HomeBackground = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  border-radius: 0px 0px 40px 40px;
`;
export const MainContent = styled.div`
  ${font({
    color: "#242B33",
    size: "1rem",
    weight: "500",
    lineHeight: "1.5rem",
  })}
`;
export const OBox = styled.div`
  width: 4.19394rem;
  height: 4.19394rem;
  transform: rotate(25.23deg);
  border-radius: 20px;
  background-color: #f7dba7;
  position: absolute;
`;
export const HomeBottomBox = styled.div`
  position: absolute;
  width: 39.6875rem;
  height: 39.6875rem;
  background-color: #f7dba7;
  border-radius: 99px;
  opacity: 0.4000000059604645;
  transform: rotate(56.47deg);
  @media (max-width: 992px) {
    display: none;
  }
`;
export const RightBrownBox = styled.div`
  position: absolute;
  width: 39.6875rem;
  height: 39.6875rem;
  transform: rotate(25.23deg);
  border-radius: 99px;
  background-color: #f7dba7;
  bottom: -15em;
  left: 3.5em;
`;
export const RightPrimaryBox = styled.div`
  position: absolute;
  width: 39.6875rem;
  height: 39.6875rem;
  transform: rotate(9.355deg);
  border-radius: 99px;
  background-color: #003459;
  bottom: -17em;
`;
export const MainRightImage = styled.img``;
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  margin-right: 2em;
  img {
    position: relative;
    left: 30px;
    top: 12px;
    height: 20px;
  }
`;
export const WhatsNewTitle = styled.div`
  .whatsNew-1 {
    text-transform: capitalize;
    ${font({
      color: "black",
      size: "1rem",
      weight: "500",
      lineHeight: "1.5rem",
    })}
  }
  .whatsNew-2 {
    text-transform: capitalize;
    ${font({
      color: "#003459",
      size: "1.3rem",
      weight: "700",
      lineHeight: "2.25rem",
    })}
  }
`;

export const WhatsNewCard = styled.div`
  display: inline-flex;
  padding: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  min-height: 480px;

  border-radius: 12px;
  background-color: #fdfdfd;
  box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.07);
    box-shadow: 0px 8px 40px -4px rgba(0, 0, 0, 0.12);
  }
`;
export const CardImage = styled.img`
  height: 14em;
`;

export const CardContent = styled.div`
  display: flex;

  margin-top: 0.5em;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  .knowledgeBadge {
    background-color: #00a7e7;
    border-radius: 1.75rem;
    padding: 0.125rem 0.625rem;
    ${font({
      color: "#fdfdfd",
      size: "0.675rem",
      weight: "700",
      lineHeight: "1rem",
    })}
  }
  .knowledgeTitle {
    font-style: normal
      ${font({
        color: "#00171F",
        size: "1rem",
        weight: "700",
        lineHeight: "1.75rem",
      })};
  }
  .knowledgeContent {
    font-style: normal
      ${font({
        color: "#242B33",
        size: "0.875rem",
        weight: "400",
        lineHeight: "1.5rem",
      })};
  }
`;
export const CardTitle = styled.div`
  ${font({
    color: "#00171F",
    size: "1rem",
    weight: "700",
    lineHeight: "1.5rem",
  })}
`;
export const CardInfo = styled.span`
  ${font({
    color: "#667479",
    size: "0.9rem",
    weight: "900",
    lineHeight: "1.25rem",
  })}
`;
export const CardCap = styled.div`
  ${font({
    color: "#667479",
    size: "0.9rem",
    weight: "500",
    lineHeight: "1.25rem",
  })}
`;
export const CardPrice = styled.div`
  ${font({
    color: "#00171F",
    size: "1rem",
    weight: "700",
    lineHeight: "1.5rem",
  })}
`;
export const HomeAddContainer = styled.div`
  display: flex;
  border-radius: 20px;
  height: 23.625rem;
  background-image: url(${addBanner});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 1100px) {
    flex-direction: column;
    height: 100%;
    background-image: url(${addBannerMobile});
    background-position: center;
  }
`;
export const HomeAddDarkBox = styled.div`
  position: absolute;
  width: 49.22125rem;
  height: 49.22125rem;
  transform: rotate(28.251deg);
  border-radius: 99px;
  background-color: #002a48;
  top: 10em;
  left: -10em;
`;
export const HomeAddBrownBox = styled.div`
  position: absolute;
  width: 48.89325rem;
  height: 39.6875rem;
  transform: rotate(25.23deg);
  border-radius: 99px;
  background-color: #fceed5;
  right: -10em;
  top: -15em;
`;
export const HomeAddTitle = styled.div`
  text-transform: capitalize;

  ${font({
    color: "#003459",
    size: "3.5rem",
    weight: "800",
    lineHeight: "4.25rem",
  })};
  @media (max-width: 992px) {
    ${font({
      color: "#003459",
      size: "2.25rem",
      weight: "800",
      lineHeight: "3.375rem",
    })};
  }
`;
export const HomeAddSubTitle = styled.div`
  text-transform: capitalize;

  ${font({
    color: "#003459",
    size: "2.25rem",
    weight: "700",
    lineHeight: "3.375rem",
  })};
  @media (max-width: 992px) {
    ${font({
      color: "#003459",
      size: "1.5rem",
      weight: "700",
      lineHeight: " 2.25rem",
    })};
  }
`;
export const HomeAddContent = styled.div`
  text-transform: capitalize;
`;
export const HomeAddLeft = styled.div`
  position: relative;

  flex: 1;
  order: 1;

  .womanImage {
    display: flex;
    margin: 0 auto;
    width: 200px;
    @media (max-width: 1100px) {
      margin-top: 3em;
    }
  }

  img {
    position: relative;
    top: 3em;
    @media (max-width: 1100px) {
      top: 0;
      right: 4em;
    }
  }
  @media (max-width: 1100px) {
    order: 3;
    right: -3em;
  }
`;
export const HomeAddRight = styled.div`
  .addRightWrap {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 992px) {
      margin-top: 2em;
      order: 3;
    }
  }
  flex: 1;
  order: 2;
`;
export const AdoptionContainer = styled.div`
  width: 100%;
  min-height: 23.625rem;
  border-radius: 20px;
  overflow: hidden;
  background-image: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
`;
export const AdoptionBrownBox = styled.div`
  position: absolute;
  width: 48.89325rem;
  height: 39.6875rem;
  transform: rotate(-25.23deg);
  border-radius: 99px;
  background: #fceed5;
  top: -10em;
  left: -12em;
`;
export const AdoptionLightBox = styled.div`
  position: absolute;
  width: 49.22125rem;
  min-height: 49.22125rem;
  transform: rotate(-28.251deg);
  border-radius: 99px;
  opacity: 0.30000001192092896;
  background: linear-gradient(
    134deg,
    #fceed5 6.17%,
    #fceed5 75.14%,
    #ffe7ba 100%
  );
  top: 11em;
  right: -10em;
`;
export const DropdownMenu = styled.div`
  .dropdown-menu {
    min-width: 150px;
    width: 400px;
  }
  .cartButton {
    background-color: #fdfdfd;
    color: #003459;
    border: 2px solid #003459;
  }
`;
export const DropdownPp = styled.img`
  width: 2em;
  border-radius: 50%;
`;
export const BuyButton = styled.button`
  background-color: #003459;
  color: #fdfdfd;
  border: 1px solid #fdfdfd;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 800;
`;
export const IncDecButtons = styled.div`
  padding: 0 0.5em;
  display: flex;
  gap: 0.3em;
  button {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: none;
    background-color: #003459;
    color: #fdfdfd;
  }
`;
export const DiscountInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: red;

  width: 100%;
  padding: 0.375rem 0.625rem 0.25rem 0.625rem;
  border-radius: 0.5rem;
  background-color: #fceed5;
  .discountText {
    padding: 0.375rem 0.625rem 0.25rem 0.625rem;
    color: #003459;
    ${font({
      color: "#002A48",
      size: "0.875rem",
      weight: "700",
      lineHeight: " 1.25rem",
    })};
  }
`;
export const RightImageWrapper = styled.div`
  z-index: 1;
  bottom: -1em;
  left: 2em;
  .mainRightImage {
    @media (max-width: 500px) {
      position: relative;
      right: 3em;

      width: 40em;
    }
  }
`;
RightImageWrapper;
