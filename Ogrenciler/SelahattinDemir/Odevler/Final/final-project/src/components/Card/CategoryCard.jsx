import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  CardContainer,
  CardImage,
  Title,
  Description,
  ProductInfo,
  ButtonBorder,
  ButtonBg,
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
  const truncatedTitle = truncateText(data.title, 27);
  const truncatedDescription = truncateText(data.description, 50);
  const availableStock = data.rating?.count || 0; // Consider 0 if stock information is not available

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await request.get();
        const loggedInUser = response.find((user) => user.login === true);
        setUser(loggedInUser);
      } catch (error) {
        toast.error("Error fetching user.");
      }
    };

    fetchUser();
  }, []);

  const handleAddToCart = () => {
    const existingItem = user.carts.find((item) => item.id === data.id);

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

      const updatedUser = {
        ...user,
        carts: updatedCarts,
      };

      request.put(user.id, updatedUser);
      setUser(updatedUser);
      toast.success("Item added to cart.");
      return;
    } else if (availableStock < 1) {
      toast.error("Insufficient stock. You cannot add this item to cart.");
      return;
    }

    const updatedUser = {
      ...user,
      carts: [
        ...user.carts,
        {
          ...data,
          quantity: 1,
        },
      ],
    };

    request.put(user.id, updatedUser);
    setUser(updatedUser);
    toast.success("Item added to cart.");
  };

  return (
    <CardContainer className="col-6 col-lg-4 col-md-6">
      <div className="card overflow-hidden border-0">
        <CardImage className="d-flex m-auto ">
          <img src={data.image} className="card-img-top" alt="Card Image" />
        </CardImage>
        <div className="card-body">
          <Title className="card-title">{truncatedTitle}</Title>
          <Description className="card-text">
            {truncatedDescription}
          </Description>
          <div className="d-block d-lg-flex justify-content-between">
            <ProductInfo className="card-text mt-4 mt-lg-0">
              {data.price} <i className="bi bi-currency-dollar"></i>
            </ProductInfo>
            <ProductInfo className="card-text">
              {data.rating.count} <i className="bi bi-card-list"></i>
            </ProductInfo>
          </div>
          <ul className="d-flex gap-2 justify-content-start ps-2 ps-lg-0 justify-content-lg-center">
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

          <div className="d-flex justify-content-center justify-content-lg-between mt-3 flex-wrap align-items-center">
            <ButtonBg to={`/${data.id}`}>Read More</ButtonBg>
            <ButtonBorder
              className="mt-2 mt-lg-0 px-3 px-lg-4"
              onClick={handleAddToCart}
              disabled={availableStock < 1}
            >
              {availableStock < 1 ? "Out of Stock" : "Add to Cart"}
            </ButtonBorder>
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
