import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from '../../util/Request';
import { setList } from '../../redux/slices/Product';
import Card from '../../components/Card/Card';
import { Input } from '../../components/Navbar/navbarStyle';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
      getProducts().then((data) => dispatch(setList(data))); 
  }, [dispatch]);

  const handleSortalphabetically = () => {
    const sortedItems = [...products].sort((a, b) => a.title.localeCompare(b.title));
    dispatch(setList(sortedItems));
  };

  const handleSortalphabeticallyReverse = () => {
    const sortedItems = [...products].sort((a, b) => b.title.localeCompare(a.title));
    dispatch(setList(sortedItems));
  };

  const handleSortByPrice = () => {
    const sortedItems = [...products].sort((a, b) => a.price - b.price);
    dispatch(setList(sortedItems));
  };

  const handleSortByCategory = () => {
    const sortedItems = [...products].sort((a, b) => a.category.localeCompare(b.category));
    dispatch(setList(sortedItems));
  };

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((selectedCategory) => selectedCategory !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
  };

  const filteredItems = selectedCategories.length > 0
    ? products.filter((product) => selectedCategories.includes(product.category))
    : products;

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItemsForSearch = searchTerm && products.filter((product) =>
  product.title.toLowerCase().startsWith(searchTerm.toLowerCase()));

  const items = filteredItemsForSearch.length > 0 ? filteredItemsForSearch: filteredItems;
  
  return (
    <div className='d-flex justify-content-between'>
      <div className='filterSide'>
        <h4>Category</h4>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={selectedCategories.includes('electronics')}
            onChange={() => handleCheckboxChange('electronics')} />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            electronics
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={selectedCategories.includes('jewelery')}
            onChange={() => handleCheckboxChange('jewelery')} />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            jewelery
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={selectedCategories.includes("men's clothing")}
            onChange={() => handleCheckboxChange("men's clothing")} />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            men's clothing
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" checked={selectedCategories.includes("women's clothing")}
            onChange={() => handleCheckboxChange("women's clothing")} />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            women's clothing
          </label>
        </div>
      </div>
      <div>
        <div className='d-flex justify-content-between'><h2>Products</h2>
          <Input value={searchTerm}
            onChange={handleSearchChange} className="input" placeholder='Search something here!'></Input>
          <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort by
            </a>
            <ul className="dropdown-menu">
              <li><a onClick={handleSortalphabetically} className="dropdown-item" href="#">A-Z</a></li>
              <li><a onClick={handleSortalphabeticallyReverse} className="dropdown-item" href="#">Z-A</a></li>
              <li><a onClick={handleSortByPrice} className="dropdown-item" href="#">Price</a></li>
              <li><a onClick={handleSortByCategory} className="dropdown-item" href="#">Category</a></li>
              <li><a onClick={handleSortalphabetically} className="dropdown-item" href="#">Title</a></li>
            </ul>
          </div>
        </div>

        <ul>
          { items?.map((item, index) =><Link to={`/products/${item?.id}`}><li key={index}><Card product={item} /></li></Link> ) }
        </ul>
      </div>

    </div>
  )
}

export default Products