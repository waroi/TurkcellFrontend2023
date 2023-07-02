import { HeroBannerDiv, Layout1, Layout2, Layout5, Layout6, Layout7, Layout8 } from "./HeroBannerStyle";
import homeBanner from "../../../../assets/banner/homeBanner.svg";
import Banner from "../../../../common/Banner/Banner";
const HeroBanner = () => {
  const title = "One more friend";
  const subTitle = "Thousands more fun!";
  const description =
    "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!";

  return (
    <HeroBannerDiv className="position-relative pt-5">
      <Layout1 className="position-absolute"></Layout1>
      <Layout2 className="position-absolute"></Layout2>
      <div className="position-absolute layout3 d-none d-lg-flex"></div>
      <div className="position-absolute layout4 d-none d-lg-flex"></div>
      <Layout5 className="position-absolute"></Layout5>
      <Layout6 className="position-absolute"></Layout6>
      <Layout7 className="position-absolute"></Layout7>
      <Layout8 className="position-absolute"></Layout8>
      <Banner
        title={title}
        sizetitle="3.75rem"
        color="#002A48"
        subTitle={subTitle}
        subTitleSize="2.875rem"
        description={description}
        image={homeBanner}
        reverse="null"
        classname="pt-5 pt-lg-0"
      />
    </HeroBannerDiv>
  );
};

export default HeroBanner;
