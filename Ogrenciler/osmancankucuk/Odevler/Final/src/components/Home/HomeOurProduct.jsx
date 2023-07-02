import { WhatsNewTitle } from "./HomeStyle";
import Button from "../Button/Button";
import chevronRight from "../../img/chevron-right.png";
import { Request } from "../../requests/request";
import { useEffect, useState } from "react";
import { WhatsNewCard } from "./HomeStyle";
import gift from "../../img/gift.svg";
import {
  CardImage,
  CardContent,
  CardCap,
  CardTitle,
  CardInfo,
  CardPrice,
  DiscountInfo,
} from "./HomeStyle";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const HomeOurProduct = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 992 });
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: isSmallScreen ? 1 : 3,
    slidesToScroll: isSmallScreen ? 1 : 3,
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const data = new Request("http://localhost:3004/data");
    data.getData().then((res) => setData(res));
  }, []);

  return (
    <div>
      <div className="container d-none d-md-block">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <WhatsNewTitle>
            <div className="whatsNew-1">
              Hard to choose right products for you?
            </div>
            <div className="whatsNew-2">Our Products</div>
          </WhatsNewTitle>
          <Button
            color={"#003459"}
            title="View More"
            logo={chevronRight}
            border="1.6px solid #003459"
            background={"transparent"}
          />
        </div>
        <div className="row">
          {data?.slice(0, 4).map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.id}>
              <WhatsNewCard className="w-100">
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
                <CardContent className="d-flex flex-column w-100">
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
                  <DiscountInfo>
                    <div>
                      <div className="d-flex gap-2 discountText">
                        <img src={gift} alt="" />
                        <span>•</span>
                        <span>Check out our new deals</span>
                      </div>
                    </div>
                  </DiscountInfo>
                </CardContent>
              </WhatsNewCard>
            </div>
          ))}
        </div>

        <div className="my-5">
          <Slider {...settings}>
            {data?.slice(0, 12).map((product) => (
              <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                <WhatsNewCard style={{ minHeight: "520px", width: "100%" }}>
                  <Link
                    style={{ border: "1px solid #dce2e7" }}
                    to={`/${product?.id}`}
                    className=" w-100 text-center p-3 rounded-3 "
                  >
                    <div className="d-flex justify-content-center">
                      <CardImage
                        className="img-fluid"
                        src={product.image}
                        alt=""
                      />
                    </div>
                  </Link>
                  <CardContent className="d-flex flex-column w-100">
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

                    <DiscountInfo>
                      <div>
                        <div className="d-flex gap-2 discountText">
                          <img src={gift} alt="" />
                          <span>•</span>
                          <span>Check out our new deals</span>
                        </div>
                      </div>
                    </DiscountInfo>
                  </CardContent>
                </WhatsNewCard>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeOurProduct;
