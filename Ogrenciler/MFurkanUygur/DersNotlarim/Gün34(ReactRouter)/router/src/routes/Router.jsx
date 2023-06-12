import { useRoutes } from 'react-router-dom'
import Homepage from '../views/Homepage'
import Userpage from '../views/Userpage'


const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <Homepage /> },
        { path: "/user", element: <Userpage /> }
    ])
    return routes
}

export default Router