import PropTypes from "prop-types";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 16px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.h3`
  margin-top: 10px;
  font-size: 18px;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-size: 14px;
`;

const Category = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Rating = styled.span`
  margin-left: 5px;
  font-weight: bold;
`;

const CardPrice = styled.div`
  margin-top: 10px;
`;

const PriceText = styled.h3`
  font-size: 24px;
`;

const Card = ({ product }) => {
  return (
    <CardContainer>
      <CardImage src={product.image} alt={product.description} />
      <CardTitle className="title">{product.title}</CardTitle>
      <CardInfo>
        <Category>Category:</Category>
        <span>{product.category}</span>
        <span>.</span>
        <Category>Rating:</Category>
        <Rating>{product.rating.rate}</Rating>
      </CardInfo>
      <CardPrice>
        <PriceText>{product.price} $</PriceText>
      </CardPrice>
    </CardContainer>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;
