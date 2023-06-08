import {useRoutes} from 'react-router-dom'
import HomeViews from '../views/HomeViews'
import userRouter from './userRouter'
import ParametreView from '../views/ParametreView'


const Router = () => {
  const routes = useRoutes([
    {path: '/', element: <HomeViews />},
    userRouter,
    {path: '/users/:id', element: <ParametreView />}
  ])
  return routes;
}

export default Router
