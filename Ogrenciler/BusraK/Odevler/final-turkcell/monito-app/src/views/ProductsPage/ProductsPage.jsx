import React, { useState, useEffect } from "react";
import CategoryFilter from "../../components/Filters/CategoryFilter";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setLoginStatus } from "../../redux/slices/mainSlice";
import { addToCart, updateCart } from "../../redux/slices/cartSlice";
import {
  ActivePage,
  Ul,
  CategoryList,
  ProductTop,
  ProductLeft,
  MainDiv,
  MobileFilter,
} from "./ProductsPageStyle";
import { toast } from "react-toastify";
import ProductsBanner from "../../components/ProductsBanner/ProductsBanner";
const ProductsPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [resultCount, setResultCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");
  const dispatch = useDispatch();
  const { username } = useParams();
  const isLoggedIn = useSelector((state) => state.root.isLogin);

  const [showSortOptions, setShowSortOptions] = useState(false);

  const handleImageClick = () => {
    setShowSortOptions(!showSortOptions);
  };

  const handleAddToCart = async (product) => {
    if (!isLoggedIn) {
      return;
    }
    const cartItem = {
      id: product.id,
      name: product.username,
      price: product.price,
      quantity: 1,
      stock: product.rating.count,
      image: product.image,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/carts?userId=${username}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart items.");
      }

      const cartItems = await response.json();
      const existingCart = cartItems.find((cart) => cart.userId === username);

      if (existingCart) {
        const existingItem = existingCart.items.find(
          (item) => item.id === cartItem.id
        );

        if (existingItem) {
          const updatedItems = existingCart.items.map((item) => {
            if (item.id === cartItem.id) {
              if (item.quantity < cartItem.stock) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                toast.error("There is no more stock for this product.");
                return item;
              }
            }

            return item;
          });

          const updateResponse = await fetch(
            `http://localhost:3000/carts/${existingCart.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: existingCart.id,
                userId: existingCart.userId,
                items: updatedItems,
              }),
            }
          );

          if (!updateResponse.ok) {
            throw new Error("Failed to update cart on the server.");
          }

          dispatch(updateCart({ userId: username, items: updatedItems }));
        } else {
          const updatedItems = [...existingCart.items, cartItem];

          const updateResponse = await fetch(
            `http://localhost:3000/carts/${existingCart.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: existingCart.id,
                userId: existingCart.userId,
                items: updatedItems,
              }),
            }
          );

          if (!updateResponse.ok) {
            throw new Error("Failed to update cart on the server.");
          }

          dispatch(updateCart({ userId: username, items: updatedItems }));
        }
      } else {
        const createResponse = await fetch("http://localhost:3000/carts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: username,
            items: [cartItem],
          }),
        });

        if (!createResponse.ok) {
          throw new Error("Failed to create cart on the server.");
        }

        dispatch(addToCart({ userId: username, items: [cartItem] }));
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (response.ok) {
          const data = await response.json();
          if (searchQuery) {
            const filteredProducts = data.filter((product) =>
              product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setProducts(filteredProducts);
          } else {
            setProducts(data);
          }
        } else {
          throw new Error("Product fetch failed");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users?username=${username}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const user = data[0];
            dispatch(setUsername(user.username));
            dispatch(setLoginStatus(user.isLogin));
          }
        } else {
          throw new Error("Failed to fetch user information");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    const checkUserSession = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users?isLogin=true`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            const user = data[0];
            dispatch(setUsername(user.username));
            dispatch(setLoginStatus(true));
          }
        } else {
          throw new Error("Failed to check user session");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    if (isLoggedIn && username === "") {
      fetchUser();
    } else if (!isLoggedIn) {
      checkUserSession();
    }
  }, [isLoggedIn, username, dispatch]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const priceMatch =
        (priceMin === "" || product.price >= priceMin) &&
        (priceMax === "" || product.price <= priceMax);

      return categoryMatch && priceMatch;
    });

    setResultCount(filteredProducts.length);
  }, [selectedCategories, sort, priceMin, priceMax, products]);

  const handleCategorySelect = (event) => {
    const { value } = event.target;
    let updatedCategories = [];

    if (value === "all") {
      updatedCategories =
        selectedCategories.length === 4
          ? []
          : ["women's clothing", "men's clothing", "jewelery", "electronics"];
    } else {
      if (selectedCategories.includes(value)) {
        updatedCategories = selectedCategories.filter(
          (category) => category !== value
        );
      } else {
        updatedCategories = [...selectedCategories, value];
      }
    }

    setSelectedCategories(updatedCategories);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handlePriceMinChange = (event) => {
    const minPrice = event.target.value;
    setPriceMin(minPrice !== "" ? parseFloat(minPrice) : "");
  };

  const handlePriceMaxChange = (event) => {
    const maxPrice = event.target.value;
    setPriceMax(maxPrice !== "" ? parseFloat(maxPrice) : "");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const path = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    {
      title: searchQuery ? `Search: ${searchQuery}` : "All Products",
      url: "#",
    },
  ];
  const filters = [];

  if (selectedCategories.length > 0) {
    filters.push({ title: "Categories", value: selectedCategories.join(", ") });
  }

  if (priceMin !== "" || priceMax !== "") {
    const priceFilter = `Price: ${priceMin !== "" ? `$${priceMin}` : "Min"} - ${
      priceMax !== "" ? `$${priceMax}` : "Max"
    }`;
    filters.push({ title: "Price Range", value: priceFilter });
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="container pt-3 ">
      <ProductsBanner />
      <Breadcrumb className="px-5 pt-5">
        {path.map((item, index) => (
          <Breadcrumb.Item
            key={index}
            href={item.url}
            active={index === path.length - 1}
          >
            {item.title}
          </Breadcrumb.Item>
        ))}

        {filters.map((filter, index) => (
          <Breadcrumb.Item key={index} active>
            {filter.title}: {filter.value}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>

      <MainDiv className="d-flex col-md-11 gap-0 ">
        <ProductLeft className="col-2">
          <h1>Filter</h1>
          <CategoryList className="border-bottom pb-4">
            <h3>Categories</h3>
            <label>
              <input
                type="checkbox"
                value="women's clothing"
                checked={selectedCategories.includes("women's clothing")}
                onChange={handleCategorySelect}
              />
              Women's Clothing
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="men's clothing"
                checked={selectedCategories.includes("men's clothing")}
                onChange={handleCategorySelect}
              />
              Men's Clothing
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="jewelery"
                checked={selectedCategories.includes("jewelery")}
                onChange={handleCategorySelect}
              />
              Jewelery
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="electronics"
                checked={selectedCategories.includes("electronics")}
                onChange={handleCategorySelect}
              />
              Electronics
            </label>
          </CategoryList>

          <div className="d-flex align-items-start flex-column">
            <h3>Price Range</h3>
            <div className="d-flex row gap-5">
              <label className="label">
                <input
                  type="number"
                  min={0}
                  placeholder="min"
                  value={priceMin}
                  onChange={handlePriceMinChange}
                />
              </label>
              <br />
              <label className="label">
                <input
                  type="number"
                  min={0}
                  placeholder="max"
                  value={priceMax}
                  onChange={handlePriceMaxChange}
                />
              </label>
            </div>
          </div>
        </ProductLeft>

        <div className="d-flex col-12 row">
          <ProductTop className="d-flex justify-content-between px-5">
            <div className="d-flex">
              <h1>Products </h1>
              <p>{resultCount} products</p>
            </div>

            <div className="filter-sorter ps-5">
              <select value={sort} onChange={handleSortChange}>
                <option value="">None</option>
                <option value="priceAZ">Price A-Z</option>
                <option value="priceZA">Price Z-A</option>
                <option value="titleAZ">Title A-Z</option>
                <option value="titleZA">Title Z-A</option>
                <option value="categoryAZ">Category A-Z</option>
                <option value="categoryZA">Category Z-A</option>
              </select>
              <MobileFilter>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <img
                    src="../../src/assets/Icon/Filter.png"
                    alt="Image"
                    onClick={handleImageClick}
                  />
                  {showSortOptions && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: 999,
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        padding: "10px",
                      }}
                    >
                      <select
                        className="d-flex  category-select "
                        value={selectedCategories}
                        onChange={handleCategorySelect}
                        multiple
                      >
                        <option value="all">All</option>
                        <option value="women's clothing">
                          Women's Clothing
                        </option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="electronics">Electronics</option>
                      </select>
                    </div>
                  )}
                </div>
                <h1>Filter</h1>
              </MobileFilter>
            </div>
          </ProductTop>

          <CategoryFilter
            limit={20}
            categories={selectedCategories}
            products={currentProducts}
            sort={sort}
            priceMin={priceMin}
            priceMax={priceMax}
            handleAddToCart={handleAddToCart}
            username={username}
            searchQuery={searchQuery}
          />
        </div>
      </MainDiv>
      {totalPages > 1 &&
        products.length > productsPerPage &&
        products.length >= 15 && (
          <Ul className="pagination pagination-sm justify-content-center mt-5">
            <li className="page-item">
              <a
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                {" <"}
              </a>
            </li>
            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  index + 1 === currentPage ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                <ActivePage
                  className={`page-link ${
                    index + 1 === currentPage ? "active-page" : ""
                  }`}
                  href="#"
                >
                  {index + 1}
                </ActivePage>
              </li>
            ))}
            <li className="page-item ">
              <a
                className="page-link  border no-border"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                {" >"}
              </a>
            </li>
          </Ul>
        )}
    </div>
  );
};

export default ProductsPage;
