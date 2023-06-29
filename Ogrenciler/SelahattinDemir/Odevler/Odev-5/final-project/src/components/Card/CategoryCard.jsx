import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  CardContainer,
  CardImage,
  Title,
  Description,
  ProductInfo,
} from "./CardStyle.js";
import Request from "../../utils/Request";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength - 1) + "...";
}

function CategoryCard({ data }) {
  const request = new Request("http://localhost:3004/users");
  const [user, setUser] = useState(null);
  const truncatedTitle = truncateText(data.title, 35);
  const truncatedDescription = truncateText(data.description, 55);

  useEffect(() => {
    const users = localStorage.getItem("user");
    const parsedUser = JSON.parse(users);
    setUser(parsedUser);
  }, []);

  const handleAddToCart = async () => {
    const requestGet = new Request(
      "http://localhost:3004/users" + `/${user.id}`
    );
    const existingItem = user.carts.find((item) => item.id === data.id);
    const availableStock = data.rating?.count || 0; // Consider 0 if stock information is not available

    if (existingItem) {
      if (existingItem.quantity >= availableStock) {
        toast.error("Insufficient stock. You cannot add more of this item.");
        return;
      }

      const updatedCarts = user.carts.map((item) => {
        if (item.id === data.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      await request.put(`/${user.id}`, {
        ...user,
        carts: updatedCarts,
      });

      const updatedUser = await requestGet.get();
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
    } else {
      if (availableStock < 1) {
        toast.error("This item is out of stock.");
        return;
      }

      const newItem = {
        ...data,
        quantity: 1,
      };

      await request.put(`/${user.id}`, {
        ...user,
        carts: [...user.carts, newItem],
      });

      const updatedUser = await requestGet.get();
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  return (
    <CardContainer className="col-lg-4 col-md-6">
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
            <button onClick={handleAddToCart} className="btn btn-danger">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

CategoryCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CategoryCard;
