import Proptypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/slice/productsSlice";
import { TopTitle, BottomTitle } from "../NewsSection/NewsSectionStyle";
import Card from "../Card/Card";

function MoreProductsSection({ id }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const getRandomProducts = () => {
    const filteredProducts = products.filter((product) => product.id !== id);
    const randomProducts = [];

    while (randomProducts.length < 8 && filteredProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredProducts.length);
      const randomProduct = filteredProducts[randomIndex];

      if (!randomProducts.includes(randomProduct)) {
        randomProducts.push(randomProduct);
      }

      filteredProducts.splice(randomIndex, 1);
    }

    return randomProducts;
  };

  const randomProducts = getRandomProducts();

  return (
    <div className="row my-5">
      <TopTitle>Whats new?</TopTitle>
      <BottomTitle>See more products</BottomTitle>
      {randomProducts.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </div>
  );
}

MoreProductsSection.propTypes = {
  id: Proptypes.string.isRequired,
};

export default MoreProductsSection;
