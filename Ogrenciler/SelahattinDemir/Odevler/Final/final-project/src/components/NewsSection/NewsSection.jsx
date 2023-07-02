import Proptypes from "prop-types";
import Card from "../Card/Card";
import { TopTitle, BottomTitle, Button } from "./NewsSectionStyle";

function NewsSection({ products }) {
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
    <div className="row my-4">
      <TopTitle>Whats new?</TopTitle>
      <BottomTitle>Take a look at some of our pets</BottomTitle>
      {randomProducts.map((product) => (
        <Card key={product.id} data={product} />
      ))}
      <Button className="d-block d-lg-none">
        View more <i className="bi bi-chevron-right"></i>
      </Button>
    </div>
  );
}

NewsSection.propTypes = {
  products: Proptypes.array.isRequired,
};

export default NewsSection;
