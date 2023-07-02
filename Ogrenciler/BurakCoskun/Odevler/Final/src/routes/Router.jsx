import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../views/Home/Home";
import Cart from "../views/Cart/Cart";
import ProductDetail from "../views/ProductDetail/ProductDetail";
import Products from "../views/Products/Products";
import SignUp from "../views/Signup/Signup";
import Login from "../views/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";

const Router = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route element={<PrivateRoutes user={user} />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Products />} />
      </Route>
      <Route element={<AuthRoutes user={user} />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
