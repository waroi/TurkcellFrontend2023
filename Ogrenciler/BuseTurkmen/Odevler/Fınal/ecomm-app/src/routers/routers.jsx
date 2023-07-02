import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import Singup from '../pages/singup/singup';
import Products from '../pages/products/products';
import DetailPage from '../pages/products detail/detail';
import Cart from '../pages/cart/cart';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:productId" element={<DetailPage />} />
        <Route path="/cart" element={<Cart />}  />
      </Routes>
    </Router>
  );
};

export default AppRouter;
