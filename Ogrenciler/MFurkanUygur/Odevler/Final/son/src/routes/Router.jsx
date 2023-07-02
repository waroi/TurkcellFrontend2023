import { useRoutes } from 'react-router-dom'
import ProductDetail from '../components/Detail/ProductDetail'
import Signup from '../components/GeneralForm/Singup'
import Basket from '../components/basketPage/Basket'
import Login from '../components/GeneralForm/Login'
import Homepage from '../views/Homepage'
import Products from '../views/Products'


const Router = () => {

    const routes = useRoutes([
        { path: "/", element: <Homepage /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
        { path: "/sepet", element: <Basket /> },
        { path: "/products", element: <Products /> },
        { path: "/products/:id", element: <ProductDetail /> },
        { path: "/:id", element: <ProductDetail /> },
    ])
    return routes
}

export default Router