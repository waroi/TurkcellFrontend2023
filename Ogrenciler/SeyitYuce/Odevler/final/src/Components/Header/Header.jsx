import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";
import Buttons from "../Buttons/Buttons";
import { BsPlayCircle } from "react-icons/bs";

const Header = () => {
  const HeaderDiv = styled.div`
    background: linear-gradient(
      134deg,
      #fceed5 6.17%,
      #fceed5 75.14%,
      #ffe7ba 100%
    );
    overflow: hidden;
    box-sizing: border-box;
  `;
  const HeaderImgDiv = styled.div`
    width: 250px;
    margin: auto;
    margin-top: 20px;
  `;
  const HeaderImg = styled.img`
    width: 100%;
    z-index: 2;
    }
  `;
  const HeaderTitle = styled.h2`
    color: var(--primary-color-dark-blue-80, #002a48);
    font-size: 46px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 800;
    line-height: 60px;
    text-transform: capitalize;
  `;

  const HeaderSubtitle = styled.h5`
    color: var(--primary-color-dark-blue-80, #002a48);
    font-size: 28px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    text-transform: capitalize;
    &::after {
      display: inline-block;
      content: "";
      width: 12.437px;
      height: 12.437px;
      transform: rotate(-30.589deg);
      flex-shrink: 0;
      border-radius: 4px;
      background: #002a48;
      margin-left: 11px;
    }
  `;

  return (
    <HeaderDiv className="bg-primary headerCon">
      <div className=" container">
        <HeaderTitle>Lorem, ipsum dolor.</HeaderTitle>
        <HeaderSubtitle>Thousands more fun!</HeaderSubtitle>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
          obcaecati facilis dicta dolorem nostrum facere. Nisi quisquam
          repellendus ut sint quos dolorem rem necessitatibus atque libero
          vitae, nihil velit minus.
        </p>
        <div className="mx-auto text-center">
          <Buttons
            variation="textIconRight btnLarge btn6"
            icon={<BsPlayCircle />}
          >
            View Intro
          </Buttons>
          <Buttons variation="textOnly btnLarge btn1">Explore Now</Buttons>
        </div>
      </div>
      <div className="mx-auto">
        <HeaderImgDiv>
          <HeaderImg src="https://picsum.photos/50/70" alt="" />
        </HeaderImgDiv>
      </div>
    </HeaderDiv>
  );
};

export default Header;
