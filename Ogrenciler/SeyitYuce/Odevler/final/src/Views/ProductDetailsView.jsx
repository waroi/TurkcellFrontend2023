import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setProducts } from "../redux/slices/productsSlice";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { capitalizeWords } from "../helpers/capitalize";
import RandomProducts from "../Components/RandomProducts/RandomProducts";

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
        console.log(data);
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

  return (
    <div className="container">
      {/* {user ? ( */}
      <div>
        {product && (
          <div>
            <Carousel
              animationHandler="fade"
              swipeable={true}
              showThumbs={true}
              showIndicators={true}
              showStatus={true}
              infiniteLoop={true}
              autoPlay={true}
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
            <div>
              <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={"/products"}>Products</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="#">{capitalizeWords(product.category)}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {product.title}
                  </li>
                </ol>
              </nav>
            </div>
            <h2>{product.title}</h2>
            <h4>${product.price}</h4>
            <button className="btn btn-primary">Add to cart</button>
            <div className="border">
              <h5>Information</h5>
              <table>
                <tbody>
                  <tr>
                    <td>Category</td>
                    <td>{product.category}</td>
                  </tr>
                  <tr>
                    <td>Rating</td>
                    <td>
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={product.rating.rate}
                        readOnly
                      />
                      <span>({product.rating.rate})</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Reviews</td>
                    <td>{product.rating.count}</td>
                  </tr>
                  <tr>
                    <td>Stock</td>
                    <td>{product.stock}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{product.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            Random products
          </div>
        )}
      </div>
      {/* ) : (
        <div>
          Please <Link to="/login"> login </Link> first
        </div>
      )} */}
      <RandomProducts />
    </div>
  );
};

export default ProductDetails;
