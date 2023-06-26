import { Container } from "../../assets/css/style";
import {
  AdsPicDiv,
  MidAdsDiv,
  Rectangle10,
  Rectangle11,
  Rectangle12,
  Rectangle13,
  FlexAds,
  TextAds,
  AdsH2,
  AdsH3,
  AdsH4,
  FlexButtons,
} from "./styleMidAds";
import Button from "../Button/Button";
import PropTypes from "prop-types";

function MidAds({ istextright, backgroundcolor, image }) {
  return (
    <Container>
      <MidAdsDiv backgroundcolor={backgroundcolor}>
        {istextright && (
          <>
            <FlexAds>
              <AdsPicDiv image={image}></AdsPicDiv>
              <TextAds>
                <AdsH2>Teknolojiye Bir Adım</AdsH2>
                <AdsH3>Daha Fazla Ürün</AdsH3>
                <AdsH4>
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </AdsH4>
                <FlexButtons>
                  <Button
                    title="İntroyu Gör"
                    gap="8px"
                    display="inline-flex"
                    icon=".\src\assets\icons\Play_Circle.svg"
                    background="white"
                    color="#003459"
                    border="1.5px solid #003459"
                    width="175px"
                  />
                  <Button title="Şimdi Keşfet" />
                </FlexButtons>
              </TextAds>
            </FlexAds>
            <Rectangle10 />
            <Rectangle11 />
          </>
        )}
        {!istextright && (
          <>
            <FlexAds>
              <TextAds>
                <AdsH2>Teknolojiye Bir Adım</AdsH2>
                <AdsH3>Daha Fazla Ürün</AdsH3>
                <AdsH4>
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </AdsH4>
                <FlexButtons>
                  <Button
                    title="İntroyu Gör"
                    gap="8px"
                    display="inline-flex"
                    icon=".\src\assets\icons\Play_Circle.svg"
                    background="white"
                    color="#003459"
                    border="1.5px solid #003459"
                    width="175px"
                  />
                  <Button title="Şimdi Keşfet" />
                </FlexButtons>
              </TextAds>
              <AdsPicDiv image={image}></AdsPicDiv>
            </FlexAds>
            <Rectangle12 />
            <Rectangle13 />
          </>
        )}
      </MidAdsDiv>
    </Container>
  );
}

MidAds.propTypes = {
  backgroundcolor: PropTypes.string,
  istextright: PropTypes.bool,
  image: PropTypes.string,
};

MidAds.defaultProps = {
  backgroundcolor: "#003459",
  istextright: true,
  image: "./src/assets/images/ads_pic.png",
};

export default MidAds;
