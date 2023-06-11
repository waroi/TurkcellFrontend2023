import { useRoutes } from "react-router-dom"
import HomeView from "../Views/HomeView"

const Router = () => {
const routes = useRoutes([

{path: '/', element: <HomeView />},
])
return routes;
}

export default Router