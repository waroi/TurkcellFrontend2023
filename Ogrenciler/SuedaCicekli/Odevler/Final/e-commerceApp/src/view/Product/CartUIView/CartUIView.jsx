import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FirstCard from '../../../components/firstCard/firstCard';
import './CartUIStyle.scss';
import nextIcon from '../../../assets/icon/nextIcon.png';
import previousIcon from '../../../assets/icon/previousIcon.png';
import '../../../style/_bt_overrides.scss';

const CartUIView = ({ products, isLoading }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const searchTerm = useSelector((state) => state.search.search);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories((prevSelectedCategories) => [...prevSelectedCategories, value]);
    } else {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.filter((category) => category !== value)
      );
    }
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const sortProducts = (filteredProducts) => {
    if (sortOption === 'price-low-to-high') {
      return filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high-to-low') {
      return filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'title-a-to-z') {
      return filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'title-z-to-a') {
      return filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    }
    return filteredProducts;
  };

  const filteredProducts = products.filter((product) => {
    const isCategoryMatched = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const isPriceMatched =
      (minPrice === '' || Number(product.price) >= Number(minPrice)) &&
      (maxPrice === '' || Number(product.price) <= Number(maxPrice));
    const isSearchMatched = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return isCategoryMatched && isPriceMatched && isSearchMatched;
  });

  const getUniqueCategories = () => {
    const uniqueCategories = [...new Set(products.map((product) => product.category))];
    return uniqueCategories;
  };

  const sortedProducts = sortProducts(filteredProducts); // Sort the filtered products

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav className='container d-flex justify-content-center mt-3'>
        <ul className="pagination gap-2">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link bg-light " onClick={() => handlePageChange(currentPage - 1)}>
              <img src={previousIcon} alt="" />
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(number)}>
                {number}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link bg-light" onClick={() => handlePageChange(currentPage + 1)}>
              <img src={nextIcon} alt="" />
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <div className="container">
      <div className="row mt-5 flex-wrap">
        <div className="col-12 col-md-2 product-left">
          <p className="text-filter text-danger">Filter</p>
          <div className='category-area'>
            <h4>Category</h4>
            <div className="form-check">
              {getUniqueCategories().map((category) => (
                <div key={category} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={category}
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleCategoryChange}
                  />
                  <label className="form-check-label" htmlFor={category}>
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5>Price</h5>
            <div className="d-flex gap-2">
              <div className="form-outline">
                <input
                  type="number"
                  id="minPrice"
                  min="0"
                  className="form-control"
                  placeholder="Min"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
              </div>
              <div className="form-outline">
                <input
                  type="number"
                  id="maxPrice"
                  min="0"
                  className="form-control"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-10  product-right">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="text-filter text-danger">Product</p>
            <div className="form-outline">
              <select className="form-select" value={sortOption} onChange={handleSortOptionChange}>
                <option value="">Sort by...</option>
                <option value="price-low-to-high">Price (Low to High)</option>
                <option value="price-high-to-low">Price (High to Low)</option>
                <option value="title-a-to-z">Title (A to Z)</option>
                <option value="title-z-to-a">Title (Z to A)</option>
              </select>
            </div>
          </div>
          <div className="row">
            {isLoading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <FirstCard products={currentItems} col={4} /> //TODO bura değişecek ve liste olarak yollancak.
            )}
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Pagination */}
              {renderPagination()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartUIView;
