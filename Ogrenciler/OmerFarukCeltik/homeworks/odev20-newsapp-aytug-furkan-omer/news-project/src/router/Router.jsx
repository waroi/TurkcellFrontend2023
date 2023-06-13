import { useState } from "react";
import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import News from "../views/News";
import DetailNews from "../views/DetailNews";
const Router = () => {
	// const [country, setCountry] = useState();
	// const [category, setCategory] = useState();
	const [latestNews, setLatestNews] = useState();

	const routes = useRoutes([
		{
			path: "/",
			element: <HomeView setLatestNews={setLatestNews}/>,
		},
		{ path: `/news`, element: <News  latestNews={latestNews}/> },
		{ path: "/news/:id", element: <DetailNews latestNews={latestNews} /> },
	]);
	return routes;
};

export default Router;
