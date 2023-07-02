import UpperSectionHeader from "../../common/UpperSectionHeader/UpperSectionHeader";
import sheba from "../../assets/sellers/sheba.svg";
import whiskas from '../../assets/sellers/whiskas.svg'
import bakers from '../../assets/sellers/bakers.svg'
import felix from '../../assets/sellers/felix.svg'
import goodBoy from '../../assets/sellers/goodBoy.svg'
import butchers from '../../assets/sellers/butchers.svg'
import pedigree from '../../assets/sellers/pedigree.svg'
import ImageSellerWrapper from "./ImageSellerWrapper";

const Sellers = () => {
  const sellerImages = [
    sheba,
    whiskas,
    bakers,
    felix,
    goodBoy,
    butchers,
    pedigree
  ]
  return (
    <div className="d-none d-lg-flex">
      <div className="container py-5">
        <UpperSectionHeader
          upperSubTitleSpan="Proud to be part of"
          upperSubTitle="Proud to be part of"
          upperButtonText="View all our sellers"
        />
        <div className="row py-3 justify-content-center align-items-center">
          {
            sellerImages.map((image, i) => <ImageSellerWrapper key={i} image={image} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Sellers;
