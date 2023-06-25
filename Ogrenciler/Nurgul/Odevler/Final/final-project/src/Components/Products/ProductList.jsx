import Filter from "../Products/Filter";
import Sort from "../Products/Sort";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Products/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SelectedCategories = styled.div`
  margin-top: 20px;

  p {
    margin-bottom: 5px;
  }
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [sortType, setSortType] = useState("priceAsc");
  const searchValue = useSelector((state) => state.search);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(
          response.data
            .map((el) => ({
              ...el,
              isFiltered: true,
              isSearched: el.title
                .toLowerCase()
                .includes(searchValue.toLowerCase()),
            }))
            .sort(comparePrices)
            .reverse()
        );
        console.log(searchValue);
      })

      .catch((err) => console.log("Error fetching product data:", err));
  }, []);

  const handleCategories = () => {
    if (checkedCategories.length > 0) {
      const edited = [...products];
      edited.map((product) =>
        checkedCategories.includes(product.category.toLowerCase())
          ? (product.isFiltered = true)
          : (product.isFiltered = false)
      );
      setProducts(edited);
    } else {
      const edited = [...products];
      edited.map((product) => (product.isFiltered = true));
      setProducts(edited);
    }
  };
  const handleSearch = () => {
    const edited = [...products];
    edited.map((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
        ? (product.isSearched = true)
        : (product.isSearched = false)
    );
    setProducts(edited);
  };

  const handleSort = () => {
    if (sortType == "priceDesc") setProducts([...products].sort(comparePrices));
    else if (sortType == "nameAz")
      setProducts([...products].sort(compareTitles).reverse());
    else if (sortType == "nameZa")
      setProducts([...products].sort(compareTitles));
    else if (sortType == "categoryAz")
      setProducts([...products].sort(compareCategories).reverse());
    else if (sortType == "categoryZa")
      setProducts([...products].sort(compareCategories));
    else setProducts([...products].sort(comparePrices).reverse());
  };

  const comparePrices = (a, b) => {
    if (a.price > b.price) return -1;
    else if (a.price < b.price) return 1;
    return 0;
  };

  const compareCategories = (a, b) => {
    if (a.category.toLowerCase() > b.category.toLowerCase()) return -1;
    else if (a.category.toLowerCase < b.category.toLowerCase()) return 1;
    return 0;
  };

  const compareTitles = (a, b) => {
    if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
    else if (a.title.toLowerCase < b.title.toLowerCase()) return 1;
    return 0;
  };

  useEffect(() => {
    handleCategories();
  }, [checkedCategories]);
  useEffect(() => {
    handleSort();
  }, [sortType]);
  useEffect(() => {
    handleSearch();
  }, [searchValue]);

  return (
    <Container className="container">
      <div className="row">
        <div className="col-lg-3">
          <Filter
            products={products}
            checkedCategories={checkedCategories}
            setCheckedCategories={setCheckedCategories}
          />
          <SelectedCategories>
            {checkedCategories.map((selected, i) => (
              <p key={i}>{selected}</p>
            ))}
          </SelectedCategories>
        </div>
        <div className="col-lg-9">
          <Sort sortType={sortType} setSortType={setSortType} />
          <Container className="container">
            <div className="row">
              {products?.map(
                (product) =>
                  product.isFiltered &&
                  product.isSearched && (
                    <Link
                      key={product.id}
                      className="toPageLink col-lg-4"
                      to={`/products/${product.id}`}
                    >
                      <Card product={product}></Card>
                    </Link>
                  )
              )}
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default ProductList;
