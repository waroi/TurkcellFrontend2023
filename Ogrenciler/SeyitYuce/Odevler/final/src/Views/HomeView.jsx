import React, { useEffect } from "react";
import Products from "../Components/Products/Products";

const HomeView = () => {
  return (
    <div className="bg-body-secondary">
      <div className="container">
        <p>header</p>
        <Products />
        <p>cta</p>
      </div>
    </div>
  );
};

export default HomeView;
