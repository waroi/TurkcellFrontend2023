import {
  HeadlineDiv,
  PartDiv,
  FirstPart,
  SecondPart,
  HeadlineH2,
  HeadlineH3,
  HeadlineP,
  FlexDiv,
} from "./styleHeadline";
import { Container } from "../../assets/css/style";
import Button from "../Button/Button";

function Headline() {
  return (
    <HeadlineDiv>
      <Container>
        <PartDiv>
          <FirstPart>
            <HeadlineH2>Teknolojiye Bir Adım</HeadlineH2>
            <HeadlineH3>Daha Fazla Ürün</HeadlineH3>
            <HeadlineP>
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </HeadlineP>
            <FlexDiv>
              <Button
                title="İntroyu Gör"
                gap="8px"
                display="inline-flex"
                icon=".\src\assets\icons\Play_Circle.svg"
                background="white"
                color="#003459"
                border="1.5px solid #003459"
              />
              <Button title="Şimdi Keşfet" />
            </FlexDiv>
          </FirstPart>
          <SecondPart></SecondPart>
        </PartDiv>
      </Container>
    </HeadlineDiv>
  );
}

export default Headline;
