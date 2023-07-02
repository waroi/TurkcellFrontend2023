import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Rating } from "@smastrom/react-rating";
import { ToastContainer, toast } from "react-toastify";
import {
  ProductsNewWrapper,
  ProductsNewContainer,
  Image,
  Title,
  Category,
  Price,
  Buttons,
} from "./CategoryFilter.style";
import StButton from "../Button/Button";

const CategoryFilter = ({
  limit,
  categories,
  products,
  sort,
  priceMin,
  priceMax,
  handleAddToCart,
  username,
  searchQuery,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [numDisplayedProducts, setNumDisplayedProducts] = useState(limit);
  const isLoggedIn = useSelector((state) => state.root.isLogin);

  useEffect(() => {
    const sortProducts = (products) => {
      switch (sort) {
        case "priceAZ":
          return products.sort((a, b) => a.price - b.price);
        case "priceZA":
          return products.sort((a, b) => b.price - a.price);
        case "titleAZ":
          return products.sort((a, b) => a.title.localeCompare(b.title));
        case "titleZA":
          return products.sort((a, b) => b.title.localeCompare(a.title));
        case "categoryAZ":
          return products.sort((a, b) => a.category.localeCompare(b.category));
        case "categoryZA":
          return products.sort((a, b) => b.category.localeCompare(a.category));
        default:
          return products;
      }
    };

    const filterProducts = () => {
      let filtered = [];
      if (categories.length === 0) {
        filtered = sortProducts(products.slice(0, limit));
      } else {
        filtered = sortProducts(
          products.filter((product) => categories.includes(product.category))
        );
      }

      filtered =
        priceMin === "" && priceMax === ""
          ? filtered
          : filtered.filter(
              (product) =>
                (priceMin === "" || product.price >= priceMin) &&
                (priceMax === "" || product.price <= priceMax)
            );

      if (searchQuery && searchQuery.trim() !== "") {
        const query = searchQuery.trim().toLowerCase();
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(query)
        );
      }

      return filtered;
    };

    setTimeout(() => {
      const filtered = filterProducts();
      setFilteredProducts(filtered);
      setNumDisplayedProducts(limit);
      setIsLoading(false);
    }, 500);
  }, [categories, products, sort, priceMin, priceMax, limit, searchQuery]);

  if (isLoading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const handleLinkClick = () => {
    toast.success("Successfully redirected to the detail page.");
  };

  return (
    <>
      <ToastContainer />
      <ProductsNewWrapper className="row row-cols-2 ">
        {filteredProducts.slice(0, numDisplayedProducts).map((product) => (
          <div key={product.id} className="col">
            <ProductsNewContainer>
              <Image src={product.image} className="card-img-top" />
              <div className="card-body">
                <Title className="card-title">{product.title}</Title>
                <Category>
                  Genre: <p>{product.category}</p>
                </Category>
                <Category>
                  Rate: <p>{product.rating.rate}</p>
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={product.rating.rate}
                    readOnly
                  />
                </Category>
                <Category>
                  Stock: <p>{product.rating.count}</p>
                </Category>
                <Price>Price: {product.price} $</Price>
                {isLoggedIn && (
                  <Buttons className="d-flex gap-2 mb-3 ">
                    <StButton
                      type="buy-button"
                      text="Buy Now"
                      onClick={() => handleAddToCart(product)}
                    />
                    <Link
                      to={`/home/${username}/products/${product.id}`}
                      onClick={handleLinkClick}
                    >
                      <StButton type="detail-button" text="See Details" />
                    </Link>
                  </Buttons>
                )}
              </div>
            </ProductsNewContainer>
          </div>
        ))}
      </ProductsNewWrapper>
    </>
  );
};

export default CategoryFilter;
