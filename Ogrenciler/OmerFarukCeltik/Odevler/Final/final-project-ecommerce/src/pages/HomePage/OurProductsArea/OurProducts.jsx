import React from "react";
import { useSelector } from "react-redux";
import HomePageCard from "../../../components/homePageCard/HomePageCard";
import { Link } from "react-router-dom";
const OurProducts = () => {
  const data = useSelector((state) => state.products);
  return <div className="container">
    <div className="row g-3">
      <div className="col-12 d-flex justify-content-between align-items-end pt-6 pb-4">
      <div>
        <h6 className="h6">Hard to choose right products for your family?</h6>
        <h4 className="h4 text-capitalize fw-semibold">Our Products</h4>
      </div>
      <div>
      <Link to="/products" className='btn btn-outline-primary rounded-pill py-2  px-175'>View More <i className="fa-solid fa-chevron-right ms-1 fa-2xs"></i></Link>
      </div>
      </div>
      {data.products ? data.products.slice(8,16).map((item) => (
        <HomePageCard key={item.id} item={item}/>
      )) : null}
    </div>
  </div>;
};

export default OurProducts;
