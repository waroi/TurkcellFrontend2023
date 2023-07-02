import React, { useState, useEffect } from 'react';
import Trendfit from '../../assets/logo/Trendfit.png';
import './navbarStyle.scss';
import '../../style/style.scss';
import request from '../../utils/request.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux/features/searchSlice';
import { setBasket } from '../../redux/features/basketSlice';
import Basket from '../basket/basket'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })


  const handleLogout = () => {
    localStorage.removeItem('user');
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(setBasket([]));
    if (user && !isUserExpired(user)) {
      const { id } = user;
      request
        .deleteRequest(`http://localhost:3000/sessions/${id}`)
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.error('Error occurred during logout:', error);
          // Handle the error accordingly
        });
    } else {
      navigate('/login');
    }
  };

  const isUserExpired = (user) => {
    const expirationDate = new Date(user.expiration);
    return expirationDate.getTime() < Date.now();
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      dispatch(setSearch(searchTerm));
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container">
      <nav className={navbar ? "navbar active navbar-expand-lg  fixed-top" : "navbar navbar-expand-lg mt-2 fixed-top"} >
        <div className="container">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img className="navbar-logo" src={Trendfit} alt="" />
          </a>
          <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-1 mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" onClick={() => navigate('/product')}>
                  Product
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link disabled">About</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link disabled">Contact</a>
              </li>
            </ul>

            <input
              type="search"
              className="form-control rounded-5 search-input mt-2"
              id="searchInput"
              placeholder="Search something here!"
              aria-label="Search"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyPress={handleSearch}
            />
            <div className="d-flex align-items-center">
              <button
                onClick={localStorage.getItem('user') ? handleLogout : () => navigate('/login')}
                className="btn darkButton me-2"
              >
                {localStorage.getItem('user') && !isUserExpired(JSON.parse(localStorage.getItem('user')))
                  ? 'Logout'
                  : 'Login'}
              </button>

            </div>

          </div>
          <Basket />
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
