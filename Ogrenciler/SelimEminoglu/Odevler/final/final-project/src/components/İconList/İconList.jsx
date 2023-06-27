import { Container } from "../../assets/css/style";
import Button from "../Button/Button";
import {
  TextRow,
  İconListH2,
  İconListTextP,
  FlexİconList,
  Firstİcon,
  Firstİmg,
  Anotherİcon,
} from "./styleİconList";

function İconList() {
  const İconListSource = [
    "./src/assets/images/image 6.png",
    "./src/assets/images/image 7.png",
    "./src/assets/images/image 8.png",
    "./src/assets/images/image 9.png",
    "./src/assets/images/image 10.png",
    "./src/assets/images/image 11.png",
  ];
  return (
    <Container>
      <TextRow>
        <İconListH2>
          Proud to be part of
          <İconListTextP>Pet Sellers</İconListTextP>
        </İconListH2>
        <Button
          title="View all our sellers"
          padding="12px 28px"
          gap="8px"
          border="1.5px solid #003459"
          background="#fdfdfd"
          color="#003459"
          icon=".\src\assets\icons\Chevron_Right_MD.svg"
          width="244px"
        />
      </TextRow>
      <FlexİconList>
        <Firstİcon>
          <Firstİmg src=".\src\assets\images\image 4.png" alt="icon" />
        </Firstİcon>
        {İconListSource.map((item, i) => {
          return (
            <Anotherİcon key={i}>
              <img src={item} alt="icon" />
            </Anotherİcon>
          );
        })}
      </FlexİconList>
    </Container>
  );
}

export default İconList;
