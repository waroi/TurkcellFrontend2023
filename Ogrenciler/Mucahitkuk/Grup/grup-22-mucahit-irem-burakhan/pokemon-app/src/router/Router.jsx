import { useRoutes } from 'react-router-dom';
import Home from '../views/Home';
import Pokemonpage from '../views/Pokemonpage';

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/Pokemonpage',
      element: <Pokemonpage />,
    },
//     {path : "/:id", 
//     element : <PokemonDetail />
//   },
//   { path: '*', element: <NotFound /> },
  ]);
  return routes;
}

export default Router;