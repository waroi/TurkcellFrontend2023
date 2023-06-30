// AppRouter.js

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Products from '../pages/Products/Products';
import HomePage from '../pages/HomePage/HomePage';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Signup from '../pages/Signup/Signup';
import Login from '../pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../redux/slices/Login';

const AppRouter = () => {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

//   useEffect(() => {
//     const storedLoggedIn = localStorage.getItem('isLoggedIn');
//     if (storedLoggedIn === 'true') {
//       dispatch(setLoggedIn(true));
//     }
//   }, [dispatch]);

const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

//   useEffect(() => {
//     const storedLoggedIn = localStorage.getItem('isLoggedIn');
//     if (storedLoggedIn === 'true') {
//         dispatch(login());
//       // Kullanıcı daha önce oturum açmışsa, oturum açmış olduğunu güncelleyin.
//       // Bunu Redux store'daki uygun action ile yapabilirsiniz.
//     }
//   }, [dispatch]);

  console.log("router page",isLoggedIn)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={ isLoggedIn ? <Products /> : <Navigate to="/login"  />} />
        <Route
          path="/products/:id"
          element={isLoggedIn ? <ProductDetail /> : <Navigate to="/login" replace />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
