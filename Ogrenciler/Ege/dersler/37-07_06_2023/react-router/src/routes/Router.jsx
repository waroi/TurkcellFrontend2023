import { useRoutes } from "react-router-dom"
import HomeView from "../views/HomeView";
import userRouter from "./userRouter";
import ParameterView from "../views/ParameterView";
// import UserView from "../views/UserView";

const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <HomeView /> }, userRouter,
        { path: "/parameter/:id", element: <ParameterView /> }
    ]);

    return routes
}

export default Router