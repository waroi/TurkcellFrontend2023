import reversedHeroImage from "../../../../assets/banner/reversedHeroImage.svg";
import Banner from "../../../../common/Banner/Banner";
import { AdoptionReversContainer } from "../AdoptionReversStyle";

const ReversedHero = () => {
  const title = "One more friend";
  const subTitle = "Thousands more fun!";
  const description =
    "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!";
  return (
    <AdoptionReversContainer
      bg="#003459"
      className="pt-5 px-lg-5 pt-lg-0 container"
    >
      <div className="position-relative">
        <div className="layoutReversed position-absolute"></div>
        <div className="position-absolute layout2Reversed"></div>
        <Banner
          title={title}
          sizetitle="3.25rem"
          color="#003459"
          subTitle={subTitle}
          subTitleSize="2.25rem"
          description={description}
          image={reversedHeroImage}
          reverse="flex-row-reverse"
          classname="reversedHero"
        />
      </div>
    </AdoptionReversContainer>
  );
};

export default ReversedHero;
