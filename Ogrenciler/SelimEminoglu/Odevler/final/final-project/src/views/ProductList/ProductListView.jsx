import { Container } from "../../assets/css/style";
import PropTypes from "prop-types";
import {
  ProductListDiv,
  FlexProductDiv,
  FlexText,
  ProductH2,
  ProductH3,
} from "./styleProductList";
import Button from "../../components/Button/Button";

function ProductListView({ h2Text, h3Text }) {
  return (
    <ProductListDiv>
      <Container>
        <FlexProductDiv>
          <FlexText>
            <ProductH2>{h2Text}</ProductH2>
            <ProductH3>{h3Text}</ProductH3>
          </FlexText>
          <Button
            title="View More"
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
    </ProductListDiv>
  );
}

ProductListView.propTypes = {
  h2Text: PropTypes.string,
  h3Text: PropTypes.string,
};

export default ProductListView;
