import Card from "../../Components/Products/Card";
import { ProductsContainer } from "../../Components/Style/styled-productDetail";
import BannerPaw from "../../Components/Home/BannerPaw";
import BannerWomen from "../../Components/Home/BannerWomen";
import BannerWomenTwo from "../../Components/Home/BannerWomenTwo";
import Sellers from "../../Components/Home/Sellers";
import ViewMore from "../../Components/Home/ViewMore";
import Knowledge from "../../Components/Home/Knowledge";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeView = () => {
  const [products, setProducts] = useState([]);
  const getRandomIndexes = (max, count) => {
    const indexes = [];
    while (indexes.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        const randomIndexes = getRandomIndexes(response.data.length, 8);
        const randomProducts = randomIndexes.map(
          (index) => response.data[index]
        );
        setProducts(randomProducts);
      })
      .catch((err) => console.log("Error fetching products:", err));
  }, []);

  return (
    //Banner//

    <div>
      <BannerWomen />
      <ViewMore />
      <ProductsContainer>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductsContainer>
      <BannerWomenTwo />
      <ProductsContainer>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductsContainer>

      <Sellers />
      <BannerPaw />

      <Knowledge />
    </div>

    //banner//
  );
};

export default HomeView;
