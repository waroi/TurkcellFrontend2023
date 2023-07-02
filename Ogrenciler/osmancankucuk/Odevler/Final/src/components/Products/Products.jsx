import {
  HomeAddTitle,
  HomeAddSubTitle,
  HomeAddContent,
  AdoptionContainer,
} from "../Home/HomeStyle";
import Button from "../Button/Button";

import { CategoryPrimaryBox, WomansImage } from "./ProductsStyle";
import PlayWhite from "../../img/Play_Circle_White.png";
import Play from "../../img/PlayCircle.png";

import { useMediaQuery } from "react-responsive";
import ProductLists from "./ProductLists";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import womansCartoon from "../../img/womansCartoon.png";

const Products = () => {
  const breadcrumbLinks = [
    { text: "Home", url: "/" },
    { text: "All Products", url: "/products" },
  ];
  const isSmallScreen = useMediaQuery({ maxWidth: 992 });
  return (
    <div className="container ">
      <Breadcrumb links={breadcrumbLinks} />
      <AdoptionContainer>
        <div style={{ display: "flex" }} className="row ">
          <WomansImage className="col-md-6 position-relative   ">
            <img width={"550px"} src={womansCartoon} alt="" />
          </WomansImage>
          <div className="col-md-6  mt-5 position-relative">
            <CategoryPrimaryBox />
            <div
              style={{ zIndex: "2" }}
              className="d-flex flex-column align-items-center justify-content-center h-100 position-relative"
            >
              <HomeAddTitle
                style={{ color: isSmallScreen ? "#003459" : "#fdfdfd" }}
              >
                One more shirt
              </HomeAddTitle>
              <HomeAddSubTitle
                style={{ color: isSmallScreen ? "#003459" : "#fdfdfd" }}
              >
                Thousands More Fun!
              </HomeAddSubTitle>
              <HomeAddContent
                style={{ color: isSmallScreen ? "#003459" : "#fdfdfd" }}
                className="ps-5 py-3 d-flex justify-content-end"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                enim quia nemo omnis nam impedit quisquam aliquid rerum
                cupiditate Lorem, ipsum.!
              </HomeAddContent>
              <div className="d-flex justify-content-end gap-3 mt-3">
                {isSmallScreen ? (
                  <>
                    <Button
                      color={"#003459"}
                      logo={Play}
                      border={"2px solid #003459"}
                      title={"View Intro"}
                      background={"transparent"}
                    />
                    <Button
                      color={"#fdfdfd"}
                      background={"#003459"}
                      title={"Explore Now"}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      className="small-size"
                      color={"#fdfdfd"}
                      logo={PlayWhite}
                      border={"1px solid white"}
                      title={"View Intro"}
                      background={"#003459"}
                    />
                    <Button
                      color={"#003459"}
                      background={"#fdfdfd"}
                      title={"Explore Now"}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </AdoptionContainer>
      <div className="mt-4">
        <ProductLists />
      </div>
    </div>
  );
};

export default Products;
