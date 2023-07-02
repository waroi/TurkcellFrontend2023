import { Link, useRoutes } from "react-router-dom";
import HomeView from "../Views/HomeView";
import BtnView from "../Components/Buttons/BtnView";
import AllProductsView from "../Views/AllProductsView";
import Login from "../Views/Login";
import SignUp from "../Views/SingUp";
import ProductDetails from "../Views/ProductDetailsView";
import Cart from "../Components/Cart/Cart";
import { useSelector } from "react-redux";

const Router = () => {
  const user = useSelector((state) => state.user);
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/buttons",
      element: <BtnView />,
    },
    {
      path: "/products",
      element:
        user && user[0]?.id ? (
          <AllProductsView />
        ) : (
          <div>
            Please <Link href="/login"> login </Link> first
          </div>
        ),
    },
    {
      path: "/login",
      element:
        user && user[0]?.id ? (
          <div>
            You are already logged in. <Link to="/">Go back</Link>
          </div>
        ) : (
          <Login />
        ),
    },
    {
      path: "/signup",
      element:
        user && user[0]?.id ? <div>You are already logged in</div> : <SignUp />,
    },
    {
      path: "products/:category/:id",
      element:
        user && user[0]?.id ? (
          <ProductDetails />
        ) : (
          <div>
            Please <Link href="/login"> login </Link> first
          </div>
        ),
    },
    {
      path: "/cart",
      element:
        user && user[0]?.id ? (
          <Cart />
        ) : (
          <div>
            Please <Link href="/login"> login </Link> first
          </div>
        ),
    },
  ]);
  return routes;
};

export default Router;
