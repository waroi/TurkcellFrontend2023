import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Dropdown, Spinner } from "react-bootstrap";
import ProductCard from "../../ProductCard/ProductCard";
import { sortProducts } from "../../../utils/sortingUtils";
import { useLocation } from "react-router-dom";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortingOption, setSortingOption] = useState("");

  const location = useLocation();
  const searchTerm = location.state && location.state.search;


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    if (event.target.checked) {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((prevCategory) => prevCategory !== category)
      );
    }
  };

  const filterProducts = () => {
    let filteredProducts = products;

    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (searchTerm !== null) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (minPrice !== "" && maxPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= parseFloat(minPrice) &&
          product.price <= parseFloat(maxPrice)
      );
    }

    return filteredProducts;
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSortingOptionChange = (eventKey) => {
    setSortingOption(eventKey);
  };


  const filteredProducts = filterProducts();
  const sortedProducts = sortProducts(filteredProducts, sortingOption);

  if (products.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }



  return (
    <Container className="mt-5">
      <div className="d-flex row">
        <div className="col-12 col-sm-2 mb-5 mb-sm-0 flex-column">
          <h3 style={{color: "#003459"}}>Filter</h3>
          <p>Category</p>
          <div>
            <input
              type="checkbox"
              value="women's clothing"
              checked={selectedCategories.includes("women's clothing")}
              onChange={handleCategoryChange}
            />
            <span>&nbsp; Woman</span>
          </div>
          <div>
            <input
              type="checkbox"
              value="men's clothing"
              checked={selectedCategories.includes("men's clothing")}
              onChange={handleCategoryChange}
            />
            <span>&nbsp; Men</span>
          </div>
          <div>
            <input
              type="checkbox"
              value="electronics"
              checked={selectedCategories.includes("electronics")}
              onChange={handleCategoryChange}
            />
            <span>&nbsp; Electronics</span>
          </div>
          <div>
            <input
              type="checkbox"
              value="jewelery"
              checked={selectedCategories.includes("jewelery")}
              onChange={handleCategoryChange}
            />
            <span>&nbsp; Jewelry</span>
          </div>
          <hr />
          <p>Price</p>
          <div className="d-flex row">
            <input
              type="number"
              className="w-50"
              placeholder="Min"
              value={minPrice.toString()}
              onChange={handleMinPriceChange}
            />
            <input
              type="number"
              className="w-50"
              placeholder="Max"
              value={maxPrice.toString()}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
        <div className="col-sm-10 col-12">
          <div className="d-flex row">
            <div className="col-6">
              <h3 style={{color: "#003459"}}>
                Products <span>({sortedProducts.length})</span>
              </h3>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <Dropdown onSelect={handleSortingOptionChange}>
                <Dropdown.Toggle className="bg-transparent text-secondary px-5 rounded-5" style={{borderColor: "#CCD1D2"}} id="dropdown-basic">
                  Sort By {sortingOption}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="A to Z">A to Z</Dropdown.Item>
                  <Dropdown.Item eventKey="Z to A">Z to A</Dropdown.Item>
                  <Dropdown.Item eventKey="Price Low to High">
                    Price (Low to High)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Price High to Low">
                    Price (High to Low)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Ranking Low to High">
                    Ranking (Low to High)
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Ranking High to Low">
                    Ranking (High to Low)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="d-flex row gap-5 justify-content-center mt-3">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductsSection;
