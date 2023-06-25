import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const Products = ({ slicedNumber }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const [sortOption, setSortOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const sortedProducts = [...products];

  switch (sortOption) {
    case "default":
      sortedProducts.sort((a, b) => a.id - b.id);
      break;
    case "cheap":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "expensive":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "titleatoz":
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "titleztoa":
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "categoryatoz":
      sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
      break;
    case "categoryztoa":
      sortedProducts.sort((a, b) => b.category.localeCompare(a.category));
      break;
  }

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "") {
      // No category selected, show all products
      return true;
    } else {
      // Filter by selected category
      return product.category === selectedCategory;
    }
  });

  filteredProducts.slice(0, slicedNumber).map((product) => {
    // Rendering logic for filtered products...
  });

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

  const categories = new Set(products.map((product) => product.category));
  // console.log(categories);

  const sortedAndFilteredProducts = sortedProducts.filter((product) => {
    if (selectedCategory === "") {
      // No category selected, show all products
      return true;
    } else {
      // Filter by selected category
      return product.category === selectedCategory;
    }
  });

  return (
    <div className="row">
      <div>
        <select
          name="sort"
          id=""
          className="col-3"
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="cheap">Cheap first</option>
          <option value="expensive">Expensive first</option>
          <option value="titleatoz">Title (a-z)</option>
          <option value="titleztoa">Title (z-a)</option>
          <option value="categoryatoz">Category (a-z)</option>
          <option value="categoryztoa">Category (z-a)</option>
        </select>

        <select
          name="category"
          id=""
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {Array.from(categories).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {sortedAndFilteredProducts.slice(0, slicedNumber).map((product) => {
        return (
          <div key={product.id}>
            <Link
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              to={`/products/${product.category.replace(/\s+/g, "-")}/${
                product.id
              }`}
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
          </div>
        );
      })}
    </div>
  );
};

export default Products;
