import {useRoutes} from 'react-router-dom'
import Home from '../views/Home/Home'
import DetailPage from '../components/DetailPage/DetailPage'
import NotFound from '../components/NotFound/NotFound'

const Router = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/product', element: <Home />},
    {path: '/product/:id', element: <DetailPage />},
    {path: '*', element: <NotFound />}
  ])

  return routes
}

export default Router