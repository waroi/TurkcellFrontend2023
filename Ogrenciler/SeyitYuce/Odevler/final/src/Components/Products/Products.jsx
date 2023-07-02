import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, updateProduct } from "../../redux/slices/productSlice";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import { updateCartItems } from "../../redux/slices/cartSlice";
import ProductFilterSort from "../FilterSort/FilterSort";
import { AiOutlineEdit } from "react-icons/ai";
import Buttons from "../Buttons/Buttons";
import { BiChevronRightCircle } from "react-icons/bi";
import EditModal from "../EditModal/EditModal";
import {
  ProductCardImage,
  ProductTitle,
  ProductPrice,
  ProductAttributeCat,
  ProductAttributeRating,
  ProductAttributesRes,
  ProductEditBtn,
} from "./StyledComponents";

const Products = ({ slicedNumber }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStar, setSelectedStar] = useState("");
  const location = useLocation();

  const isProductsPage = location.pathname === "/products";

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
    fetch(`http://localhost:4000/products`)
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

  const handleEditProduct = (product) => {
    setEditProduct(product);
  };
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
            updateProductsInCart(updatedProduct);

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

  const ProductCard = styled.div`
    display: inline-flex;
    padding: 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  `;

  const showFilters = window.location.pathname.endsWith("/products");

  return (
    <div className="d-flex flex-column flex-md-row container">
      {showFilters && (
        <div className="col-12 col-md-3 g-2 mt-3">
          <ProductFilterSort
            categories={Array.from(categories)}
            setSortOption={setSortOption}
            setSelectedCategory={setSelectedCategory}
            setSelectedStar={setSelectedStar}
          />
        </div>
      )}
      <div className={`col-${isProductsPage ? 9 : 12} row flex-wrap`}>
        {filteredProducts.slice(0, slicedNumber).map((product) => {
          return (
            <div
              key={product.id}
              className="col-6 col-md-6 col-lg-3 my-3 justify-content-between"
            >
              <ProductCard className="card w-100">
                <Link
                  to={`/products/${product.category.replace(/\s+/g, "-")}/${
                    product.id
                  }`}
                  className="card-link text-decoration-none mb-3"
                >
                  <div className="mx-auto col-12 text-center">
                    <ProductCardImage
                      src={product.image}
                      alt=""
                      product={product}
                    />
                  </div>
                  <div className="card-body ">
                    <ProductTitle className="card-title " product={product}>
                      {product.title}
                    </ProductTitle>
                    <div className="card-rating">
                      <div className="d-flex gap-1 mb-1">
                        <ProductAttributeCat>Category:</ProductAttributeCat>
                        <ProductAttributesRes product={product}>
                          {product.category}
                        </ProductAttributesRes>
                      </div>
                      <div className="d-flex gap-1 mb-2">
                        <ProductAttributeRating>Rating:</ProductAttributeRating>
                        <Rating
                          style={{ maxWidth: 50 }}
                          value={product.rating.rate}
                          readOnly
                        />
                      </div>
                      <ProductPrice className="card-text" product={product}>
                        {product.price}
                      </ProductPrice>
                    </div>
                  </div>
                </Link>
                {user && user[0]?.role === "admin" ? (
                  <div className="w-100">
                    <ProductEditBtn
                      product={product}
                      setEditProduct={setEditProduct}
                    >
                      <AiOutlineEdit className="ms-3 me-2 " />
                      Edit Product
                    </ProductEditBtn>
                    <Buttons
                      variation="textIconLeft btnLarge btn6 w-100 lh-5"
                      icon={<BiChevronRightCircle />}
                    >
                      <AddToCartButton product={product} />
                    </Buttons>
                  </div>
                ) : (
                  <>
                    <Buttons
                      variation="textIconLeft btnLarge btn6 w-100 lh-5"
                      icon={<BiChevronRightCircle />}
                    >
                      <AddToCartButton product={product} />
                    </Buttons>
                  </>
                )}
              </ProductCard>
              <EditModal
                editProduct={editProduct}
                setEditProduct={setEditProduct}
                handleEditSubmit={handleEditSubmit}
                categories={categories}
              />
            </div>
          );
        })}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Products;
