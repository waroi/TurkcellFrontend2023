import React from "react";
import StButton from "../Button/Button";

import {
  H1,
  H2,
  PetLeft,
  OurProductsWrapper,
  Row,
  Title,
} from "./PetSellersStyle";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PetSellers = () => {
  const isLoggedIn = useSelector((state) => state.root.isLogin);
  const navigate = useNavigate();
  const username = useSelector((state) => state.root.user);
  const handleProducts = () => {
    if (isLoggedIn) {
      navigate(`/home/${username}/products`);
    } else {
      navigate("/signup");
    }
  };

  return (
    <OurProductsWrapper className="mt-5 ">
      <div className="d-flex justify-content-around text-start mt-2 title pt-4">
        <div className="d-flex gap-5 align-items-center d-none d-md-block ">
          <div className="d-flex gap-4 align-items-end ">
            <H2>Proud to be part of</H2>
            <H1>Pet Sellers</H1>
          </div>
        </div>
        <div className="d-none d-md-block">
          <StButton
            text="View all our sellers"
            type="no-color-icon"
            image={"../../src/assets/Icon/Chevron_Right_MD.png"}
          />
        </div>
      </div>
      <PetLeft className="container d-none d-md-flex flex-wrap justify-content-around mt-5 p-5 flex-wrap d-flex ">
        <img src="../../src/assets/PetSellers/sheba.png" alt="" />
        <img src="../../src/assets/PetSellers/whiskas.png" alt="" />
        <img src="../../src/assets/PetSellers/bakers.png" alt="" />
        <img src="../../src/assets/PetSellers/felix.png" alt="" />
        <img src="../../src/assets/PetSellers/goodboy.png" alt="" />
        <img src="../../src/assets/PetSellers/butchers.png" alt="" />
        <img src="../../src/assets/PetSellers/pedigree.png" alt="" />
      </PetLeft>

      <Row className="adoption row d-none d-md-block justify-content-center ">
        <div className=" col-md-6 position-relative  d-none d-md-block">
          <Title className="d-flex">
            <h1 className="h1">
              Adoption
              <img
                src="../../src/assets/PetSellers/pawLogo.png"
                className="title-img "
              />
            </h1>

            <h2 className="h2">We need help. so do they.</h2>
            <p className="text">
              Adopt a pet and give it a home, <br />
              it will be love you back unconditionally.
            </p>
            <div className="buttons col">
              <StButton
                text="Explore Now"
                type="dark-blue"
                image={"../../src/assets/Icon/Chevron_Right_MD.png"}
              />
              <StButton
                text="View all our sellers"
                type="no-color-icon"
                image={"../../src/assets/Icon/Caret_Circle_Right.png"}
              />
            </div>

            <img
              src="../../src/assets/PetSellers/Rectangle9dog.png"
              alt=""
              className="img-rectangle9"
            />
          </Title>
        </div>

        <div className="col-md-6 position-relative  d-none d-md-block ">
          <img
            src="../../src/assets/PetSellers/Rectangle1dog.png"
            className="rectangle10"
          />
          <img
            src="../../src/assets/PetSellers/paw.png"
            alt=""
            className="paw"
          />
        </div>
      </Row>

      <div className="d-flex justify-content-around  text-start mt-5 title">
        <div>
          <H2>You already know ?</H2>
          <H1>Useful pet knowledge</H1>
        </div>
        <div className="d-none d-md-block">
          <StButton
            onClick={() => handleProducts()}
            text="View More"
            type="no-color-icon"
            image={"../../src/assets/Icon/Chevron_Right_MD.png"}
          />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 d-flex flex-wrap blogs ">
        <div className="col">
          <div className="card">
            <img
              src="../../src/assets/PetSellers/image3.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <button className="pet-button">Pet knowledge</button>
              <h5 className="card-title">
                What is a Pomeranian? How to Identify Pomeranian Dogs
              </h5>
              <p className="card-text">
                The Pomeranian, also known as the Pomeranian (Pom dog), is
                always in the top of the cutest pets. Not only that, the small,
                lovely, smart, friendly, and skillful circus dog breed.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="../../src/assets/PetSellers/image2.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body ">
              <button className="pet-button">Pet knowledge</button>
              <h5 className="card-title">Dog Diet You Need To Know</h5>
              <p className="card-text">
                Dividing a dog's diet may seem simple at first, but there are
                some rules you should know so that your dog can easily absorb
                the nutrients in the diet. For those who are just starting to
                raise dogs, especially newborn puppies with relatively weak
                resistance.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="../../src/assets/PetSellers/image1.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <button className="pet-button">Pet knowledge</button>
              <h5 className="card-title">
                What is a Pomeranian? How to Identify Pomeranian Dogs
              </h5>
              <p className="card-text">
                The Pomeranian, also known as the Pomeranian (Pom dog), is
                always in the top of the cutest pets. Not only that, the small,
                lovely, smart, friendly, and skillful circus dog breed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <StButton
          onClick={() => handleProducts()}
          text="View More"
          type="no-color-icon"
          image={"../../src/assets/Icon/Chevron_Right_MD.png"}
        />
      </div>
    </OurProductsWrapper>
  );
};

export default PetSellers;
