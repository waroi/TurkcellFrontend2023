import { Request } from "../../requests/request";
import { useEffect, useState } from "react";
import {
  WhatsNewTitle,
  WhatsNewCard,
  CardImage,
  CardContent,
  CardTitle,
  CardInfo,
  CardCap,
  CardPrice,
} from "./HomeStyle";
import Button from "../Button/Button";
import chevronRight from "../../img/chevron-right.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeWhatsNew = () => {
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const dispatch = useDispatch();

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast("Product added to your Cart");
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestData = new Request("http://localhost:3004/data");
      const response = await requestData.getData();
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="container mt-5 ">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <WhatsNewTitle>
            <div className="whatsNew-1">Whats New?</div>
            <div className="whatsNew-2">
              Take a Look At Some Of Our Products
            </div>
          </WhatsNewTitle>
          <div className="d-none d-md-block">
            <Button
              color={"#003459"}
              title="View More"
              logo={chevronRight}
              border="1.6px solid #003459"
              background={"transparent"}
            />
          </div>
        </div>

        <div>
          <div className="row">
            {data.map((product) => (
              <div className="col-6 col-md-4 col-lg-3 mb-2" key={product.id}>
                <WhatsNewCard>
                  <Link
                    style={{ border: "1px solid #dce2e7" }}
                    to={`/${product?.id}`}
                    className=" w-100 text-center p-3 rounded-3 "
                  >
                    <div>
                      <CardImage
                        className="img-fluid"
                        src={product.image}
                        alt=""
                      />
                    </div>
                  </Link>
                  <CardContent className="d-flex flex-column">
                    <CardTitle>
                      {product?.title.charAt(0).toUpperCase() +
                        product?.title.substring(1)}{" "}
                      -{" "}
                      {product?.category.charAt(0).toUpperCase() +
                        product?.category.substring(1)}
                    </CardTitle>
                    <div className="d-flex gap-2 align-items-center">
                      <CardCap>
                        Rating: <CardInfo>{product?.rating?.rate}</CardInfo>
                      </CardCap>
                      <span style={{ color: "#667479" }}>•</span>

                      <CardCap>
                        Count: <CardInfo>{product?.rating?.count} </CardInfo>
                      </CardCap>
                    </div>

                    <CardPrice>Price: {product.price} ₺</CardPrice>

                    <div className="d-flex gap-1 my-2 align-items-center">
                      <CardPrice className="me-1">Rating: </CardPrice>
                      {Array(Math.round(product?.rating?.rate))
                        .fill()
                        .map((_, index) => (
                          <i
                            style={{ color: "#FFD700" }}
                            key={index}
                            className="fa-solid fa-star "
                          ></i>
                        ))}
                      {Array.from({
                        length: 5 - Math.round(product?.rating?.rate),
                      }).map((_, index) => (
                        <i key={index} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    {JSON.parse(localStorage.getItem("isAuth")).isOnline ===
                      true && (
                      <div className="row w-100 d-flex align-items-end">
                        <div className="col-6 ">
                          {cart?.find((item) => item?.id === product?.id)
                            ?.quantity === product?.rating?.count ? (
                            <div>No More Stok</div>
                          ) : (
                            <button
                              onClick={() => addCart(product)}
                              className="btn btn-success"
                            >
                              Add To{" "}
                              <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                          )}
                        </div>

                        <div className="col-6 d-flex flex-column align-items-end justify-content-end">
                          {cart?.find((item) => item.id === product.id) ? (
                            <div className="badge text-bg-warning  ">
                              Pieces:
                              {` ${
                                cart?.find((item) => item.id === product.id)
                                  .quantity
                              }`}
                            </div>
                          ) : (
                            <div
                              style={{ fontSize: "12px" }}
                              className="d-flex align-items-center mt-1"
                            >
                              You havent added this item to your cart yet.
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </WhatsNewCard>
              </div>
            ))}
          </div>
        </div>
        <div className="d-block d-md-none pt-4">
          <Button
            color={"#003459"}
            title="View More"
            logo={chevronRight}
            border="1.6px solid #003459"
            background={"transparent"}
            width={"100%"}
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default HomeWhatsNew;
