import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  console.log(setProducts);
  console.log(products);

  const getProducts = () => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProducts(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      123
      {/* {products[0].title} */}
    </div>
  );
};

export default Products;
