import {
  AdoptionContainer,
  WhatsNewTitle,
  AdoptionBrownBox,
  AdoptionLightBox,
  HomeAddSubTitle,
  HomeAddContent,
} from "./HomeStyle";
import { HomeAddTitle } from "./HomeStyle";
import Button from "../Button/Button";
import chevronRight from "../../img/chevron-right.png";
import felix from "../../img/felix.png";
import bakers from "../../img/bakers.png";
import brothers from "../../img/brothers.png";
import goodboy from "../../img/goodboy.png";
import pedigree from "../../img/pedigree.png";
import whiskas from "../../img/whiskas.png";
import sheba from "../../img/sheba.png";
import Vector from "../../img/Vector.svg";
import playCircle from "../../img/playCircle.png";
import doghand from "../../img/pngegg.png";

const HomePetSellers = () => {
  return (
    <div className="my-5 ">
      <div className="container d-none d-md-block">
        <div className="d-flex justify-content-between align-items-center">
          <WhatsNewTitle>
            <div className="whatsNew-1">
              Hard to choose right products for you?
            </div>
            <div className="whatsNew-2">Our Products</div>
          </WhatsNewTitle>
          <Button
            title="View all our sellers"
            logo={chevronRight}
            border="1.6px solid #003459"
            background={"transparent"}
            color={"#003459"}
          />
        </div>
        <div className="row gap-5 align-items-center justify-content-center mt-2">
          <div className="col-4 col-lg-1">
            <img src={sheba} alt="" />
          </div>
          <div className="col-4 col-lg-1">
            <img src={whiskas} alt="" />
          </div>
          <div className="col-4 col-lg-1">
            <img src={bakers} alt="" />
          </div>
          <div className="col-4 col-lg-1">
            <img src={felix} alt="" />
          </div>
          <div className="col-4 col-lg-1">
            <img src={goodboy} alt="" />
          </div>
          <div className="col-4 col-lg-1">
            <img src={brothers} alt="" />
          </div>
          <div className="col-4 col-lg-1">
            <img src={pedigree} alt="" />
          </div>
          <div className="col-4 col-lg-1">
            <img src={whiskas} alt="" />
          </div>
        </div>
        <AdoptionContainer style={{ background: "#ffb775" }} className="mt-5">
          <div className="row">
            <div className="col-md-6 position-relative ">
              <AdoptionBrownBox />

              <div
                style={{ zIndex: "1" }}
                className="position-relative ms-5 mt-5 d-flex flex-column gap-3"
              >
                <HomeAddTitle className="d-flex align-items-center ">
                  Adoption <img className="ms-3" src={Vector} alt="" />
                </HomeAddTitle>
                <HomeAddSubTitle>We Need To Help. So Do They.</HomeAddSubTitle>
                <HomeAddContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem, quae.
                </HomeAddContent>
                <div className="d-flex gap-3 my-4">
                  <Button
                    color={"#003459"}
                    logo={playCircle}
                    border={"1px solid #003459"}
                    title={"View Intro"}
                    background={"transparent"}
                  />
                  <Button
                    color={"#fdfdfd"}
                    background={"#003459"}
                    title={"Explore Now"}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative">
              <AdoptionLightBox />
              <div className="position-relative">
                <img src={doghand} alt="" />
              </div>
            </div>
          </div>
        </AdoptionContainer>
      </div>
    </div>
  );
};

export default HomePetSellers;
