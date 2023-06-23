import { HeadlineDiv } from "./styleHeadline";
import { Container } from "../../assets/css/style";
import Button from "../Button/Button";

function Headline() {
  return (
    <HeadlineDiv>
      <Container>
        <Button
          title="İntroyu Gör"
          gap="8px"
          display="inline-flex"
          icon=".\src\assets\icons\Play_Circle.svg"
          background="white"
          color="#003459"
          border="1.5px solid #003459"
        />
      </Container>
    </HeadlineDiv>
  );
}

export default Headline;
