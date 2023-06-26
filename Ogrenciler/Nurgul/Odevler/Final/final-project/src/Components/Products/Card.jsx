import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import {
  Container,
  CardContainer,
  CardImage,
  CardInfo,
  CardPrice,
  CardTitle,
  Category,
  Rating,
  Box,
} from "../Style/styled-card";

const truncateTitle = (title) => {
  const words = title.split(" ");
  if (words.length > 5) {
    return words.slice(0, 5).join(" ") + "...";
  }
  return title;
};
const Card = ({ product }) => {
  return (
    <Container>
      <CardContainer className="card">
        <Box>
          <CardImage
            src={product.image}
            alt={product.description}
            className="card-img-top img-fluid"
          />
        </Box>
        <CardInfo className="card-body">
          <CardTitle className="card-title">
            {" "}
            {truncateTitle(product.title)}
          </CardTitle>
          <Category className="card-title">
            Category:{product.category}{" "}
          </Category>
          <Rating className="card-title">Rating:{product.rating.rate} </Rating>
          <CardPrice className="card-title">Price:{product.price} </CardPrice>
        </CardInfo>
      </CardContainer>
    </Container>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;
