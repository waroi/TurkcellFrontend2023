import {useRoutes} from 'react-router-dom'
import Home from '../views/Home/Home'
import DetailPage from '../components/DetailPage/DetailPage'

const Router = () => {
  const routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/product/:id', element: <DetailPage />}
  ])

  return routes
}

export default Router