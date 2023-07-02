import Proptypes from "prop-types";
import Card from "../Card/Card";
import { TopTitle, BottomTitle, Button } from "../NewsSection/NewsSectionStyle";

function ProductsSection({ products }) {
  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const randomProducts = shuffle(products).slice(0, 8);
  return (
    <div className="row d-none d-lg-flex">
      <div className="d-flex justify-content-between align-items-center my-3">
        <div>
          <TopTitle>Hard to choose right products for your pets?</TopTitle>
          <BottomTitle>Our Products</BottomTitle>
        </div>
        <Button>
          View more <i className="bi bi-chevron-right"></i>
        </Button>
      </div>
      {randomProducts.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </div>
  );
}

ProductsSection.propTypes = {
  products: Proptypes.array.isRequired,
};

export default ProductsSection;
