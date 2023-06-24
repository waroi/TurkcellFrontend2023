import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const Products = ({ slicedNumber }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // console.log(setProducts);
  console.log(user);

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
    <div className="row">
      {products.slice(0, slicedNumber).map((product) => {
        return (
          <>
            <Link
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              to={`/product/${product.id}`}
            >
              <img src={product.image} alt="" width="100" height="100" />
              <div>{product.title}</div>
              <div className="rating d-flex gap-4">
                <span>{product.category}</span>
                <span>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={product.rating.rate}
                    readOnly
                  />
                </span>
              </div>
              <p>${product.price}</p>
            </Link>
            {user && user[0]?.role == "admin" && (
              <span className="edit">edit</span>
            )}
            {/* <button className="edit-btn">Edit Product</button> */}
            {/* <button>Add to cart</button> */}
          </>
        );
      })}
    </div>
  );
};

export default Products;
