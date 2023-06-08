import {useRoutes} from 'react-router-dom'
import Home from '../views/Home/Home'
import DetailNew from '../views/News/DetailNew/DetailNew';

const Router = () => {
  const routers = useRoutes([
    {path: '/', element: <Home />},
    {path: '/new/:id', element: <DetailNew />}
  ])

  return routers;
}
export default Router
