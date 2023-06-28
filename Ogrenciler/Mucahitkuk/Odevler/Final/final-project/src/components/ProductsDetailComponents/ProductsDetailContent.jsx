/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { SliderImage } from "./styled";
import Spinner from "react-bootstrap/Spinner";
import detailFrame from "../../assets/detailframe.svg";
import detailFrame2 from "../../assets/detailframe2.svg";
import communication from "../../assets/communication.png";
import detailFacebook from "../../assets/detailFacebook.svg";
import detailInstagram from "../../assets/detailInstagram.svg";
import detailTwitter from "../../assets/detailTwitter.svg";
import detailYoutube from "../../assets/detailYoutube.svg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from "react-router-dom";
import {
  PageButton,
  PageButtonTwo,
} from "../HomeComponents/HeaderContent/styled";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/actions";

export const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      dispatch(loginUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  console.log(product);

  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <Container className="rounded-3 border p-4">
      <div className="d-flex row">
        <div className="col-md-6">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
              marginBottom: "10px",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <SliderImage src={product.image} className="rounded-3" />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                className="rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                className="rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                className="rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImage
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                className="rounded-3"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                className="img-fluid rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                className="img-fluid rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                className="img-fluid rounded-3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                className="img-fluid rounded-3"
              />
            </SwiperSlide>
          </Swiper>
          <div
            style={{ background: "#FCEED5" }}
            className="d-flex row rounded-4 mt-3 justify-content-between p-1"
          >
            <div className="col-md-6 text-center">
              <img src={detailFrame} className="m-2" />
              <span>100% health guarantee for pets</span>
            </div>
            <div className="col-md-6 text-center ">
              <img src={detailFrame2} className="m-2" />
              <span>100% health guarantee for pets</span>
            </div>
          </div>
          <div className="d-flex row mt-3">
            <div className="d-flex gap-3">
              <img src={communication} />
              <span>Share: </span>
              <img src={detailFacebook} />
              <img src={detailTwitter} />
              <img src={detailInstagram} />
              <img src={detailYoutube} />
            </div>
          </div>
        </div>
        <div className="d-flex col-md-6 flex-column">
          <div>
            <Link className="text-secondary" to="/">
              Home &nbsp;
            </Link>
            <span className="text-secondary">&gt;</span>
            <Link className="text-secondary" to="/Product">
              &nbsp; Products &nbsp;
            </Link>
            <span className="text-secondary">&gt;</span>
            <span className="text-secondary">&nbsp; {product.title}</span>
          </div>
          <div className="d-flex flex-column mt-4">
            <span className="text-secondary">Product Id: #{product.id}</span>
            <p style={{ fontSize: "24px" }}>{product.title}</p>
            <p style={{ color: "#002A48", fontSize: "20px" }}>
              {product.price} Dolars
            </p>
          </div>
          <div className="d-flex flex-row gap-3 mt-1">
            {!currentUser ? (
              <Link to="/login">
                <PageButtonTwo>Login to buy</PageButtonTwo>
              </Link>
            ) : (
              <PageButtonTwo>Add to cart</PageButtonTwo>
            )}
            <PageButton>Chat with Monito</PageButton>
            {currentUser?.name === "admin" && (
              <PageButtonTwo>Edit Product</PageButtonTwo>
            )}
          </div>
          <div className="d-flex flex-row mt-4">
            <div className="d-flex col-md-6">
              <span>ID</span>
            </div>
            <div className="d-flex col-md-6">
              <span>#{product.id}</span>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row">
            <div className="d-flex col-md-6">
              <span>Category</span>
            </div>
            <div className="d-flex col-md-6">
              <span>{product.category}</span>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row">
            <div className="d-flex col-md-6">
              <span>Rating</span>
            </div>
            <div className="d-flex col-md-6">
              <span>{product.rating.rate}</span>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row">
            <div className="d-flex col-md-6">
              <span>Stock Amount</span>
            </div>
            <div className="d-flex col-md-6">
              <span>{product.rating.count}</span>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row">
            <div className="d-flex col-md-6">
              <span>Description</span>
            </div>
            <div className="d-flex col-md-6">
              <span>{product.description}</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
