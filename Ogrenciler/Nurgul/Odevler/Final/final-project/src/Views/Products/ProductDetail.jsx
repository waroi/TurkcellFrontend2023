import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  margin-bottom: 40px;
`;

const Image = styled.img`
  max-width: 100%;
  margin-right: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Stock = styled.h2`
  margin-bottom: 10px;
`;
const Price = styled.h2`
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "blue")};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCard = styled.div`
  width: 25%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ProductCardTitle = styled.h3`
  margin-bottom: 10px;
`;

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
    if (user && user.id) {
      if (product.rating?.count > 0) {
        console.log("Added to cart");
        axios.get(`http://localhost:3000/carts/${user.id}`).then((response) => {
          const inCart = response.data.cart.find(
            (cartItem) => cartItem.productId == product.id
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
                if (newProduct.productId == cartItem.productId)
                  return newProduct;
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
    }
  };

  return (
    <div>
      <Container>
        <Image src={product.image} alt="" />
        <div>
          <h1>{user}</h1>
          <Title>{product.title}</Title>
          <Stock>Stock: {product.rating?.count}</Stock>
          <Price>Price: {product.price}</Price>
          <Button disabled={product.rating?.count === 0} onClick={handleClick}>
            Add to Cart
          </Button>
        </div>
      </Container>

      <ProductsContainer>
        {relatedProducts.map((relatedProduct) => (
          <ProductCard key={relatedProduct.id}>
            <Image src={relatedProduct.image} alt="" />
            <ProductCardTitle>{relatedProduct.title}</ProductCardTitle>
            <Price>Price: {product.price}</Price>
          </ProductCard>
        ))}
      </ProductsContainer>
    </div>
  );
};

export default ProductDetail;
