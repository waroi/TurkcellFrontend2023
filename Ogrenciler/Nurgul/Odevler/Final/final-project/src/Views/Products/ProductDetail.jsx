import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../../Components/Products/Card";
import axios from "axios";
import { useSelector } from "react-redux";
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
  const user = useSelector((state) => state.user.user);

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

  const handleClick = () => {
    if (user && user.id && product.rating?.count > 0) {
      console.log("Added to cart");
      axios.get(`http://localhost:3000/carts/${user.id}`).then((response) => {
        const inCart = response.data.cart.find(
          (cartItem) => cartItem.productId === product.id
        );
        if (inCart) {
          if (inCart.demand < product.rating.count) {
            console.log("There is an item with the same id in the cart");
            const newProduct = {
              productId: inCart.productId,
              title: inCart.title,
              price: inCart.price,
              image: inCart.image,
              demand: inCart.demand + 1,
            };
            const newCart = response.data.cart.map((cartItem) => {
              if (newProduct.productId == cartItem.productId) return newProduct;
              return cartItem;
            });
            axios.put(`http://localhost:3000/carts/${user.id}`, {
              id: user.id,
              cart: newCart,
            });
          } else console.log("You have hit the stock limit");
        } else {
          const newProduct = {
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            demand: 1,
          };
          axios.put(`http://localhost:3000/carts/${user.id}`, {
            id: user.id,
            cart: [...response.data.cart, newProduct],
          });
        }
      });
    }
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
              onClick={handleClick}
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
