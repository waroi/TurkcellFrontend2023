import React, { useState } from 'react';
import { FiltSort } from "./filterstyled";

const FilterSort = ({ handleFilter, handleSort }) => {
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    handleFilter(selectedCategory);
  };    

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
    handleSort(selectedSortBy);
  };

  return (
    <FiltSort>
      <label>
        Filter by Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
        </select>
      </label>
      <label>
        Sort by:
        <select value={sortBy} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </label>
    </FiltSort>
  );
};

export default FilterSort;


