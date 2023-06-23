import { useRoutes } from "react-router-dom"
import HomeView from "../views/HomeView/HomeView"
import ProductsView from "../views/ProductsView/ProductsView"
import SignUpView from "../views/SignUpView/SignUpView"
import LoginView from "../views/LoginView/LoginView"
import { useSelector } from "react-redux"
import ProductDetailView from "../views/ProductDetailView/ProductDetailView"
import CartView from "../views/CartView/CartView"
const Router = () => {

    const currentUser = useSelector((state) => state.user.user);

    const routes = useRoutes([
        { path: "/", element: <HomeView /> },
        !currentUser && { path: "/signup", element: <SignUpView /> },
        !currentUser && { path: "/login", element: <LoginView /> },
        { path: "/products", element: <ProductsView /> },
        { path: "/products/:id", element: <ProductDetailView /> },
        { path: "/cart", element: <CartView /> }

    ])

    return routes;
}

export default Router