import { Container } from "react-bootstrap";
import { PageButton } from "../HeaderContent/styled";
import { BrandImg, NewsGrid, ProductsGrid } from "./styled";
import ProductCard from "../../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeBannerTwo from "../HomeBannerTwo/HomeBannerTwo";
import bakers from "../../../assets/bakers.png"
import butchers from "../../../assets/butchers.png"
import felix from "../../../assets/felix.png"
import pedigree from "../../../assets/pedigree.png"
import sheba from "../../../assets/sheba.png"
import whiskas from "../../../assets/whiskas.png"
import HomeNews from "../HomeNews/HomeNews";

const MainContent = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      dispatch(loginUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  useEffect(() => {
    fetch("../../../../db.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <Container>
        <div className="d-flex row">
          <div className="col-md-6">
            <p>Whats new?</p>
            <h6 style={{ color: "#003459", fontSize: "24px" }}>
              Take A Look At Some Of Our Products
            </h6>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            {currentUser ? (
              <PageButton className="d-none d-md-block">
                <Link to="/Product">See All Products</Link>
              </PageButton>
            ) : (
              <PageButton className="d-none d-md-block">
                <Link to="/login">Login to see more</Link>
              </PageButton>
            )}
          </div>
        </div>
        <ProductsGrid>
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
        {currentUser ? (
          <PageButton className="d-block d-md-none w-100 mt-3">
            <Link to="/Product">See All Products</Link>
          </PageButton>
        ) : (
          <PageButton className="d-block d-md-none w-100  mt-3">
            <Link to="/login">Login to see more</Link>
          </PageButton>
        )}
      </Container>
      <HomeBanner />
      <Container className="mt-5">
        <div className="d-flex row">
          <div className="col-md-6">
            <p>Hard to choose right products for you?</p>
            <h6 style={{ color: "#003459", fontSize: "24px" }}>Our Products</h6>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            {currentUser ? (
              <PageButton className="d-none d-md-block">
                <Link to="/Product">See All Products</Link>
              </PageButton>
            ) : (
              <PageButton className="d-none d-md-block">
                <Link to="/login">Login to see more</Link>
              </PageButton>
            )}
          </div>
        </div>
        <ProductsGrid>
          {products.slice(8, 16).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
        {currentUser ? (
          <PageButton className="d-block d-md-none w-100 mt-3">
            <Link to="/Product">See All Products</Link>
          </PageButton>
        ) : (
          <PageButton className="d-block d-md-none w-100  mt-3">
            <Link to="/login">Login to see more</Link>
          </PageButton>
        )}
      </Container>
      <Container className="mt-5 d-none d-xl-block">
        <div className="d-flex row">
          <div className="col-md-6">
            <p>
              Proud to be part of a{" "}
              <span style={{ color: "#003459", fontSize: "24px" }}>
                Helping Hand
              </span>
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            {currentUser ? (
              <PageButton className="d-none d-md-block">
                <Link to="/Product">See All Products</Link>
              </PageButton>
            ) : (
              <PageButton className="d-none d-md-block">
                <Link to="/login">Login to see more</Link>
              </PageButton>
            )}
          </div>
        </div>
        <div className="d-flex row justify-content-center align-items-center mt-5 bg-white p-3 border">
          <div className="d-flex justify-content-between">
            <BrandImg src={bakers} alt="" />
            <BrandImg src={butchers} alt="" />
            <BrandImg src={felix} alt="" />
            <BrandImg src={pedigree} alt="" />
            <BrandImg src={sheba} alt="" />
            <BrandImg src={whiskas} alt="" />
          </div>
        </div>
      </Container>
      <HomeBannerTwo />
      <Container className="mt-5">
        <div className="d-flex row">
          <div className="col-md-6">
            <p>You already know?</p>
            <h6 style={{ color: "#003459", fontSize: "24px" }}>Useful Our Products Knowledge</h6>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            {currentUser ? (
              <PageButton className="d-none d-md-block">
                <Link to="/Product">See All Products</Link>
              </PageButton>
            ) : (
              <PageButton className="d-none d-md-block">
                <Link to="/login">Login to see more</Link>
              </PageButton>
            )}
          </div>
        </div>
      <Container>
        <NewsGrid>
        <HomeNews />
        </NewsGrid>
        </Container>
        {currentUser ? (
          <PageButton className="d-block d-md-none w-100 mt-3">
            <Link to="/Product">See All Products</Link>
          </PageButton>
        ) : (
          <PageButton className="d-block d-md-none w-100  mt-3">
            <Link to="/login">Login to see more</Link>
          </PageButton>
        )}
      </Container>
    </>
  );
};

export default MainContent;
