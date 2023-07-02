import SellerStyle from "./SellersStyle";
import sellerFirst from "../../../assets/seller1.svg";
import sellerSecond from "../../../assets/seller2.svg";
import sellerThird from "../../../assets/seller3.svg";
import sellerFourth from "../../../assets/seller4.svg";
import sellerFifth from "../../../assets/seller5.svg";
import sellerSixth from "../../../assets/seller6.svg";
import sellerSeventh from "../../../assets/seller7.svg";
import ButtonSecondaryStyle from "../ButtonSecondry/ButtonSecondaryStyle";
import Container from "../Container/Container";

const Sellers = () => {
  const sellerData = [
    sellerFirst,
    sellerSecond,
    sellerThird,
    sellerFourth,
    sellerFifth,
    sellerSixth,
    sellerSeventh,
  ];
  return (
    <Container>
      <SellerStyle>
        <div className="d-flex justify-content-between">
          <div className="title align-items-center">
             Proud to be part of
            <h3 className="MinTitle px-2"> Pet Sellers</h3>
          </div>
          <ButtonSecondaryStyle>View all our sellers -</ButtonSecondaryStyle>
        </div>

        <div className="d-flex justify-content-between sellers">
          {sellerData.map((seller, i) => (
            <div key={i} className="seller">
              <img src={seller} alt={`image_${i}`} className="sellerImg" />
            </div>
          ))}
        </div>
      </SellerStyle>
    </Container>
  );
};

export default Sellers;
