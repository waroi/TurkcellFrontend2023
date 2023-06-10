import { useRoutes, Navigate } from "react-router-dom"
import HomeView from "../views/HomeView";
import userRouter from "./userRouter";
import ParameterView from "../views/ParameterView";
import NewView from "../views/NewView";
import SportNewView from "../views/SportNewView";
import EconomyNewView from "../views/EconomyNewView";
// import UserView from "../views/UserView";

const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <HomeView /> },
        userRouter,
        { path: "/parameter/:id", element: <ParameterView /> },
        {
            path: "/haberler/", element: <NewView />, children: [
                { index: true, element: <Navigate to="spor" /> },
                {
                    path: "spor", element: <SportNewView />, children: [
                        { path: ":name", element: <SportNewView /> }
                    ]
                },
                { path: "ekonomi", element: <EconomyNewView /> }
            ]
        }
    ]);

    return routes
}

export default Router