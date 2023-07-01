import { useRoutes } from 'react-router-dom'
import Homepage from '../views/Homepage'
import Signup from '../components/GeneralForm/Singup'
import Login from '../components/GeneralForm/Login'
import Basket from '../components/basketPage/Basket'
import Products from '../views/Products'
import ProductDetail from '../components/Detail/ProductDetail'


const Router = () => {

    const routes = useRoutes([
        { path: "/", element: <Homepage /> },
        { path: "/signup", element: <Signup /> },
        { path: "/login", element: <Login /> },
        { path: "/sepet", element: <Basket /> },
        { path: "/products", element: <Products /> },
        { path: "/products/:id", element: <ProductDetail /> },
        { path: "/:id", element: <ProductDetail /> }

    ])
    return routes
}

export default Router