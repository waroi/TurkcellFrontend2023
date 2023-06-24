import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  CardContainer,
  CardImage,
  Title,
  Description,
  ProductInfo,
} from "./CardStyle.js";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength - 1) + "...";
}

function Card({ data }) {
  const truncatedTitle = truncateText(data.title, 35);
  const truncatedDescription = truncateText(data.description, 55);
  return (
    <CardContainer className="col-lg-3 col-md-4">
      <div className="card overflow-hidden border-0">
        <CardImage className="d-flex m-auto ">
          <img src={data.image} className="card-img-top" alt="Card Image" />
        </CardImage>
        <div className="card-body">
          <Title className="card-title">{truncatedTitle}</Title>
          <Description className="card-text">
            {truncatedDescription}
          </Description>
          <div className="d-flex justify-content-between">
            <ProductInfo className="card-text">
              {data.price} <i className="bi bi-currency-dollar"></i>
            </ProductInfo>
            <ProductInfo className="card-text">
              {data.rating.count} <i className="bi bi-card-list"></i>
            </ProductInfo>
          </div>
          <ul className="d-flex gap-2">
            {data.rating &&
              Array.from({ length: data.rating.rate }).map((_, index) => (
                <li key={`star-${index}`}>
                  <i className="bi bi-star-fill text-warning"></i>
                </li>
              ))}
            {data.rating &&
              Array.from({ length: 6 - data.rating.rate }).map((_, index) => (
                <li key={`empty-star-${index}`}>
                  <i className="bi bi-star"></i>
                </li>
              ))}
          </ul>

          <div className="d-flex justify-content-between">
            <Link to={`/${data.id}`} className="btn btn-primary">
              Read More
            </Link>
            <a href="#" className="btn btn-danger">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
