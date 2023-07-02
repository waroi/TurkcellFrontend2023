import { useRoutes } from "react-router-dom";
import HomeView from "../Views/Home/HomeView";
import ProductsView from "../Views/Products/ProductsView";
import ProductDetail from "../Views/Products/ProductDetail";
import Cart from "../Views/Cart/CartView";
import SignupView from "../Views/SignUp/SignupView";
import LoginView from "../Views/Login/LoginView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/products", element: <ProductsView /> },
    { path: "/products/:id", element: <ProductDetail /> },
    { path: "/cart", element: <Cart /> },
    { path: "/signup", element: <SignupView /> },
    { path: "/login", element: <LoginView /> },
  ]);

  return routes;
};

export default Router;
