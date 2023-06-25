import styled from "styled-components";

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
  `;

  // const HeaderBgDiv1 = styled.div``;
  // const HeaderBgDiv2 = styled.div``;
  const HeaderImg = styled.img`
    width: 100%;
    z-index: 2;
    position: relative;
    &:before {
      width: 528.983px;
      height: 528.983px;
      transform: rotate(5.367deg);
      flex-shrink: 0;
      border-radius: 48px;
      border: 1px solid #000;
      background: var(--primary-color-dark-blue, #003459);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      position: absolute;
      z-index: 0;
    }
    &:after {
      content: "";
      width: 528.983px;
      height: 528.983px;
      transform: rotate(25.23deg);
      flex-shrink: 0;
      border-radius: 48px;
      background: var(--secondary-color-mon-yellow, #f7dba7);
      position: absolute;
      z-index: 1;
    }
  `;

  return (
    <HeaderDiv className="bg-primary">
      <div className=" container">
        <h2>Lorem, ipsum dolor.</h2>
        <h5>Thousands more fun!</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
          obcaecati facilis dicta dolorem nostrum facere. Nisi quisquam
          repellendus ut sint quos dolorem rem necessitatibus atque libero
          vitae, nihil velit minus.
        </p>
        <div>
          <button>View Intro</button>
          <button>Explore Now</button>
        </div>
      </div>
      <div className="mx-auto">
        <HeaderImgDiv>
          <HeaderImg
            src="https://img.freepik.com/free-vector/abstract-geometric-pattern-background_23-2148530039.jpg?w=2000"
            alt=""
          />
        </HeaderImgDiv>
      </div>
    </HeaderDiv>
  );
};

export default Header;
