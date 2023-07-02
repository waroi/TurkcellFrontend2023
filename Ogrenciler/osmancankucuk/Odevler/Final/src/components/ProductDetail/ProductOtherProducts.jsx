import { useEffect } from "react";
import { Request } from "../../requests/request";
import { useState } from "react";
import {
  WhatsNewCard,
  CardImage,
  CardContent,
  CardTitle,
  CardCap,
  CardInfo,
  CardPrice,
} from "../Home/HomeStyle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
import { ToastContainer, toast } from "react-toastify";

const ProductOtherProducts = ({ id }) => {
  const dispatch = useDispatch();
  const [randomDatas, setRandomDatas] = useState([]);
  const cart = JSON.parse(localStorage.getItem("cartItems"));

  const request = new Request();
  useEffect(() => {
    request.getRandomDatas(id).then((res) => {
      setRandomDatas(res);
    });
  }, [id]);
  const addCart = (product) => {
    dispatch(addToCart(product));
    toast("Product added to your Cart");
  };

  return (
    <div className="mt-3">
      <div className="row">
        {randomDatas
          .filter((res) => res.id !== Number(id))
          .map((product) => (
            <Link
              to={`/${product.id}`}
              key={product.id}
              className="col-12 col-sm-6  col-md-4 col-lg-3"
            >
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
                            Add To <i className="fa-solid fa-cart-shopping"></i>
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
            </Link>
          ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductOtherProducts;
