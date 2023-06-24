import React, { useEffect, useState } from "react";
import Products from "../Components/Products/Products";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div className="bg-body-secondary">
      <div className="container">
        <p>header</p>
        <div>
          <Products slicedNumber={8} />
          <Link className="btn btn-primary" to={"/products"}>
            View All
          </Link>
        </div>
        <p>cta</p>
      </div>
    </div>
  );
};

export default HomeView;
