import Banner from "../../../../common/Banner/Banner";
import adoptionBanner from "../../../../assets/banner/adoptionBanner.svg";
import {AdoptionReversContainer} from '../AdoptionReversStyle'

const AdoptionBanner = () => {
  return (
    <AdoptionReversContainer bg='#FFB775' className="px-5  container d-none d-lg-flex">
      <div className="position-relative">
        <div className="position-absolute layoutAdoption"></div>
        <div className="position-absolute layout2Adoption"></div>
      <Banner
        title="Adoption"
        sizetitle="3.25rem"
        color="#003459"
        subTitle="We need help. so do they."
        subTitleSize="2.25rem"
        description="Adopt a pet and give it a home, it will be love you back unconditionally."
        image={adoptionBanner}
        reverse="null"
        classname="adoptionBanner px-5"
      />
      </div>
    </AdoptionReversContainer>
  );
};

export default AdoptionBanner;
