import {useRoutes} from 'react-router-dom'
import Home from '../views/Home/Home'
import News from '../views/News/News'

const Router = () => {
  return useRoutes([
    {path: '/', element: <Home />},
    {path: '/news', element: <News />}
  ])
}

export default Router
