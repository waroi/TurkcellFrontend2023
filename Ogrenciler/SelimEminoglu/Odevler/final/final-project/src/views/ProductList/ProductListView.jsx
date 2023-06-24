import { Container } from "../../assets/css/style";
import { ProductListDiv, FlexProductDiv, FlexText } from "./styleProductList";

function ProductListView() {
  return (
    <ProductListDiv>
      <Container>
        <FlexProductDiv>
          <FlexText>
            <h2>Yeni Gelişmeler</h2>
            <h3>Güncel Gelişmeleri Takip Edin</h3>
          </FlexText>
          <button>Daha Fazla Göster</button>
        </FlexProductDiv>
      </Container>
    </ProductListDiv>
  );
}

export default ProductListView;
