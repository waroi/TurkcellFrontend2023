import { useRoutes } from 'react-router-dom';
import CoinListSection from '../views/CoinListSection.jsx';
import HomeView from '../views/HomeView.jsx';

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomeView />,
      children: [
        { index: true, element: <CoinListSection /> },
      ],
    },
  ]);

  return routes;
};

export default Router;
