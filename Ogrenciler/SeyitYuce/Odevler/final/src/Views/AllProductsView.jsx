import React from "react";
import Products from "../Components/Products/Products";
import { useSelector } from "react-redux";

const CategoryView = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      {/* {user ? ( */}
      <div>
        {/* <div key={user[0]?.id}> */}
        <div>
          header sort & filters
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
