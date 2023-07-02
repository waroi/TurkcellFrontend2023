import { useState, useEffect } from "react";
import ProductsBanner from "../../components/ProductsBanner/ProducstBanner";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import FilterModal from "../../components/FilterModal/FilterModal";
import ProductList from "../../components/ProductList/ProductList";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const location = useLocation();
  const categories = [...new Set(products.map((product) => product.category))];
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOption, setSortOption] = useState("");
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (location.search) {
      const params = new URLSearchParams(location.search);
      const query = params.get("query");
      setQuery(query);
    } else {
      setQuery("");
    }
    window.scrollTo(300, 300);
  }, [currentPage, sortOption, checkedCategories, query, location.search]);

  const filteredProducts =
    checkedCategories.length === 0
      ? products
      : products.filter((product) =>
          checkedCategories.includes(product.category)
        );

  const searchedProducts =
    query === ""
      ? filteredProducts
      : filteredProducts.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );

  const sortProducts = () => {
    let sortedProducts = [...searchedProducts];
    if (sortOption === "priceAZ") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceZA") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    return sortedProducts;
  };

  return (
    <div className="container p-5">
      <FilterModal
        categories={categories}
        setCheckedCategories={setCheckedCategories}
        checkedCategories={checkedCategories}
      />
      <ProductsBanner />
      <ProductList
        categories={categories}
        checkedCategories={checkedCategories}
        setSortOption={setSortOption}
        searchedProducts={searchedProducts}
        sortProducts={sortProducts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={15}
        setCheckedCategories={setCheckedCategories}
      />
    </div>
  );
};

export default Products;
