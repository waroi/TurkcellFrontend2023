import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Product/Products";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Cart from "../Pages/Cart/Cart";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
