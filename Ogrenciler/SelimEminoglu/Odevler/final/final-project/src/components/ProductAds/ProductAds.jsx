import { Container } from "../../assets/css/style";
import {
  FlexPath,
  ProductH2,
  Productİmg,
  ProductAdsDiv,
  Rectangle1,
  ProductFlexDiv,
  ProductAdsİmgDiv,
  FlexButtons,
  ProductAdsH2,
  ProductAdsH3,
  ProductAdsH4,
  TextAds,
} from "./styleProductAds";

import Button from "../Button/Button";

function ProductAds() {
  return (
    <Container>
      <FlexPath>
        <ProductH2>Home</ProductH2>
        <Productİmg src="./src/assets/icons/Caret_Right_SM.png" alt="icon" />
        <ProductH2>Dog</ProductH2>
        <Productİmg src="./src/assets/icons/Caret_Right_SM.png" alt="icon" />
        <ProductH2>Small Dog</ProductH2>
      </FlexPath>
      <ProductAdsDiv>
        <Rectangle1></Rectangle1>
        <ProductFlexDiv>
          <ProductAdsİmgDiv></ProductAdsİmgDiv>
          <TextAds>
            <ProductAdsH2>One more friend</ProductAdsH2>
            <ProductAdsH3>Thousands more fun!</ProductAdsH3>
            <ProductAdsH4>
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </ProductAdsH4>
            <FlexButtons>
              <Button
                title="View İntro"
                gap="8px"
                display="inline-flex"
                icon="./src/assets/icons/play_circle_white.png"
                background="#003459"
                color="#fdfdfd"
                border="1.5px solid #003459"
                width="175px"
              />
              <Button title="Explore Now" color="#003459" background="white" />
            </FlexButtons>
          </TextAds>
        </ProductFlexDiv>
      </ProductAdsDiv>
    </Container>
  );
}

export default ProductAds;
