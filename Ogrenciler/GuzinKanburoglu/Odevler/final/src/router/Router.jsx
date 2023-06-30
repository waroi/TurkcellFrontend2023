// AppRouter.js

import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Products from '../pages/Products/Products';
import HomePage from '../pages/HomePage/HomePage';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { login } from '../redux/slices/Login';

const AppRouter = () => {
const storedLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={ storedLoggedIn ? <Products /> : <Navigate to="/login"  />} />
        <Route
          path="/products/:id"
          element={storedLoggedIn ? <ProductDetail /> : <Navigate to="/login"  />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
