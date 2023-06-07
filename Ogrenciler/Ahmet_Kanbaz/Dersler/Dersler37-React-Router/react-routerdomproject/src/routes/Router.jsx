import {useRoutes} from 'react-router-dom'
import HomeViews from '../views/HomeViews'
import userRouter from './userRouter'


const Router = () => {
  const routes = useRoutes([
    {path: '/', element: <HomeViews />},
    userRouter,
    
  ])
  return routes;
}

export default Router
