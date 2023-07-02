/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateProduct } from "../../redux/slice/productsSlice";
import {
  DetailCardContainer,
  Quantity,
  DetailTitle,
  DetailPrice,
  ButtonBg,
  ButtonBorder,
  Title,
  ProductInfo,
  ProductInfoContainer,
} from "./CardStyle.js";
import EditProductModal from "../EditProductModal/EditProductModal";
import Request from "../../utils/Request";
import DetailTablo from "./DetailTablo";
import DetailImage from "./DetailImage";

const DetailCard = React.memo(({ data }) => {
  const request = new Request("http://localhost:3004/users");
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProductData, setUpdatedProductData] = useState({});
  const [user, setUser] = useState(null);
  const availableStock = data.rating?.count || 0;

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

  const handleEdit = () => {
    setUpdatedProductData(data);
    setIsModalOpen(true);
  };

  const handleUpdate = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
  };

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

  if (!user) {
    return null; // We return null so that the component is not rendered until the user loads
  }
  return (
    <DetailCardContainer className="row align-items-center">
      <div className="col-lg-6">
        <DetailImage data={data} />
      </div>
      <div className="col-lg-6 mt-3 mt-lg-0">
        <div className="detail-info">
          <Quantity className="text-muted d-none d-lg-block">
            Quantity {data?.rating?.count}
          </Quantity>
          <DetailTitle>{data.title}</DetailTitle>
          <DetailPrice className="mt-5 mt-lg-0">$ {data.price}</DetailPrice>
          <div className="d-flex gap-2 align-items-center">
            <ButtonBg>Contact us</ButtonBg>
            <ButtonBorder>
              <i className="bi bi-chat-left-dots me-3 mt-1"></i>
              Chat with Monito
            </ButtonBorder>
          </div>
          <div className="d-flex d-lg-none justify-content-between align-items-center mt-3">
            <Title className="mt-2">Information</Title>
            <div className="dropdown mb-1">
              <button
                className="border-0 bg-transparent dropdown-toggle d-flex align-items-center "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-share"></i>
                <ProductInfo className="d-inline ms-3 mb-0">Share</ProductInfo>
              </button>
              <ul className="dropdown-menu ">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <DetailTablo data={data} />
          <div className="d-flex justify-content-center align-items-center mt-2">
            <ButtonBg onClick={handleAddToCart} disabled={availableStock < 1}>
              {availableStock < 1 ? "Out of Stock" : "Add to Cart"}
            </ButtonBg>
            {user?.role === "admin" && (
              <ButtonBorder onClick={handleEdit} className="ms-3">
                Edit
              </ButtonBorder>
            )}
          </div>
        </div>
      </div>
      <ProductInfoContainer className="d-block justify-content-between my-3 ms-0 ms-lg-4 d-lg-none ">
        <div className="d-flex gap-2 align-items-center">
          <i className="bi bi-gender-ambiguous"></i>
          <ProductInfo className="mb-0">
            100% health guarantee for pet
          </ProductInfo>
        </div>
        <div className="d-flex gap-2 align-items-center mt-2">
          <i className="bi bi-person-hearts "></i>
          <ProductInfo className="mb-0">
            100% guarantee of pet identification
          </ProductInfo>
        </div>
      </ProductInfoContainer>
      <EditProductModal
        isOpen={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        handleUpdate={handleUpdate}
        product={updatedProductData}
      />
    </DetailCardContainer>
  );
});

DetailCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DetailCard;
