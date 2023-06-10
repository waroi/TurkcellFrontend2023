import {useRoutes} from 'react-router-dom'
import Home from '../views/Home/Home'
import DetailNew from '../views/News/DetailNew/DetailNew';
import NotFound from '../views/NotFound/NotFound';

const Router = () => {
  const routers = useRoutes([
    {path: '/', element: <Home />},
    {path: '/new/:id', element: <DetailNew />},
    {path: '*', element: <NotFound />}
  ])

  return routers;
}
export default Router
