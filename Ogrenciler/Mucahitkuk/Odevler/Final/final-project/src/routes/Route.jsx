/* eslint-disable react/prop-types */
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Signup from "../views/Signup/Signup";
import Login from "../views/Login";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Productpage from "../views/Productpage";
import Cart from "../views/Cart";
import ProductDetailPage from "../views/ProductDetailPage";


const PrivateRoute = ({ path, element }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const storedUser = await localStorage.getItem("loggedInUser");
      if (!storedUser) {
        setIsLoggedIn(false);
      } 
    };
    checkLoggedIn();
  }, []); // Run only once on component mount

  
  return isLoggedIn ? (
    element
  ) : (
    <Navigate to="/Login" state={{ from: path }} replace />
  );  
};

const ProtectedCart = () => {
  return (
    <PrivateRoute
      path="/Cart"
      element={<Cart />}
    />
  );
};

const ProtectedProduct = () => {
  return (
    <PrivateRoute path="/Product" element={<Productpage />} />
  )
}

const ProtectedProductDetailPage = () => {
  return (
    <PrivateRoute path="/productsdetail/:productId" element={<ProductDetailPage />} />
  )

}

const RouteConfig = () => {

  return (
    <Routes>
      <Route path="/Product" element={<ProtectedProduct />} />
      <Route path="/cart" element={<ProtectedCart />} />
      <Route path="/productsdetail/:productId" element={<ProtectedProductDetailPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
};

export default RouteConfig;