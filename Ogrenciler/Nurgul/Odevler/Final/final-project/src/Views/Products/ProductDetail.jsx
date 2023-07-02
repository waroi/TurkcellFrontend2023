import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../Components/Products/Card";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/store/index";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Image,
  Title,
  Stock,
  Price,
  Button,
  ProductsContainer,
  Box,
  Img,
  Contents,
} from "../../Components/Style/styled-productDetail";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.log("Error fetching product data:", err));

    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        const randomIndexes = getRandomIndexes(response.data.length, 8);
        const randomProducts = randomIndexes.map(
          (index) => response.data[index]
        );
        setRelatedProducts(randomProducts);
      })
      .catch((err) => console.log("Error fetching related products:", err));
  }, []);

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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Box>
        <Container>
          <Image>
            <Img src={product.image} alt="" />
          </Image>
          <Contents>
            <Title>{product.title}</Title>
            <Stock>Stock: {product.rating?.count}</Stock>
            <Price>Price: {product.price}</Price>
            <Button
              disabled={product.rating?.count === 0}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </Contents>
        </Container>
      </Box>

      <ProductsContainer>
        {relatedProducts.map((relatedProduct) => (
          <Card key={relatedProduct.id} product={relatedProduct} />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default ProductDetail;
