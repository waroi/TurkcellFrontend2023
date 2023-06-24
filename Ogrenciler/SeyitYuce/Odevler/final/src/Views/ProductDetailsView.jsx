import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);

  console.log(id);

  // if (products.length === 0) {
  //   return;
  // } else {
  //   return (
  //     <div>
  //       <h2>{products[id - 1].title}</h2>
  //     </div>
  //   );
  // }

  return (
    <div>
      {products && (
        <div>
          <h2>{products[id - 1].title}</h2>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
