import { useRoutes } from "react-router-dom"
import HomeView from "../Views/HomeView"

const Route = () => {
    const routes = useRoutes([
        {path: '/', element: <HomeView />},
    ])
    return routes;
}

export default Route