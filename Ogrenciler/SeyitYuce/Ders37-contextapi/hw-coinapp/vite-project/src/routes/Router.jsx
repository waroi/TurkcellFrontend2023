import { useRoutes, Navigate } from "react-router-dom";
import Home from "../Components/home/Home";
import CoinDetail from "../Components/detailPage/CoinDetail";



const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/detail/:id", element: <CoinDetail /> },

    ]);
    return routes;
};

export default Router;
