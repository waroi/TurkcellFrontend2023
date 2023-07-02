import Products from "../Components/Products/Products";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import { styled } from "styled-components";
import Buttons from "../Components/Buttons/Buttons";
import { BiChevronRightCircle } from "react-icons/bi";

const HomeView = () => {
  const StyledHeaderTitle = styled.h5`
    color: var(--primary-color-dark-blue, #003459);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    text-transform: capitalize;
  `;

  const StyledNewsTitle = styled.h5`
    color: var(--neutral-color-100, #00171f);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  `;
  const StyledNewsContent = styled.p`
    overflow: hidden;
    color: var(--neutral-color-80, #242b33);
    text-overflow: ellipsis;
    whitespace: nowrap;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    align-self: stretch;
  `;
  const StyledNewsTitle1 = styled.p`
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 5px;
  `;
  return (
    <div className="">
      <Header />
      <div className="container homeContent">
        <div>
          <h6>Whats new?</h6>
          <StyledHeaderTitle>
            Take a look at some of our products
          </StyledHeaderTitle>
          <Products slicedNumber={8} />
          <Buttons
            variation="textIconRight btnLarge btn6"
            icon={<BiChevronRightCircle />}
            className="ViewAllBtn w-100"
          >
            <Link className="text-decoration-none" to={"/products"}>
              View More
            </Link>
          </Buttons>
        </div>
        <div>
          <StyledNewsTitle1>You already know ?</StyledNewsTitle1>
          <StyledHeaderTitle>Useful Lorem, ipsum.</StyledHeaderTitle>
          <div className="d-flex flex-column flex-md-row container col-12">
            <div className="row card mb-4 me-md-4 border-radius-5">
              <img
                src="https://picsum.photos/100/50"
                alt=""
                className="rounded-5 mb-2 mt-2"
              />
              <Buttons variation="textOnly btnMed btn2 knowledgeBtn ms-2 py-1 px-1 ">
                Item Knowledge
              </Buttons>
              <StyledNewsTitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </StyledNewsTitle>
              <StyledNewsContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores beatae minima sint sapiente suscipit iste dolorum facere
                commodi. Illum, ut.
              </StyledNewsContent>
            </div>
            <div className="row card mb-4 me-md-4 border-radius-5">
              <img
                src="https://picsum.photos/100/50"
                alt=""
                className="rounded-5 mb-2 mt-2"
              />
              <Buttons variation="textOnly btnMed btn2 knowledgeBtn ms-2 py-1 px-1 ">
                Item Knowledge
              </Buttons>
              <StyledNewsTitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </StyledNewsTitle>
              <StyledNewsContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores beatae minima sint sapiente suscipit iste dolorum facere
                commodi. Illum, ut.
              </StyledNewsContent>
            </div>
            <div className="row card mb-4 me-md-4 border-radius-5">
              <img
                src="https://picsum.photos/100/50"
                alt=""
                className="rounded-5 mb-2 mt-2"
              />
              <Buttons variation="textOnly btnMed btn2 knowledgeBtn ms-2 py-1 px-1 ">
                Item Knowledge
              </Buttons>
              <StyledNewsTitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </StyledNewsTitle>
              <StyledNewsContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores beatae minima sint sapiente suscipit iste dolorum facere
                commodi. Illum, ut.
              </StyledNewsContent>
            </div>
          </div>
          <Buttons
            variation="textIconRight btnLarge btn6"
            icon={<BiChevronRightCircle />}
            className="ViewAllBtn w-100 bg-white"
          >
            <Link className="text-decoration-none" to={"/products"}>
              View More
            </Link>
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
