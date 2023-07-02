import {
  HeadlineDiv,
  PartDiv,
  FirstPart,
  SecondPart,
  HeadlineH2,
  HeadlineH3,
  HeadlineP,
  FlexDiv,
  Rectangle7,
  Rectangle6,
  Rectangle5,
  Rectangle3,
  Rectangle9,
  Rectangle8,
  Rectangle2,
  Rectangle1,
} from "./styleHeadline";
import { Container } from "../../assets/css/style";
import Button from "../Button/Button";

function Headline() {
  return (
    <HeadlineDiv>
      <Container>
        <PartDiv>
          <FirstPart>
            <HeadlineH2>One more friend</HeadlineH2>
            <HeadlineH3>Thousands more fun!</HeadlineH3>
            <HeadlineP>
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </HeadlineP>
            <FlexDiv>
              <Button
                title="View İntro"
                gap="8px"
                display="inline-flex"
                icon=".\src\assets\icons\Play_Circle.svg"
                background="white"
                color="#003459"
                border="1.5px solid #003459"
                width="175px"
              />
              <Button title="Explore Now" />
            </FlexDiv>
          </FirstPart>
          <SecondPart></SecondPart>
          <Rectangle6></Rectangle6>
          <Rectangle7></Rectangle7>
          <Rectangle5></Rectangle5>
          <Rectangle3></Rectangle3>
          <Rectangle9></Rectangle9>
          <Rectangle8></Rectangle8>
          <Rectangle1></Rectangle1>
          <Rectangle2></Rectangle2>
        </PartDiv>
      </Container>
    </HeadlineDiv>
  );
}

export default Headline;
