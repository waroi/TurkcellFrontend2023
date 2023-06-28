/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/slice/productsSlice";
import {
  DetailCardContainer,
  Quantity,
  DetailTitle,
  DetailPrice,
  DetailImageContainer,
  ProductInfo,
  ProductInfoContainer,
  SocialInfoContainer,
  DetailButtonContact,
  DetailButtonChat,
  TableTd,
} from "./CardStyle.js";
import EditProductModal from "../EditProductModal/EditProductModal";
import Request from "../../utils/Request";

const DetailCard = React.memo(({ data }) => {
  const request = new Request("http://localhost:3004/users");
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProductData, setUpdatedProductData] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = localStorage.getItem("user");
    const parsedUser = JSON.parse(users);
    setUser(parsedUser);
  }, []);

  const handleEdit = () => {
    setUpdatedProductData(data);
    setIsModalOpen(true);
  };

  const handleUpdate = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
  };

  const handleAddToCart = async () => {
    const existingItem = user.carts.find((item) => item.id === data.id);

    if (existingItem) {
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

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          carts: updatedCarts,
        })
      );
    } else {
      const newItem = {
        ...data,
        quantity: 1,
      };

      await request.put(`/${user.id}`, {
        ...user,
        carts: [...user.carts, newItem],
      });

      localStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          carts: [...user.carts, newItem],
        })
      );

      window.location.reload();
    }

    // Güncellenmiş kullanıcıyı tekrar almak için localStorage'dan okuma yapalım
    const updatedUser = JSON.parse(localStorage.getItem("user"));
    setUser(updatedUser);
  };

  if (!user) {
    return null; // Kullanıcı yüklenene kadar bileşenin render edilmemesi için null döndürüyoruz
  }

  return (
    <DetailCardContainer className="row align-items-center">
      <div className="col-lg-6">
        <DetailImageContainer>
          <img src={data.image} alt="Detail Image" className="img-fluid" />
        </DetailImageContainer>
        <ProductInfoContainer className="d-flex justify-content-between my-3 ms-sm-0 ms-lg-4">
          <div className="d-flex gap-2 align-items-center">
            <i className="bi bi-gender-ambiguous"></i>
            <ProductInfo className="mb-0">
              100% health guarantee for pet
            </ProductInfo>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <i className="bi bi-person-hearts "></i>
            <ProductInfo className="mb-0">
              100% guarantee of pet identification
            </ProductInfo>
          </div>
        </ProductInfoContainer>
        <SocialInfoContainer className="d-flex gap-3 ms-sm-0 ms-lg-4 ">
          <div className="d-flex gap-2 align-items-center">
            <i className="bi bi-share-fill"></i>
            <ProductInfo className="mb-0">Share:</ProductInfo>
          </div>
          <div className="d-flex gap-2">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
          </div>
        </SocialInfoContainer>
      </div>
      <div className="col-lg-6">
        <div className="detail-info">
          <Quantity className="text-muted">
            Quantity {data?.rating?.count}
          </Quantity>
          <DetailTitle>{data.title}</DetailTitle>
          <DetailPrice>{data.price}</DetailPrice>
          <div className="d-flex gap-2 align-items-center">
            <DetailButtonContact>Contact us</DetailButtonContact>
            <DetailButtonChat>
              <i className="bi bi-chat-left-dots me-3 mt-1"></i>
              Chat with Monito
            </DetailButtonChat>
          </div>
          <table className="mt-3">
            <tbody>
              <tr>
                <TableTd className="pb-1">Quantity:</TableTd>
                <TableTd className="pb-1 ps-3">{data?.rating?.count}</TableTd>
              </tr>
              <tr>
                <TableTd className="pb-1">Name:</TableTd>
                <TableTd className="pb-1 ps-3">{data.title}</TableTd>
              </tr>
              <tr>
                <TableTd className="pb-1">Price:</TableTd>
                <TableTd className="pb-1 ps-3">{data.price}</TableTd>
              </tr>
              <tr>
                <TableTd className="pb-1">Category:</TableTd>
                <TableTd className="pb-1 ps-3">{data.category}</TableTd>
              </tr>
              <tr>
                <TableTd className="pb-1">Description:</TableTd>
                <TableTd className="pb-1 ps-3">{data.description}</TableTd>
              </tr>
              <tr>
                <TableTd>Rating:</TableTd>
                <TableTd className="ps-3">
                  <ul className="d-inline-flex gap-2 p-0 m-0">
                    {data.rating &&
                      Array.from({ length: data.rating.rate }).map(
                        (_, index) => (
                          <li key={`star-${index}`}>
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                        )
                      )}
                    {data.rating &&
                      Array.from({ length: 6 - data.rating.rate }).map(
                        (_, index) => (
                          <li key={`empty-star-${index}`}>
                            <i className="bi bi-star"></i>
                          </li>
                        )
                      )}
                  </ul>
                </TableTd>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <DetailButtonContact onClick={handleAddToCart}>
              Add to Cart
            </DetailButtonContact>
            {user?.role === "admin" && (
              <DetailButtonChat onClick={handleEdit} className="ms-3">
                Edit
              </DetailButtonChat>
            )}
          </div>
        </div>
      </div>
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
