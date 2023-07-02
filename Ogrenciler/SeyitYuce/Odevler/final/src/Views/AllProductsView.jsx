import React from "react";
import Products from "../Components/Products/Products";
import { useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";

const CategoryView = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {user ? (
        <div>
          <Header />
          <Products slicedNumber={20} />
        </div>
      ) : (
        <div>
          Please <Link to="/login"> login </Link> first
        </div>
      )}
    </div>
  );
};

export default CategoryView;
