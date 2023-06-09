import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import ParameterView from "../views/ParameterView";
import userRouter from "./userRouter";

const Router = () => {
	const routes = useRoutes([
		{ path: "/", element: <HomeView /> },
		userRouter,
		{ path: "/parameter/:id", element: <ParameterView /> },
	]);
	return routes;
};

export default Router;
