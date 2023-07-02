import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { capitalizeWords } from "../helpers/capitalize";
import RandomProducts from "../Components/RandomProducts/RandomProducts";
import AddToCartButton from "../Components/AddToCartButton/AddToCartButton";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";
import Buttons from "../Components/Buttons/Buttons";
import { BiChevronRightCircle } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";

const ProductDetails = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const user = useSelector((state) => state.user);

  const getProducts = () => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProducts();
  }, [id]);

  const StyledImageDiv = styled.div`
    height: 300px;
  `;
  const StyledProdDetTitle = styled.h2`
    color: var(--neutral-color-100, #00171f);
    font-size: 24px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
  `;
  const StyledProdDetPrice = styled.h4`
    color: var(--primary-color-dark-blue-80, #002a48);
    font-size: 20px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  `;
  const StyledProdTableTitle = styled.td`
    color: var(--neutral-color-60, #667479);
    font-size: 14px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    width: 110px;
  `;
  const StyledProdTableRes = styled.td`
    color: #667479;
    font-size: 14px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    padding: 14px 12px;
  `;

  const StyledProdTableRow = styled.tr`
    border-bottom: 1px solid #e5e5e5;
    padding: 100px;
  `;

  const StyledCtaDiv = styled.div`
    border-radius: 10px;
    background: var(
      --linear,
      linear-gradient(134deg, #fceed5 6.17%, #fceed5 75.14%, #ffe7ba 100%)
    );
    padding: 14px 5px;
    margin-bottom: 44px;
  `;
  const StyledCtaP = styled.p`
    color: var(--primary-color-dark-blue-80, #002a48);
    font-size: 14px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  `;

  return (
    <div className="container">
      {user ? (
        <div>
          {product && (
            <div className="d-flex flex-column flex-lg-row gap-4">
              <div>
                <Carousel
                  animationHandler="fade"
                  swipeable={true}
                  showThumbs={true}
                  showIndicators={true}
                  showStatus={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  showArrows={true}
                  className="productCarousel"
                >
                  <StyledImageDiv>
                    <img
                      src={product.image}
                      className="h-100 object-fit-contain "
                    />
                  </StyledImageDiv>
                  <StyledImageDiv>
                    <img
                      src="https://picsum.photos/200"
                      className="h-100 object-fit-contain"
                    />
                  </StyledImageDiv>
                  <StyledImageDiv>
                    <img
                      src="https://picsum.photos/200"
                      className="h-100 object-fit-contain"
                    />
                  </StyledImageDiv>
                  <StyledImageDiv>
                    <img
                      src="https://picsum.photos/200"
                      className="h-100 object-fit-contain"
                    />
                  </StyledImageDiv>
                  <StyledImageDiv>
                    <img
                      src="https://picsum.photos/200"
                      className="h-100 object-fit-contain"
                    />
                  </StyledImageDiv>
                </Carousel>
                <StyledCtaDiv className="container d-flex gap-3 d-none d-lg-inline-flex">
                  <StyledCtaP>
                    <FaShippingFast /> 100% shipment guarantee for products
                  </StyledCtaP>
                  <StyledCtaP>
                    <MdOutlineHighQuality /> 100% guarantee of quality
                  </StyledCtaP>
                </StyledCtaDiv>
              </div>
              <div>
                <div>
                  <nav
                    style={{ "--bs-breadcrumb-divider": "'>'" }}
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link className="text-decoration-none" to={"/"}>
                          Home
                        </Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link className="text-decoration-none" to={"/products"}>
                          Products
                        </Link>
                      </li>
                      <li className="breadcrumb-item">
                        {capitalizeWords(product.category)}
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {product.title}
                      </li>
                    </ol>
                  </nav>
                </div>
                <StyledProdDetTitle>{product.title}</StyledProdDetTitle>
                <StyledProdDetPrice>${product.price}</StyledProdDetPrice>
                {user && user[0]?.role === "admin" ? (
                  <div className="d-flex flex-row">
                    <Buttons
                      variation="textIconLeft btnLarge btn1"
                      icon={<BiChevronRightCircle />}
                    >
                      Edit Product
                    </Buttons>
                    <Buttons
                      variation="textIconLeft btnLarge btn6"
                      icon={<BsCartPlus />}
                    >
                      <AddToCartButton product={product} />
                    </Buttons>
                  </div>
                ) : (
                  <Buttons
                    variation="textIconLeft btnLarge btn6"
                    icon={<BsCartPlus />}
                  >
                    <AddToCartButton product={product} />
                  </Buttons>
                )}
                <div className="mb-5">
                  <h5>Information</h5>
                  <table>
                    <tbody>
                      <StyledProdTableRow>
                        <StyledProdTableTitle>Category</StyledProdTableTitle>
                        <td>:</td>
                        <StyledProdTableRes>
                          {capitalizeWords(product.category)}
                        </StyledProdTableRes>
                      </StyledProdTableRow>
                      <StyledProdTableRow>
                        <StyledProdTableTitle>Rating</StyledProdTableTitle>
                        <td>:</td>
                        <StyledProdTableRes className="d-flex">
                          <Rating
                            style={{ maxWidth: 100 }}
                            value={product.rating.rate}
                            readOnly
                          />
                          <span>({product.rating.rate})</span>
                        </StyledProdTableRes>
                      </StyledProdTableRow>
                      <StyledProdTableRow>
                        <StyledProdTableTitle>Reviews</StyledProdTableTitle>
                        <td>:</td>
                        <StyledProdTableRes>
                          {product.rating.count}
                        </StyledProdTableRes>
                      </StyledProdTableRow>
                      <StyledProdTableRow>
                        <StyledProdTableTitle>Stock</StyledProdTableTitle>
                        <td>:</td>
                        <StyledProdTableRes>{product.stock}</StyledProdTableRes>
                      </StyledProdTableRow>
                      <StyledProdTableRow>
                        <StyledProdTableTitle>Description</StyledProdTableTitle>
                        <td>:</td>
                        <StyledProdTableRes className="text-center">
                          {product.description}
                        </StyledProdTableRes>
                      </StyledProdTableRow>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          <StyledCtaDiv className="container d-block d-lg-none">
            <StyledCtaP>
              <FaShippingFast /> 100% shipment guarantee for products
            </StyledCtaP>
            <StyledCtaP>
              <MdOutlineHighQuality /> 100% guarantee of quality
            </StyledCtaP>
          </StyledCtaDiv>
          <RandomProducts />
        </div>
      ) : (
        <div>
          Please <Link to="/login"> login </Link> first
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
