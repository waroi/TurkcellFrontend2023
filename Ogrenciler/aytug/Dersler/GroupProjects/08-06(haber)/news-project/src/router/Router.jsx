import { useState } from "react";
import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import News from "../views/News";

const Router = () => {
	const [country, setCountry] = useState();
	const [category, setCategory] = useState();
	const [latestNews, setLatestNews] = useState({});

	const routes = useRoutes([
		{
			path: "/",
			element: <HomeView />,
		},
		{ path: `/news`, element: <News /> },
		{ path: "/news/:id", element: <News /> },
	]);
	return routes;
};

export default Router;
