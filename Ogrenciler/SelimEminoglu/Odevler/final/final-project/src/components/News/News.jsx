import { Container } from "../../assets/css/style";
import {
  FlexProductDiv,
  FlexText,
  ProductH2,
  ProductH3,
} from "../../views/ProductList/styleProductList";
import Button from "../Button/Button";

function News() {
  return (
    <Container>
      <FlexProductDiv>
        <FlexText>
          <ProductH2>Zaten Biliyor Musun?</ProductH2>
          <ProductH3>Yeni Haberleri Keşfet</ProductH3>
        </FlexText>
        <Button
          title="Daha Fazla Göster"
          display="inline-flex"
          padding="12px 28px"
          gap="8px"
          border="1.5px solid #003459"
          background="#fdfdfd"
          color="#003459"
          icon=".\src\assets\icons\Chevron_Right_MD.svg"
          width="226px"
        />
      </FlexProductDiv>
    </Container>
  );
}

export default News;
