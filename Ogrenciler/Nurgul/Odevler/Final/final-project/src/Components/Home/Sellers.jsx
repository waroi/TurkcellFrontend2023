import sellerOne from "../../assets/Seller_1.svg";
import sellerTwo from "../../assets/Seller_2.svg";
import sellerThree from "../../assets/Seller_3.svg";
import sellerFour from "../../assets/Seller_4.svg";
import sellerFive from "../../assets/Seller_5.svg";
import sellerSix from "../../assets/Seller_6.svg";
import sellerSeven from "../../assets/Seller_7.svg";
import { FaAngleRight } from "react-icons/fa";
import { ViewMoreButton } from "../Style/styled-viewmore";
import { Styled } from "../Style/styled-seller";

const Sellers = () => {
  const sellerImages = [
    sellerOne,
    sellerTwo,
    sellerThree,
    sellerFour,
    sellerFive,
    sellerSix,
    sellerSeven,
  ];

  return (
    <Styled className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="title">
          Proud to be part of <span className="highlight">Pet Sellers</span>
        </div>
        <ViewMoreButton>
          View all our sellers <FaAngleRight />
        </ViewMoreButton>
      </div>

      <div className="d-flex justify-content-between">
        {sellerImages.map((sellerImage, i) => (
          <img src={sellerImage} key={i} alt={`image_${i}`} />
        ))}
      </div>
    </Styled>
  );
};

export default Sellers;
