import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import CurrencyView from "../views/CurrencyView";
import NotFound from "../views/NotFound";

const Router = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <HomeView />,
		},
		{
			path: "/coins/:id",
			element: <CurrencyView />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return routes;
};

export default Router;
