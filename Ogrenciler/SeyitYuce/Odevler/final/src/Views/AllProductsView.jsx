import React from "react";
import Products from "../Components/Products/Products";
import { useSelector } from "react-redux";
import Header from "../Components/Header/Header";

const CategoryView = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {/* {user ? ( */}
      <div>
        {/* <div key={user[0]?.id}> */}
        <div>
          <Header />
          <Products slicedNumber={20} />
        </div>
      </div>
      {/* ) : (
        <div> Please login first</div>
      )
      } */}
    </div>
  );
};

export default CategoryView;
