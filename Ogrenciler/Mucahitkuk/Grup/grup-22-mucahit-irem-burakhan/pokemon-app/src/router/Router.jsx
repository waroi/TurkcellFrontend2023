import { useRoutes } from "react-router-dom";
import Home from "../views/Home";
import Pokemonpage from "../views/Pokemonpage";
import PokemonDetail from "../components/PokemonDetail/PokemonDetail";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Pokemonpage",
      element: <Pokemonpage />,
    },
    { path: "/Pokemonpage/:name", element: <PokemonDetail /> },
  ]);
  return routes;
};

export default Router;
