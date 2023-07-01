import { useRoutes } from "react-router-dom"
import HomeView from "../views/HomeView/HomeView"
import ProductsView from "../views/ProductsView/ProductsView"
import SignUpView from "../views/SignUpView/SignUpView"
import LoginView from "../views/LoginView/LoginView"
import NotFoundView from "../views/NotFoundView/NotFoundView"
import { useSelector } from "react-redux"
import ProductDetailView from "../views/ProductDetailView/ProductDetailView"
import CartView from "../views/CartView/CartView"
const Router = () => {

    const currentUser = useSelector((state) => state.user.user);

    const routes = [
        { path: "/", element: <HomeView /> },
        !currentUser && { path: "/signup", element: <SignUpView /> },
        !currentUser && { path: "/login", element: <LoginView /> },
        currentUser && { path: "/products", element: <ProductsView /> },
        currentUser && { path: "/products/:id", element: <ProductDetailView /> },
        currentUser && { path: "/cart", element: <CartView /> },
        { path: "*", element: <NotFoundView /> }
    ].filter(Boolean); // Filter out null values

    return useRoutes(routes);
}

export default Router