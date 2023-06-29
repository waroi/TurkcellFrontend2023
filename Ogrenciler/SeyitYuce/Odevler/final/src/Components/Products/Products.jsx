import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, updateProduct } from "../../redux/slices/productSlice";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { capitalizeWords } from "../../helpers/capitalize";
import { styled } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { updateCartItems } from "../../redux/slices/cartSlice";

const Products = ({ slicedNumber }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const [sortOption, setSortOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStar, setSelectedStar] = useState("");

  // console.log(user);

  const [editProduct, setEditProduct] = useState({
    image: "",
    title: "",
    price: 0,
    category: "",
    rating: {
      rate: 0,
      count: 0,
    },
    description: "",
    stock: 0,
  });

  const sortedProducts = [...products];

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

  const categories = new Set(products.map((product) => product.category));

  // const sortedAndFilteredProducts = sortedProducts.filter((product) => {
  //   if (selectedCategory === "") {
  //     return true;
  //   } else {
  //     return product.category === selectedCategory;
  //   }
  // });

  const filteredProducts = sortedProducts.filter((product) => {
    if (selectedCategory !== "" && product.category !== selectedCategory) {
      return false;
    }

    if (selectedStar !== "") {
      const selectedStarValue = Number(selectedStar);
      if (product.rating.rate < selectedStarValue) {
        return false;
      }
    }

    return true;
  });

  const handleEditSubmit = () => {
    fetch(`http://localhost:4000/products/${editProduct.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editProduct),
    })
      .then((res) => res.json())
      .then((updatedProduct) => {
        toast.success("Product updated successfully", {
          position: "top-right",
          autoClose: 100,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
          onClose: () => {
            dispatch(updateProduct(updatedProduct));
            const updatedCart = user[0].cart.map((item) => {
              if (item.id === updatedProduct.id) {
                return { ...item, ...updatedProduct };
              }
              return item;
            });
            dispatch(updateCartItems(updatedCart));

            const modalButton = document.querySelector(
              '[data-bs-dismiss="modal"]'
            );
            if (modalButton) {
              modalButton.click();
            }
          },
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update product");
      });
  };
  const updateProductsInCart = (updatedProduct) => {
    const existingItems = user[0].cart;
    const updatedItems = existingItems.map((item) => {
      if (item.id === updatedProduct.id) {
        return { ...item, ...updatedProduct };
      }
      return item;
    });

    dispatch(updateCartItems(updatedItems));
  };

  const ProductCardImage = styled.img`
    height: 200px;
    width: 100%;
  `;

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
              {capitalizeWords(category)}
            </option>
          ))}
        </select>

        <select
          name="star"
          id=""
          onChange={(e) => setSelectedStar(e.target.value)}
        >
          <option value="">All Stars</option>
          <option value="1">1 Star and above</option>
          <option value="2">2 Stars and above</option>
          <option value="3">3 Stars and above</option>
          <option value="4">4 Stars and above</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      {filteredProducts.slice(0, slicedNumber).map((product) => {
        return (
          <div
            key={product.id}
            className="col-10 col-sm-6 col-md-4 col-lg-3 gap-4 mx-auto"
          >
            <div className="card">
              <Link
                to={`/products/${product.category.replace(/\s+/g, "-")}/${
                  product.id
                }`}
                className="card-link"
              >
                <div className="mx-auto">
                  <ProductCardImage
                    src={product.image}
                    alt=""
                    className="card-img-top w-50 mx-auto"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="card-rating d-flex gap-4">
                    <span>{product.category}</span>
                    <span>
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={product.rating.rate}
                        readOnly
                      />
                    </span>
                  </div>
                  <p className="card-text">${product.price}</p>
                </div>
              </Link>
              {user && user[0]?.role === "admin" ? (
                <div>
                  <button
                    className="edit-btn btn btn-primary"
                    onClick={() => setEditProduct(product)}
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                  >
                    Edit Product
                  </button>
                  <AddToCartButton product={product} />
                </div>
              ) : (
                <>
                  <AddToCartButton product={product} />
                </>
              )}
            </div>
            <div
              className="modal fade"
              id="editModal"
              tabIndex="-1"
              aria-labelledby="editModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="editModalLabel">
                      Edit Product
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <label htmlFor="image">Image</label>
                    <input
                      type="url"
                      className="form-control"
                      value={editProduct?.image}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          image: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editProduct?.title}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          title: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      value={editProduct?.price}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          price: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="category">Category</label>
                    <div className="w-100">
                      <select
                        name="category"
                        id=""
                        className="form-select"
                        onChange={(e) =>
                          setEditProduct({
                            ...editProduct,
                            category: e.target.value,
                          })
                        }
                      >
                        {Array.from(categories).map((category) => (
                          <option key={category} value={category}>
                            {capitalizeWords(category)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <label htmlFor="rating-rate">Rating</label>
                    <input
                      type="number"
                      className="form-control"
                      min={0.1}
                      max={5}
                      step={0.1}
                      value={editProduct?.rating.rate}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          rating: {
                            ...editProduct.rating,
                            rate: parseFloat(e.target.value),
                          },
                        })
                      }
                    />
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editProduct?.description}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          description: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="">Review Count</label>
                    <input
                      type="number"
                      className="form-control"
                      value={editProduct?.rating.count}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          rating: {
                            ...editProduct.rating,
                            count: parseFloat(e.target.value),
                          },
                        })
                      }
                    />
                    <label htmlFor="">Stock</label>
                    <input
                      type="number"
                      className="form-control"
                      value={editProduct?.stock}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          stock: parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleEditSubmit}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default Products;
