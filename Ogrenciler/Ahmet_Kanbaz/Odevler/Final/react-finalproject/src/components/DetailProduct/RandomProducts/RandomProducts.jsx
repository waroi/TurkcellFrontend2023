import UpperSectionHeader from "../../../common/UpperSectionHeader/UpperSectionHeader";
import SingleProduct from "../../Products/SingleProduct/SingleProduct";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types'

const RandomProducts = ({id}) => {
  const randomNumbers = [];
  const allProducts = useSelector((state) => state.products.products);

  while (randomNumbers.length < 8) {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    if (!randomNumbers.includes(randomNumber) && randomNumber != id) {
      randomNumbers.push(randomNumber);
    }
  }

  const randomProducts = allProducts.filter((singleProduct) =>
    randomNumbers.includes(singleProduct.id)
  );
  return (
    <div className="pt-5">
      <UpperSectionHeader
        upperTitle="Whats new?"
        upperSubTitle="See more puppies"
      />
      <div className="row g-3 pt-4">
        {randomProducts.map((singleProduct) => (
          <SingleProduct
            key={singleProduct.id}
            columnSize="col-lg-3 col-md-4 col-6"
            singleProduct={singleProduct}
          />
        ))}
      </div>
    </div>
  );
};

RandomProducts.propTypes = {
  id: PropTypes.string
}

export default RandomProducts;
