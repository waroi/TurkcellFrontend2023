import { useRoutes } from "react-router-dom";
import HomeView from "../views/HomeView";
import PokemonView from "../views/PokemonView";
import NotFound from "../views/NotFound";

const Router = ({ store, dispatch, listPokemons }) => {
	const routes = useRoutes([
		{
			path: "/",
			element: <HomeView store={store} dispatch={dispatch} listPokemons={listPokemons} />,
		},
		{
			path: "/pokemon/:id",
			element: <PokemonView />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return routes;
};

export default Router;
